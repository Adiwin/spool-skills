# Frammo Design Properties

Use this file when setting visual properties on Frammo layers. The goal is not only valid JSON, but design-aware property choices that align with the repo’s schema and editor expectations.

## Property Naming Discipline

Match the project’s live property names exactly.

Important names:

- `fillColor`
- `strokeEnabled`
- `strokeColor`
- `strokeWidth`
- `strokePosition`
- `shadowEnabled`
- `shadowColor`
- `shadowBlur`
- `shadowOffsetX`
- `shadowOffsetY`
- `shadowOpacity`
- `cornerRadius`
- `opacity`
- `scale`
- `angle`

Avoid inventing aliases like:

- `strokeWeight`
- `rotation`
- `borderRadius`

Unless a specific layer family in the codebase explicitly uses a different field, prefer the canonical names above.

## Transform Properties

Base transform properties:

- `x`
- `y`
- `width`
- `height`
- `scale`
- `angle`
- `opacity`

Rules:

- use transform values that support the intended motion path
- avoid starting with arbitrary offsets that later force awkward compensation in animation
- keep opacity in the same value family used by the scene examples

## Fill and Background

Use:

- `fillColor` for the visible surface color or gradient
- `background` to indicate the layer should render a background fill

Examples:

```json
{
  "type": "rect",
  "background": true,
  "fillColor": "#0f172a"
}
```

Structured gradients are also valid:

```json
{
  "type": "rect",
  "background": true,
  "fillColor": {
    "type": "GRADIENT_LINEAR",
    "stops": [
      { "color": "#111827", "position": 0 },
      { "color": "#312e81", "position": 1 }
    ],
    "transform": {
      "angle": 35
    }
  }
}
```

## Stroke

Use stroke only when it adds definition.

Typical stroke configuration:

```json
{
  "strokeEnabled": true,
  "strokeColor": "#ffffff",
  "strokeWidth": 2,
  "strokePosition": "inside"
}
```

Guidance:

- thin strokes work well for crisp UI or wireframe accents
- heavy strokes can overpower compact layouts
- if `strokeWidth` is `0`, a visible stroke usually should not be implied

## Shadow

Use shadow to create separation, depth, or soft emphasis.

Typical configuration:

```json
{
  "shadowEnabled": true,
  "shadowColor": "#000000",
  "shadowBlur": 40,
  "shadowOffsetX": 0,
  "shadowOffsetY": 16,
  "shadowOpacity": 0.18
}
```

Guidance:

- product cards often want soft, large-blur shadows
- editorial scenes often want less obvious shadowing
- aggressive shadows on already dark scenes can muddy the composition

## Corner Radius

Use `cornerRadius` to define softness and surface character.

Rules:

- small radius feels crisp and product-like
- medium radius feels modern and friendly
- large radius feels soft, social, or device-like
- animate corner radius with `corner` only when the change adds meaning

## Typography Properties

Useful text properties:

- `text`
- `font`
- `fontSize`
- `lineHeight`
- `textAlign`
- `verticalAlign`
- `autoResize`
- `fillColor`

Potential advanced styling:

- `styleOverrideTable`
- `characterStyleOverrides`

Guidance:

- large display text needs tight line-height choices
- body-sized copy should prioritize readability over stylization
- keep font data explicit when the prompt depends on brand feel or weight

## Media Framing

For `image`, `svg`, and `video` layers:

- use `cornerRadius` for clipping tone
- use `shadowEnabled` for elevation when needed
- use `opacity` carefully to avoid washed-out media
- keep width and height intentional so framing feels designed

## Design Defaults

When the prompt is underspecified:

- use a clear artboard background
- give main surfaces believable radius and shadow values
- avoid maximal styling on every layer
- make one or two layers visually special instead of all of them

## Common Mistakes

- mixing old and new property names in the same scene
- adding every possible style property to every layer
- using large corner radius, thick stroke, and strong shadow together on everything
- forgetting that styling should support hierarchy, not replace it
