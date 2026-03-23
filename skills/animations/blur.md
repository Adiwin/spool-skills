# Skill: Blur Animation (`blur`)

**Description:** Animates the blur amount of a target layer. It MUST be a single operation.

**Strict Requirements:**
To execute a "Blur" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"blur"`.
2. `fromValue`: The starting blur amount.
3. `toValue`: The ending blur amount.
4. `startTime`: Time in milliseconds when the animation starts.
5. `endTime`: Time in milliseconds when the animation finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "blur",
    "fromValue": 20,
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
