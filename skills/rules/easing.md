# Frammo Easing

Use this file when choosing motion curves for Frammo operations. Easing should reflect tone, hierarchy, and material feel, not habit.

## Core Principle

Pick easing based on the emotion and surface of the motion:

- crisp UI needs confidence
- editorial motion needs restraint
- playful motion can use overshoot
- mechanical motion can be linear on purpose

## Common Easing Objects

Simple named easing:

```json
{ "name": "linear" }
```

```json
{ "name": "natural" }
```

```json
{ "name": "back" }
```

Schema-style easing with intensity:

```json
{
  "name": "smooth:standard:v1",
  "schema": "v1",
  "config": { "intensity": 50 }
}
```

```json
{
  "name": "natural:standard:v1",
  "schema": "v1",
  "config": { "intensity": 80 }
}
```

Custom path easing:

```json
{
  "name": "custom:path:v1",
  "config": {
    "controlPoints": [
      { "x": 0.25, "y": 0.1 },
      { "x": 0.29, "y": 0.63 }
    ]
  }
}
```

## Recommended Mapping

- entrances: `natural`, soft `smooth:*`, or selective `back`
- exits: restrained `natural` or custom curves with stronger acceleration
- utility fades: `linear` when opacity is just a support layer
- premium/editorial: custom path or softer schema-based natural/smooth
- social/playful: `back` only when the brief supports bounce or cheek

## Tone-Based Selection

### Product UI

Prefer:

- `natural`
- `smooth:standard:v1`
- soft custom curves

Why:

- product motion should feel competent and polished
- it should not wobble unless delight is explicitly wanted

### Editorial / Luxury

Prefer:

- custom bezier
- controlled `smooth:*`
- lower-intensity natural curves

Why:

- the motion should feel authored, not default
- restraint usually communicates higher taste than obvious overshoot

### Playful / Social / Creator

Prefer:

- `back`
- higher-intensity natural curves
- occasional punchier custom paths

Why:

- these scenes benefit from energy and personality
- a small overshoot can make cards, avatars, stickers, and bubbles feel alive

## Intensity Guidance

If using easing objects with `config.intensity`:

- `20` to `40`: subtle, calm, editorial
- `40` to `70`: balanced general-purpose motion
- `70` to `90`: energetic, stylized, attention-seeking

High intensity is easiest to overuse. Increase it only when the composition has enough negative space and visual permission.

## Custom Path Guidance

Use `custom:path:v1` when default named curves are not enough.

Best uses:

- hero transitions
- product reveals
- cinematic text timing
- bespoke brand motion

Rules:

- keep control points readable and intentional
- avoid pathological curves that snap, plateau awkwardly, or feel broken
- use custom easing sparingly so it stays meaningful

## Operation Pairing Tips

- `move` often benefits from `natural` or custom path
- `opacity` often works best with `linear` or softer natural easing
- `scale` can use `back` for playful pop, but not everywhere
- `resize` usually wants `natural` or smooth schema-based easing
- `textIn` should coordinate parent `easing` with `nodeEasing`, not treat them as random independent choices

## Avoid

- `linear` on every operation
- `back` on every entrance
- mixing wildly different easing families inside one small motion phrase
- calling a custom bezier “premium” without checking whether it actually feels premium

## Practical Rule

If you cannot explain why a curve fits the brief, it is probably just a default. Frammo scenes look best when easing choices reinforce the scene’s visual voice.
