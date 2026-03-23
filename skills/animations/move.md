# Skill: Move Animation (`move`)

**Description:** Translates the target layer from one position to another by changing its X and Y offsets. It MUST be a single operation.

**Strict Requirements:**
To execute a "Move" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"move"`.
2. `fromValue`: Specifies the starting offset as an object containing `moveX` and `moveY`. `moveZ` is optional.
3. `toValue`: Specifies the ending offset as an object containing `moveX` and `moveY`. `moveZ` is optional.
4. `startTime`: Time in milliseconds when the animation starts.
5. `endTime`: Time in milliseconds when the animation finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "move",
    "fromValue": {
      "moveX": -50,
      "moveY": 50
    },
    "toValue": {
      "moveX": 0,
      "moveY": 0
    },
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "natural"
    }
  }
}
```
