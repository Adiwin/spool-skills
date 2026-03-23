# Frammo Groups

Use this file for grouping strategy in Frammo. Grouping happens in two different systems and they should not be confused.

## Two Kinds of Grouping

Visual grouping:

- `layerGrp`
- `maskGrp`

Motion grouping:

- `opGrp`

This distinction is one of the most important Frammo concepts.

## `layerGrp`

Use `layerGrp` to bind multiple visual nodes into one compositional module.

Best for:

- cards
- UI modules
- headline + subtitle lockups
- composite stickers or badges
- grouped content that should move together

Common properties:

- `x`
- `y`
- `width`
- `height`
- `cornerRadius`
- `clipsContent`
- `background`
- `fillColor`
- visibility and transform properties

Example:

```json
{
  "id": "hero-card",
  "item": {
    "type": "layerGrp",
    "x": 120,
    "y": 200,
    "width": 720,
    "height": 420,
    "cornerRadius": 32,
    "clipsContent": true,
    "background": true,
    "fillColor": "#ffffff"
  },
  "children": []
}
```

## `maskGrp`

Use `maskGrp` when content should be clipped by a container or reveal aperture.

Best for:

- image crops
- masked text reveals
- sliding content inside a viewport
- framed compositions where child overflow must be hidden

Use `maskGrp` when the clipping behavior is essential to the design, not just because it exists.

## `opGrp`

Use `opGrp` to group related animation operations into a readable motion phrase.

Best for:

- combined entrance presets
- module-level animation bundles
- nested choreography
- repeating sub-sequences

Example:

```json
{
  "id": "card-enter",
  "item": {
    "type": "opGrp",
    "name": "Card enter"
  },
  "children": [
    {
      "id": "card-enter-move",
      "item": {
        "type": "move",
        "targetId": "hero-card",
        "startTime": 0,
        "endTime": 700,
        "fromValue": { "y": 60 },
        "toValue": { "y": 0 },
        "easing": { "name": "natural" }
      }
    },
    {
      "id": "card-enter-opacity",
      "item": {
        "type": "opacity",
        "targetId": "hero-card",
        "startTime": 0,
        "endTime": 400,
        "fromValue": 0,
        "toValue": 100,
        "easing": { "name": "linear" }
      }
    }
  ]
}
```

## How to Decide

Choose `layerGrp` when the relationship is spatial or compositional.

Choose `opGrp` when the relationship is temporal or choreographic.

Choose `maskGrp` when overflow control is a design requirement.

If you find yourself asking, “Should these items live together even without animation?” that usually points to `layerGrp`.

If you are asking, “Should these operations be understood as one motion beat?” that usually points to `opGrp`.

## Parent vs Child Motion

Good group strategy often layers parent and child motion:

- parent group handles global entrance
- child layers handle detail reveals

Example:

- a card `layerGrp` slides in as one object
- inside it, a title uses `textIn`
- an icon fades slightly later

This creates clear hierarchy without overcomplicating the scene tree.

## Grouping Quality Bar

Good grouping:

- simplifies the scene
- clarifies intention
- supports animation targeting
- reflects real composition

Bad grouping:

- adds wrappers with no purpose
- hides poor scene planning
- duplicates structure in both layers and operations unnecessarily

## Common Mistakes

- Using `layerGrp` as a substitute for every shape.
- Using `opGrp` with only one child and no semantic reason.
- Adding deep group nesting that makes targeting harder instead of easier.
- Forgetting that masks are a visual containment tool, not just another generic group type.
