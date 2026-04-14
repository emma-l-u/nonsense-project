// Procedural ambient soundscapes — pure Web Audio API, no audio files.
// Each character gets a layered synthesis tailored to their city relationship.

const FADE = 2.0 // master fade duration in seconds

// ── Shared helpers ────────────────────────────────────────────────────────────

function makeNoiseSource(ctx, secs = 2) {
  const n = Math.floor(ctx.sampleRate * secs)
  const buf = ctx.createBuffer(1, n, ctx.sampleRate)
  const ch = buf.getChannelData(0)
  for (let i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1
  const src = ctx.createBufferSource()
  src.buffer = buf
  src.loop = true
  return src
}

function makeFilter(ctx, type, freq, Q = 1) {
  const f = ctx.createBiquadFilter()
  f.type = type
  f.frequency.value = freq
  f.Q.value = Q
  return f
}

function makeGain(ctx, value) {
  const g = ctx.createGain()
  g.gain.value = value
  return g
}

// Connect a → b → c → ... and return the last node
function chain(...nodes) {
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1])
  return nodes[nodes.length - 1]
}

// ── Base class ────────────────────────────────────────────────────────────────

class Soundscape {
  constructor(ctx) {
    this.ctx = ctx
    this.master = makeGain(ctx, 0)
    this.master.connect(ctx.destination)
    this._srcs = []
    this._oscs = []
    this._timers = []
    this._alive = false
  }

  _fadeIn() {
    const { ctx, master } = this
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.setValueAtTime(0, ctx.currentTime)
    master.gain.linearRampToValueAtTime(1, ctx.currentTime + FADE)
  }

  // Schedule fn after ms milliseconds, but only while still alive
  _later(fn, ms) {
    if (!this._alive) return
    const id = setTimeout(() => {
      if (!this._alive) return
      fn()
    }, ms)
    this._timers.push(id)
  }

  stop() {
    this._alive = false
    this._timers.forEach(clearTimeout)
    this._timers = []
    const { ctx, master } = this
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + FADE)
    setTimeout(() => {
      this._srcs.forEach(s => { try { s.stop() } catch {} })
      this._oscs.forEach(o => { try { o.stop() } catch {} })
      try { master.disconnect() } catch {}
    }, (FADE + 0.3) * 1000)
  }
}

// ── Luis: muffled traffic + distant playground ────────────────────────────────
// Luis is small and cautious — the city sounds far away and slightly scary.
// Traffic is heard through walls; playground sounds peek through occasionally.

class LuisSoundscape extends Soundscape {
  start() {
    this._alive = true
    const { ctx, master } = this

    // Low muffled traffic drone
    const traffic = makeNoiseSource(ctx)
    chain(traffic, makeFilter(ctx, 'lowpass', 150, 1.8), makeGain(ctx, 0.45), master)
    traffic.start()
    this._srcs.push(traffic)

    // Subtle mid rumble (city hum through concrete)
    const rumble = makeNoiseSource(ctx)
    chain(rumble, makeFilter(ctx, 'bandpass', 260, 2.5), makeGain(ctx, 0.18), master)
    rumble.start()
    this._srcs.push(rumble)

    this._fadeIn()
    this._schedulePlayground()
  }

  _schedulePlayground() {
    this._later(() => {
      const { ctx, master } = this
      // Child squeal — a quick frequency glide upward
      const freq = 650 + Math.random() * 750
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.linearRampToValueAtTime(freq * 1.35, ctx.currentTime + 0.07)
      osc.frequency.linearRampToValueAtTime(freq * 0.85, ctx.currentTime + 0.2)

      const env = makeGain(ctx, 0)
      env.gain.setValueAtTime(0, ctx.currentTime)
      env.gain.linearRampToValueAtTime(0.11, ctx.currentTime + 0.02)
      env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28)

      const pan = ctx.createStereoPanner()
      pan.pan.value = (Math.random() * 2 - 1) * 0.65

      chain(osc, env, pan, master)
      osc.start()
      osc.stop(ctx.currentTime + 0.32)

      this._schedulePlayground()
    }, 1800 + Math.random() * 3800)
  }
}

// ── Anne: birdsong + wind through leaves ──────────────────────────────────────
// Anne strolls slowly, dog in tow. The city retreats; nature comes forward.

class AnneSoundscape extends Soundscape {
  start() {
    this._alive = true
    const { ctx, master } = this

    // Gentle wind through leaves — band-pass noise, slowly modulated
    const wind = makeNoiseSource(ctx)
    const windGain = makeGain(ctx, 0.28)
    chain(wind, makeFilter(ctx, 'bandpass', 850, 0.45), windGain, master)
    wind.start()
    this._srcs.push(wind)

    // LFO for wind gusts
    const lfo = ctx.createOscillator()
    lfo.type = 'sine'
    lfo.frequency.value = 0.12
    const lfoGain = makeGain(ctx, 0.14)
    chain(lfo, lfoGain)
    lfoGain.connect(windGain.gain)
    lfo.start()
    this._oscs.push(lfo)

    // High rustle layer
    const rustle = makeNoiseSource(ctx)
    chain(rustle, makeFilter(ctx, 'highpass', 2200, 0.6), makeGain(ctx, 0.07), master)
    rustle.start()
    this._srcs.push(rustle)

    this._fadeIn()
    this._scheduleBirds()
  }

  _scheduleBirds() {
    this._later(() => {
      // Sometimes a cluster of 2-3 chirps in quick succession
      const count = Math.random() < 0.45 ? 1 : Math.random() < 0.6 ? 2 : 3
      for (let i = 0; i < count; i++) {
        this._later(() => this._chirp(), i * (120 + Math.random() * 180))
      }
      this._scheduleBirds()
    }, 1000 + Math.random() * 2800)
  }

  _chirp() {
    const { ctx, master } = this
    const base = 1900 + Math.random() * 2000
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(base, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(base * 1.45, ctx.currentTime + 0.055)
    osc.frequency.linearRampToValueAtTime(base * 1.1, ctx.currentTime + 0.095)
    osc.frequency.linearRampToValueAtTime(base * 1.55, ctx.currentTime + 0.14)

    const env = makeGain(ctx, 0)
    env.gain.setValueAtTime(0, ctx.currentTime)
    env.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 0.018)
    env.gain.setValueAtTime(0.16, ctx.currentTime + 0.1)
    env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.19)

    const pan = ctx.createStereoPanner()
    pan.pan.value = (Math.random() * 2 - 1) * 0.75

    chain(osc, env, pan, master)
    osc.start()
    osc.stop(ctx.currentTime + 0.22)
  }
}

// ── Beate: urban street buzz + passing cars ───────────────────────────────────
// Beate is efficient, always moving. The city is loud and full of purpose.

class BeateSoundscape extends Soundscape {
  start() {
    this._alive = true
    const { ctx, master } = this

    // Dense urban drone — broad noise floor
    const street = makeNoiseSource(ctx)
    chain(street, makeFilter(ctx, 'lowpass', 900, 0.7), makeGain(ctx, 0.38), master)
    street.start()
    this._srcs.push(street)

    // Mid buzz layer — voices, engines, city life
    const buzz = makeNoiseSource(ctx)
    chain(buzz, makeFilter(ctx, 'bandpass', 420, 1.6), makeGain(ctx, 0.22), master)
    buzz.start()
    this._srcs.push(buzz)

    this._fadeIn()
    this._scheduleCar()
  }

  _scheduleCar() {
    this._later(() => {
      const { ctx, master } = this
      const dur = 1.1 + Math.random() * 0.9
      const rightToLeft = Math.random() < 0.5

      const car = makeNoiseSource(ctx)
      const cpf = ctx.createBiquadFilter()
      cpf.type = 'bandpass'
      // Doppler: frequency rises as car approaches, drops as it passes
      cpf.frequency.setValueAtTime(200, ctx.currentTime)
      cpf.frequency.linearRampToValueAtTime(650, ctx.currentTime + dur * 0.42)
      cpf.frequency.linearRampToValueAtTime(170, ctx.currentTime + dur)
      cpf.Q.value = 1.8

      const cg = makeGain(ctx, 0)
      cg.gain.setValueAtTime(0, ctx.currentTime)
      cg.gain.linearRampToValueAtTime(0.55, ctx.currentTime + dur * 0.35)
      cg.gain.setValueAtTime(0.55, ctx.currentTime + dur * 0.5)
      cg.gain.linearRampToValueAtTime(0, ctx.currentTime + dur)

      const cpan = ctx.createStereoPanner()
      cpan.pan.setValueAtTime(rightToLeft ? 1 : -1, ctx.currentTime)
      cpan.pan.linearRampToValueAtTime(rightToLeft ? -1 : 1, ctx.currentTime + dur)

      chain(car, cpf, cg, cpan, master)
      car.start()
      car.stop(ctx.currentTime + dur + 0.15)

      this._scheduleCar()
    }, 1800 + Math.random() * 2800)
  }
}

// ── Benedikt: wind rush + bicycle chain clicks ────────────────────────────────
// Benedikt reads the city as flow. Speed is meditative. The chain is a rhythm.

class BenediktSoundscape extends Soundscape {
  start() {
    this._alive = true
    const { ctx, master } = this

    // Cycling wind — high-pass, with gust modulation
    const wind = makeNoiseSource(ctx)
    const windGain = makeGain(ctx, 0.42)
    chain(wind, makeFilter(ctx, 'highpass', 480, 0.7), windGain, master)
    wind.start()
    this._srcs.push(wind)

    // LFO for gusts (slightly faster than Anne's — cycling speed)
    const lfo = ctx.createOscillator()
    lfo.type = 'sine'
    lfo.frequency.value = 0.25
    const lfoGain = makeGain(ctx, 0.22)
    chain(lfo, lfoGain)
    lfoGain.connect(windGain.gain)
    lfo.start()
    this._oscs.push(lfo)

    // High whistle layer — wind over helmet
    const whistle = makeNoiseSource(ctx)
    chain(whistle, makeFilter(ctx, 'bandpass', 2800, 3.5), makeGain(ctx, 0.055), master)
    whistle.start()
    this._srcs.push(whistle)

    this._fadeIn()
    this._scheduleChain()
  }

  _scheduleChain() {
    // ~78 RPM cadence — one click every ~770 ms, with slight variation
    this._later(() => {
      const { ctx, master } = this
      const click = makeNoiseSource(ctx, 0.04)
      const env = makeGain(ctx, 0)
      env.gain.setValueAtTime(0, ctx.currentTime)
      env.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 0.003)
      env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      chain(click, makeFilter(ctx, 'highpass', 1400, 2.2), env, master)
      click.start()
      click.stop(ctx.currentTime + 0.06)
      this._scheduleChain()
    }, 700 + Math.random() * 150)
  }
}

// ── Factory ───────────────────────────────────────────────────────────────────

const SCAPES = { luis: LuisSoundscape, anne: AnneSoundscape, beate: BeateSoundscape, benedikt: BenediktSoundscape }

export function createSoundscape(ctx, character) {
  const Cls = SCAPES[character]
  return Cls ? new Cls(ctx) : null
}
