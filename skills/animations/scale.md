# Skill: Scale Animation (`scale`)

**Description:** A simple operation animation that changes the size of the target layer over a specified time duration. It MUST be a single operation.

**Strict Requirements:**
To execute a "Scale" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"scale"`.
2. `fromValue`: The starting scale multiplier.
3. `toValue`: The ending scale multiplier.
4. `startTime`: Time in milliseconds when the scale begins.
5. `endTime`: Time in milliseconds when the scale finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "scale",
    "fromValue": 0.5,
    "toValue": 1,
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "slowDown"
    }
  }
}
```
