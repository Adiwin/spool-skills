# Frammo Animations

Use this file for motion design strategy, operation selection, timing composition, and grouped animation authoring in Frammo.

## Animation Model

Frammo separates visual layers from motion operations:

- visual objects live in `layersTree`
- motion logic lives in `operationsTree`
- compound motion is organized with `opGrp`

This means animation is not just a property change. It is an authored motion layer sitting beside the visual tree.

## Atomic Operations

Common atomic operations:

- `move`
- `scale`
- `opacity`
- `rotate`
- `blur`
- `resize`
- `corner`
- `textIn`
- `textOut`

Each atomic operation should do one clear job. If the motion idea needs multiple simultaneous changes, prefer an `opGrp`.

## Common Operation Shapes

### Move

Use for position shifts, entrances, exits, and directional emphasis.

```json
{
  "type": "move",
  "targetId": "title",
  "startTime": 0,
  "endTime": 700,
  "fromValue": { "x": 0, "y": 80 },
  "toValue": { "x": 0, "y": 0 },
  "easing": { "name": "natural" }
}
```

Guidance:

- Use `fromValue` for entrances.
- Use `toValue` for exits or landings.
- Keep travel distance proportional to layer scale and scene tone.

### Scale

Use for pop-ins, emphasis, and subtle breathing motion.

```json
{
  "type": "scale",
  "targetId": "card",
  "startTime": 100,
  "endTime": 500,
  "fromValue": 0.92,
  "toValue": 1,
  "easing": { "name": "back" }
}
```

Guidance:

- Subtle UI motion often lives in the `0.94` to `1.00` range.
- Playful motion can start lower.
- Large overshoot on dense editorial layouts usually feels cheap.

### Opacity

Use to control reveal strength and staging.

```json
{
  "type": "opacity",
  "targetId": "caption",
  "startTime": 150,
  "endTime": 450,
  "fromValue": 0,
  "toValue": 100,
  "easing": { "name": "linear" }
}
```

Guidance:

- Use opacity to support another motion, not replace it everywhere.
- Long fade-only entrances often feel lifeless unless the design asks for restraint.

### Rotate

Use for angle-led motion, card twists, playful UI, or directional energy.

```json
{
  "type": "rotate",
  "targetId": "sticker",
  "startTime": 0,
  "endTime": 600,
  "fromValue": -12,
  "toValue": 0,
  "easing": { "name": "natural" }
}
```

### Blur

Use for focus pulls, glow-like entrances, or premium soft landings.

```json
{
  "type": "blur",
  "targetId": "headline",
  "startTime": 0,
  "endTime": 500,
  "fromValue": 20,
  "toValue": 0,
  "easing": { "name": "natural" }
}
```

Guidance:

- Blur should usually resolve fully to `0`.
- Heavy blur is good for dramatic entrances, not dense body copy.

### Resize

Use for masked reveals, directional growth, bars, panels, and wipes.

```json
{
  "type": "resize",
  "targetId": "panel",
  "startTime": 0,
  "endTime": 800,
  "anchor": "s",
  "fromValue": { "height": 0 },
  "toValue": { "height": 320 },
  "easing": { "name": "natural" }
}
```

Guidance:

- `anchor` determines which side feels pinned during growth.
- `resize` is ideal for panels, underlines, bars, reveal masks, and clipping containers.

### Corner

Use when a layer’s radius needs to animate from sharp to soft or the reverse.

```json
{
  "type": "corner",
  "targetId": "thumb",
  "startTime": 300,
  "endTime": 900,
  "fromValue": 0,
  "toValue": 32,
  "easing": { "name": "natural" }
}
```

## Grouped Motion with `opGrp`

Use `opGrp` when one motion idea contains several operations that should be understood together.

Example:

```json
{
  "id": "hero-intro",
  "item": {
    "type": "opGrp",
    "name": "Hero intro"
  },
  "children": [
    {
      "id": "hero-move",
      "item": {
        "type": "move",
        "targetId": "hero-card",
        "startTime": 0,
        "endTime": 700,
        "fromValue": { "y": 80 },
        "toValue": { "y": 0 },
        "easing": { "name": "natural" }
      }
    },
    {
      "id": "hero-opacity",
      "item": {
        "type": "opacity",
        "targetId": "hero-card",
        "startTime": 0,
        "endTime": 450,
        "fromValue": 0,
        "toValue": 100,
        "easing": { "name": "linear" }
      }
    }
  ]
}
```

Use `opGrp` for:

- slide + fade entrances
- grow + fade entrances
- UI assemblies with several child elements
- staged reveal sequences
- nested choreography where one module has its own sub-phrases

## Timing Composition

Strong Frammo motion usually follows a phrase-based rhythm:

- establish focal object
- reveal secondary support
- add micro-detail
- exit or transition cleanly

Practical ranges:

- quick UI snap: `180` to `350` ms
- standard entrance: `400` to `900` ms
- premium editorial reveal: `700` to `1400` ms
- stagger offsets: `30` to `120` ms depending on density

## Preset Thinking

Useful preset combinations:

- slide in: `move` + `opacity`
- grow in: `scale` + `opacity`
- twist in: `move` + `rotate` + `scale` + `opacity`
- panel reveal: `resize` + child text stagger
- chat/UI loading: nested `opGrp` with multiple opacity loops or sequenced bubbles

The important idea is that presets are compositional, not magical. A preset should still be legible as real underlying operations.

## Motion Hierarchy

When many objects animate at once:

- animate parents for shared motion
- animate children for detail
- stagger siblings to create order
- avoid identical timing across every layer unless mechanical sync is the goal

## Quality Bar

Good Frammo motion feels:

- intentional
- layered
- readable
- paced around emphasis

Weak Frammo motion usually looks:

- all-at-once
- overly linear
- over-bouncy
- composed of unrelated one-off effects

## Common Mistakes

- Using only opacity when the scene needs spatial motion.
- Using `back` easing on serious, editorial, or luxury compositions.
- Animating every layer independently instead of grouping them into phrases.
- Making intros too long without a clear payoff.
- Creating operations with no practical target or no visual effect.
