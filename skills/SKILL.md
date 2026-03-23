---
name: frammo-json-scene-generator
description: Master guide for generating full Frammo scene JSON using the same structure as demo scenes
metadata:
  tags: frammo, json, root-schema, layersTree, operationsTree, easing, animation
---

## Goal
Generate complete Frammo scene JSON in the same format used by [`src/demo-scenes-json`](/Users/hm_arora/projects/flick-remotion/src/demo-scenes-json).

The scene generator should return a full `RootSchema` object:

```json
{
  "layers": [
    {
      "id": "scene-id",
      "item": {
        "type": "artboard",
        "x": 0,
        "y": 0,
        "width": 1920,
        "height": 1080,
        "duration": 4000,
        "background": true,
        "fillColor": "#000000"
      },
      "children": [
        {
          "id": "operations-root",
          "item": { "type": "operationsTree" },
          "children": []
        },
        {
          "id": "layers-root",
          "item": { "type": "layersTree" },
          "children": []
        }
      ]
    }
  ],
  "operations": []
}
```

This is the required mental model:
- `artboard` is the scene root
- under `artboard`, always create:
  - one `operationsTree`
  - one `layersTree`
- visual nodes live under `layersTree`
- animation nodes live under `operationsTree`
- grouped motion uses nested `opGrp`

## Non-Negotiable Rules
- Return full JSON only. No prose.
- Follow the same property naming style used in demo scenes.
- Include all necessary animation fields, not just partial ideas.
- If an operation uses easing, include the full easing object.
- If the motion needs custom easing, include the custom easing config, not a simplified label.
- Keep IDs unique across layers and operations.
- Every operation must target a real layer ID.
- Every scene must be valid enough to round-trip through the parser.

## Scene Structure Rules
- Root scene item must be `type: "artboard"`.
- `artboard.children` should usually contain exactly:
  - `operationsTree`
  - `layersTree`
- `layersTree.children` can contain:
  - `layerGrp`
  - `maskGrp`
  - `rect`
  - `ellipse`
  - `shape`
  - `text`
  - `image`
  - `svg`
  - `video`
- `operationsTree.children` can contain:
  - single operations like `move`, `scale`, `opacity`, `rotate`, `blur`, `resize`, `corner`, `textIn`
  - nested `opGrp`

## Visual Layer Guidance
Use the same property vocabulary seen in the demos:
- `x`, `y`, `width`, `height`
- `angle`, `scale`, `opacity`
- `background`, `fillColor`
- `cornerRadius`
- `strokeEnabled`, `strokeColor`, `strokeWeight`
- `shadowEnabled`, `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`, `shadowOpacity`

Text layers should typically include:
- `text`
- `font`
- `fontSize`
- `lineHeight`
- `letterSpacing`
- `textAlign`
- `verticalAlign`
- `autoResize`
- `case`
- `kerning`
- `ligatures`

Image/video layers should include:
- `url`
- `mediaName` when appropriate
- transform and visibility properties

## Animation Rules
All timing is in milliseconds.

Operations should use these patterns:
- `move`:
  - `fromValue` and/or `toValue`
  - `moveX`, `moveY`, optional `moveZ`
- `scale`:
  - `fromValue` and/or `toValue`
- `opacity`:
  - `fromValue` and/or `toValue`
- `rotate`:
  - `fromValue` and/or `toValue`
- `blur`:
  - `fromValue` and/or `toValue`
- `resize`:
  - `anchor`
  - `fromValue` and/or `toValue`
- `textIn`:
  - `effect`
  - `split`
  - `order`
  - `offset`
  - `travelDistance`
  - `slideDirection`
  - `nodeDuration`
  - `nodeEasing`

## Grouped Presets
Use `opGrp` when a preset combines multiple operations.

Examples:
- Slide in:
  - `move` + `opacity`
- Grow in:
  - `scale` + `opacity`
- Twist in:
  - `move` + `rotate` + `scale` + `opacity`
- UI reveal:
  - often a parent `opGrp` with several nested element-specific groups

## Easing Rules
Use explicit easing objects.

Common easing examples from the codebase:
```json
{ "name": "linear" }
```

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

```json
{ "name": "back" }
```

## Custom Easing
If the animation requires custom bezier easing, include it in schema form:

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

Do not flatten custom easing into `ease-in-out`.

## Quality Bar
Use the demo scenes as the benchmark:
- scenes should be structurally complete
- timings should feel deliberate
- animations should be composed, not random
- grouped choreography is preferred over isolated disconnected ops
- text animation should use `textIn` with proper parameters
- card and UI animation should favor coordinated `opGrp` sequences

## Demo-Driven Style Anchors
Study these patterns from the demo scene folder:
- `search-bar-animation.json`: compact grouped preset sequencing
- `cascading-texts.json`: textIn + resize choreography
- `mask-demo.json`: mask group structure
- `photo-gallery.json`: multi-item move choreography
- `chat-messages-demo.json`: nested op groups and UI timing
- `glide-remix.json`: dense staggered motion with explicit easing
- `tweet.json`: complex UI assembly with layered groups

## Final Instruction
When the user describes a scene in English, convert it directly into full Frammo scene JSON using the demo scene structure, with complete layers, operations, groupings, easing, and custom easing where needed.
