# Skill: Spin In Animation (`spinIn`)

**Description:** An entrance animation that spins the layer into its final resting angle. It MUST be a single operation.

**Strict Requirements:**
To execute a "Spin In" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"spinIn"`.
2. `angle`: The angle in degrees the object spins through.
3. `direction`: The direction of the spin.
4. `startTime`: Time in milliseconds when the spin starts.
5. `endTime`: Time in milliseconds when the spin finishes.
6. `targetId`: The ID of the targeted layer.
7. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "spinIn",
    "angle": 45,
    "direction": "clockwise",
    "startTime": 300,
    "endTime": 600,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "natural"
    }
  }
}
```
