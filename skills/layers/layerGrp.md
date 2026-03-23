# Layer Skill: Group (`group` / `layerGrp`)

Use groups to keep multiple layers moving or aligning as one unit.

## Best For
- headline + supporting line lockups
- cards with icon + text
- UI modules
- masked or clipped compositions

## Important Note
Shapes should usually be actual `shape` elements now.
Groups are for structure and shared movement, not for faking every rectangle.

## Good Uses
- wrap a title and subtitle so they can slide together
- bundle a card background with internal labels
- clip content inside a frame when `clipsContent` is needed

## Avoid
- making every standalone box a group
- deep nesting unless the composition genuinely needs it
- using groups where one shape or one text layer would do
