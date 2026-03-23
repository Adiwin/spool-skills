---
name: frammo-motion-design
description: Use when creating, editing, or validating Frammo motion-design scenes, especially when the output must follow the project's artboard, layersTree, operationsTree, animation, and JSON schema conventions.
---

# Frammo Motion Design

Use this skill when working with Frammo scene structure, layer composition, motion choreography, or JSON scene generation.

## When to Load Rule Files

Load specific rule files based on the task:

- [rules/json-core.md](./rules/json-core.md) for full scene JSON structure, node shape, IDs, targeting, and validation rules.
- [rules/animations.md](./rules/animations.md) for atomic operations, grouped motion, timing strategy, and preset composition.
- [rules/easing.md](./rules/easing.md) for choosing easing curves, intensity, custom bezier paths, and motion tone.
- [rules/text-animations.md](./rules/text-animations.md) for `textIn` / `textOut`, stagger logic, split strategy, and typography motion.
- [rules/layers.md](./rules/layers.md) for artboards, text, image, video, shapes, masks, and visual hierarchy.
- [rules/groups.md](./rules/groups.md) for `layerGrp`, `maskGrp`, `opGrp`, and when structural grouping differs from motion grouping.
- [rules/design-properties.md](./rules/design-properties.md) for visual property naming, fill/stroke/shadow guidance, and practical styling defaults.

## Project Grounding

Use these project conventions as the source of truth:

- Demo scenes in `src/demo-scenes-json/`
- Schema definitions in `src/types/schema.ts`
- AI JSON-generation rules in `src/app/api/ai/generate/route.ts`

## Working Style

- Prefer full scene JSON over shorthand descriptions when the task is executable scene output.
- Match existing property names exactly instead of inventing alternate keys.
- Keep `layersTree` for visual structure and `operationsTree` for motion structure.
- Use `opGrp` for coordinated motion phrases instead of scattering unrelated atomic operations.
- Keep motion deliberate: staged entrances, coherent exits, and clear focal hierarchy.

## Output Expectations

When asked for scene payloads:

- Return one top-level JSON object.
- Ensure `layers` contains an `artboard` tree.
- Ensure the `artboard` contains both `operationsTree` and `layersTree`.
- Ensure every operation `targetId` resolves to a real layer.
- Ensure timing, easing, and property names are importable by the existing parser.
