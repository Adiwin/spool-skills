# Layer Skill: Shape (`shape`)

Use for geometric layers the editor can render directly.

## Best For
- cards
- panels
- circles and dots
- abstract accents
- arrows, stars, badges, simple icons

## Output
Create an element with:
- `type: "shape"`
- `properties.shapeType`: `"rectangle" | "circle" | "triangle" | "polygon" | "star" | "path"`

## Strong Defaults
- Use `rectangle` for cards, buttons, frames, underlines, bars, and masks.
- Use `circle` for dots, pills, avatars, spotlight accents.
- Use `path` for custom icon silhouettes or organic accent shapes.
- Prefer simple silhouettes over overly detailed vectors.

## Recommended Properties
```json
{
  "type": "shape",
  "name": "Accent Card",
  "startFrame": 0,
  "durationInFrames": 150,
  "properties": {
    "shapeType": "rectangle",
    "x": 640,
    "y": 260,
    "z": 0,
    "width": 640,
    "height": 360,
    "rotation": 0,
    "rotationX": 0,
    "rotationY": 0,
    "opacity": 1,
    "scaleX": 1,
    "scaleY": 1,
    "blur": 0,
    "fill": "#111111",
    "stroke": "transparent",
    "strokeWidth": 0,
    "cornerRadius": 28
  }
}
```

## Quality Notes
- Large surfaces should usually have subtle corner radius.
- Use one strong fill and one restrained accent, not multiple competing colors.
- For premium work, large rectangles + good spacing beat complicated decorative shapes.
