# Frammo JSON Core

This file defines the core mental model for Frammo scene JSON. Use it whenever the output must be valid, importable, and structurally aligned with the existing project.

## Root Contract

Frammo scenes use a `RootSchema`-style object:

```json
{
  "layers": [],
  "operations": []
}
```

Rules:

- `layers` is required.
- `operations` is required, even if empty.
- The first meaningful scene root should be an `artboard`.
- Most scene content lives inside the artboard tree, not in top-level `operations`.

## Canonical Tree Shape

The expected scene shape is:

1. `artboard`
2. child `operationsTree`
3. child `layersTree`

Minimal example:

```json
{
  "layers": [
    {
      "id": "artboard-root",
      "item": {
        "type": "artboard",
        "x": 0,
        "y": 0,
        "width": 1920,
        "height": 1080,
        "duration": 5000,
        "background": true,
        "fillColor": "#000000",
        "opacity": 100,
        "angle": 0,
        "scale": 1
      },
      "children": [
        {
          "id": "ops-root",
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

## Mental Model

- `artboard` is the scene frame, camera-space canvas, and duration container.
- `layersTree` holds visible scene structure.
- `operationsTree` holds animation logic.
- Layer nesting expresses composition.
- Operation nesting expresses choreography.

Do not mix those roles. A scene becomes brittle when visual hierarchy and motion hierarchy are collapsed into the same concept.

## Node Shape

Every node follows this structure:

```json
{
  "id": "unique-id",
  "item": {
    "type": "text"
  },
  "children": []
}
```

Rules:

- Every node must have a unique `id`.
- `item.type` determines which additional properties are valid.
- `children` is used for containers and trees. Leaf nodes can omit it, but including it consistently is acceptable.

## Allowed High-Level Item Families

Scene roots and trees:

- `artboard`
- `layersTree`
- `operationsTree`

Visual layers:

- `layerGrp`
- `maskGrp`
- `rect`
- `ellipse`
- `shape`
- `text`
- `image`
- `svg`
- `video`
- `playAudio` when audio playback nodes are needed

Motion items:

- `opGrp`
- atomic operations like `move`, `scale`, `opacity`, `rotate`, `blur`, `resize`, `corner`, `textIn`, `textOut`

## ID Strategy

IDs do not need a special global format, but they must be:

- unique across the full scene
- stable enough to target from operations
- not reused between layers and operations

Practical guidance:

- Use short opaque IDs for generated scenes.
- Use human-readable group names in `item.name`, not necessarily in `id`.
- Never point an operation at a guessed `targetId`. Resolve it from an actual layer node.

## Targeting Rules

Every atomic operation should target a real visual node:

```json
{
  "id": "fade-card",
  "item": {
    "type": "opacity",
    "targetId": "card-layer",
    "startTime": 200,
    "endTime": 800,
    "fromValue": 0,
    "easing": { "name": "natural" }
  }
}
```

Rules:

- `targetId` should match an existing layer `id`.
- `opGrp` may omit `targetId` when it is purely structural.
- `opGrp` may include `targetId` when the group semantically belongs to one layer or module, but the real animation still happens in child operations.
- Target visual nodes, not utility nodes like `layersTree` or `operationsTree`.

## Timing Rules

All timing is in milliseconds.

Rules:

- `startTime` and `endTime` belong on operations.
- `endTime` must be greater than or equal to `startTime`.
- The artboard `duration` must cover the latest animation end.
- Staggered sequences should overlap with intention, not by accident.

## Validation Checklist

Before considering a scene valid, confirm:

1. JSON parses cleanly.
2. Root contains `layers` and `operations`.
3. An `artboard` exists.
4. The artboard contains `operationsTree` and `layersTree`.
5. Visual nodes live under `layersTree`.
6. Motion nodes live under `operationsTree`.
7. Every `targetId` resolves to an existing layer.
8. Property names match the live schema.
9. Artboard duration covers the last animation.

## Frequent Failure Modes

- Returning only the inner artboard instead of the full root object.
- Placing animated layers directly under the artboard with no `layersTree`.
- Mixing visual layers inside `operationsTree`.
- Inventing property aliases such as `strokeWeight` when the project uses `strokeWidth`.
- Returning prose, comments, or markdown instead of raw JSON.

## Core Principle

Frammo JSON should feel like authored scene data, not a loosely serialized prompt. If the scene cannot be clearly traversed as frame, structure, then choreography, it is probably modeled incorrectly.
