# Skill: Grow In Animation (`growIn`)

**Description:** An entrance animation that scales the layer up from a smaller size to its full size. It MUST be a single operation.

**Strict Requirements:**
To execute a "Grow In" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"growIn"`.
2. `scale`: The starting scale multiplier before it grows to 1.0.
3. `startTime`: Time in milliseconds when the animation starts.
4. `endTime`: Time in milliseconds when the animation finishes.
5. `targetId`: The ID of the targeted layer.
6. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "growIn",
    "scale": 0.5,
    "startTime": 100,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "slowDown"
    }
  }
}
```
