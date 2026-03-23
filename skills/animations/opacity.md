# Skill: Opacity Animation (`opacity`)

**Description:** A simple animation operation that changes the transparency/opacity of the targeted layer. It MUST be a single operation.

**Strict Requirements:**
To execute an "Opacity" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"opacity"`.
2. `fromValue`: The starting opacity percentage.
3. `toValue`: The ending opacity percentage.
4. `startTime`: Time in milliseconds when the transition starts.
5. `endTime`: Time in milliseconds when the transition finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "opacity",
    "fromValue": 0,
    "toValue": 100,
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "linear"
    }
  }
}
```
