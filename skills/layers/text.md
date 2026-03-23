# Layer Skill: Text (`text`)

Text is the highest-leverage layer type in Frammo. Use it with strong hierarchy and restraint.

## Best For
- headlines
- subheads
- numeric callouts
- labels and captions
- editorial pull quotes

## Output
Create an element with:
- `type: "text"`
- `properties.textContent`
- typography properties like `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`

## Strong Defaults
- headline: 72 to 160px
- support copy: 24 to 40px
- `lineHeight`: 0.9 to 1.15 for headlines, 1.15 to 1.4 for support copy
- `textAlign`: match the layout logic, not habit
- `resizeBehavior`: use `"fixed"` when composing a deliberate block, auto sizing when the text should hug content

## Quality Notes
- Favor 1 to 2 font weights in a scene.
- Use scale contrast and spacing before adding extra decoration.
- Large type with clean timing usually looks more premium than many small labels moving at once.
- For kinetic prompts, animate by words or lines first. Letters are a special effect, not the default.
