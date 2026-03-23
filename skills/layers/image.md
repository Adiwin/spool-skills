# Layer Skill: Image (`image`)

Use image layers for photos, logos, screenshots, textures, or uploaded assets.

## Best For
- product screenshots
- UI mockups
- brand marks
- editorial cutouts
- reference imagery

## Output
Create an element with:
- `type: "image"`
- `properties.src`
- `properties.objectFit`
- `properties.borderRadius`

## Strong Defaults
- `objectFit: "cover"` for photography and hero visuals
- `objectFit: "contain"` for logos, UI screenshots, and product renders
- `borderRadius: 0` unless the prompt implies cards, devices, or soft modern framing

## Quality Notes
- Never let images feel pasted on. Frame them with spacing, scale hierarchy, and often a support shape.
- For premium layouts, pair image reveals with subtle `move`, `opacity`, or `blur` instead of aggressive spins.
