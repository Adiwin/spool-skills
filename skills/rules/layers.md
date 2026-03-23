# Frammo Layers

Use this file for visual hierarchy, layer selection, nesting decisions, and scene construction inside `layersTree`.

## Layer Families

Common Frammo layer types:

- `artboard`
- `layerGrp`
- `maskGrp`
- `rect`
- `ellipse`
- `shape`
- `text`
- `image`
- `svg`
- `video`
- `playAudio`

Every layer type serves a distinct role. Pick the simplest one that truthfully represents the design.

## Artboard

The artboard is the scene root and timing container.

Typical properties:

- `x`
- `y`
- `width`
- `height`
- `duration`
- `background`
- `fillColor`
- `opacity`
- `angle`
- `scale`

Rules:

- one scene should normally have one main artboard root
- artboard dimensions should match the intended format
- artboard color should support the scene, not compete with foreground elements

## Text Layers

Use `text` for real typography.

Typical properties:

```json
{
  "type": "text",
  "x": 120,
  "y": 140,
  "width": 840,
  "height": 180,
  "text": "Build motion with intent",
  "font": {
    "name": "Inter",
    "weight": 700
  },
  "fontSize": 92,
  "lineHeight": 1.05,
  "textAlign": "left",
  "fillColor": "#111111"
}
```

Guidance:

- use explicit typography properties rather than encoding design intent in prose
- width and height should support line wrapping intentionally
- large hero text benefits from cleaner layout and fewer decorative effects

## Shape Layers

Use:

- `rect` for rectangles and panels
- `ellipse` for circular or arc-like forms
- `shape` for more custom geometry or path-driven content

Shape layers usually carry:

- `x`, `y`, `width`, `height`
- `fillColor`
- `background`
- `cornerRadius`
- `strokeWidth`, `strokeColor`, `strokePosition`
- shadow properties

Use a real shape layer instead of a group when the object is visually one surface.

## Image / SVG / Video Layers

Use media layers when the content has an external source.

Common properties:

- `url`
- `mediaName`
- `x`, `y`, `width`, `height`
- `cornerRadius`
- `opacity`
- `shadowEnabled`

Video-specific properties may include:

- `volume`
- `playbackRate`
- `startFrom`
- `videoDuration`

Rules:

- preserve realistic media framing
- use corner radius and shadows intentionally
- avoid over-styling media unless the art direction asks for it

## Audio Nodes

Use `playAudio` for audio playback configuration inside the schema when needed.

Common properties:

- `url`
- `mediaName`
- `volume`
- `playbackRate`
- `startTime`
- `endTime`
- `offset`

## Nesting Guidance

Keep `layersTree` semantically clean:

- parent containers should represent real compositional units
- children should inherit context from their parent grouping
- do not create deep nesting with no design reason

Good nesting examples:

- card group containing panel, icon, title, subtitle
- phone-frame group containing screen and overlays
- masked image inside a clipping container

Weak nesting examples:

- every single box wrapped in a group for no reason
- a group used when one `rect` would do
- decorative nesting that exists only because the generator could not decide

## Layout and Hierarchy

Strong Frammo layouts usually have:

- one clear focal object
- secondary support elements
- controlled spacing
- motion-ready composition

When building layers, think in this order:

1. frame
2. focal element
3. supporting elements
4. detail elements

This leads to better motion later because the design already has hierarchy.

## Layer Quality Rules

- Place elements intentionally within the artboard.
- Size containers so their animations make sense.
- Use groups for compositional logic, not as a universal wrapper.
- Keep text readable and media framed cleanly.

## Common Mistakes

- Using `layerGrp` instead of a shape layer for a simple panel.
- Omitting width or height on layers that clearly need explicit sizing.
- Creating a scene with no visual hierarchy, then trying to rescue it with animation.
- Treating `layersTree` as a dump of unrelated nodes.
