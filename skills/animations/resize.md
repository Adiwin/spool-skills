# Skill: Resize Animation (`resize`)

**Description:** Animates the dimensions (width/height) of a layer starting from a specific anchor point. It MUST be a single operation.

**Strict Requirements:**
To execute a "Resize" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"resize"`.
2. `anchor`: Defines the origin of the resize.
3. `fromValue`: An object containing the starting `width` and/or `height`.
4. `toValue`: Optional object containing the ending `width` and/or `height`.
5. `startTime`: Time in milliseconds when the resize starts.
6. `endTime`: Time in milliseconds when the resize finishes.
7. `targetId`: The ID of the targeted layer.
8. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "resize",
    "anchor": "center",
    "fromValue": {
      "width": 80,
      "height": 80
    },
    "startTime": 400,
    "endTime": 1100,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "natural"
    }
  }
}
```
