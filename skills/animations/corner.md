# Skill: Corner Radius Animation (`corner-radius`)

**Description:** Animates the corner radius of a layer. It MUST be a single operation.

**Strict Requirements:**
To execute a "Corner Radius" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"corner-radius"`.
2. `fromValue`: The starting corner radius in pixels.
3. `toValue`: The ending corner radius in pixels.
4. `startTime`: Time in milliseconds when the animation starts.
5. `endTime`: Time in milliseconds when the animation finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "corner-radius",
    "fromValue": 0,
    "toValue": 40,
    "startTime": 0,
    "endTime": 300,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "natural"
    }
  }
}
```
