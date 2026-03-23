# Skill: Slide In Animation (`slideIn`)

**Description:** An entrance animation that translates a layer in from a specified direction by a certain distance. It MUST be a single operation.

**Strict Requirements:**
To execute a "Slide In" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"slideIn"`.
2. `direction`: The direction from which the layer slides in.
3. `distance`: The total translation offset distance in pixels.
4. `startTime`: Time in milliseconds when the slide starts.
5. `endTime`: Time in milliseconds when the slide finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "slideIn",
    "direction": "up",
    "distance": 100,
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "smooth:standard:v1",
      "config": {
        "intensity": 50
      },
      "schema": "v1"
    }
  }
}
```
