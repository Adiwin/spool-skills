# Skill: Rotate Animation (`rotate`)

**Description:** Rotates a layer around its origin point. It MUST be a single operation.

**Strict Requirements:**
To execute a "Rotate" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"rotate"`.
2. `fromValue`: The starting rotation angle in degrees.
3. `toValue`: The ending rotation angle in degrees.
4. `startTime`: Time in milliseconds when the animation starts.
5. `endTime`: Time in milliseconds when the animation finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve when needed.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "rotate",
    "fromValue": -90,
    "toValue": 0,
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "natural"
    }
  }
}
```
