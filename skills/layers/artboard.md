# Layer Skill: Artboard (`artboard`)

Use the artboard as the scene frame and timing container.

## Current Engine Notes
- Scenes are typically authored on a `1920x1080` canvas unless the prompt clearly asks for vertical.
- Duration is best thought of as frames in the editor layer model and may later serialize to schema.
- The artboard should support the motion pacing, not become a design element itself.

## Recommended Defaults
- Horizontal video: `1920x1080`
- Vertical social: `1080x1920`
- Default scene length: `150` to `240` frames unless the prompt implies a shorter promo beat
- Backgrounds should be simple and intentional: solid, soft gradient, or very restrained contrast

## Guidance
- Keep enough duration for motion to breathe.
- If the prompt is text-led, leave more negative space.
- If the prompt is UI/product-led, use a quieter background so the main object reads clearly.
