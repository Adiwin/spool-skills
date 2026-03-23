# Skill: Shrink Out Animation (`shrinkOut`)

**Description:** An exit animation that scales the layer down from its full size to a smaller size. It MUST be a single operation.

**Strict Requirements:**
To execute a "Shrink Out" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"shrinkOut"`.
2. `scale`: The final scale multiplier the layer shrinks to before disappearing.
3. `startTime`: Time in milliseconds when the animation starts.
4. `endTime`: Time in milliseconds when the animation finishes.
5. `targetId`: The ID of the targeted layer.
6. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "shrinkOut",
    "scale": 0.5,
    "startTime": 100,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "accelerate"
    }
  }
}
```
