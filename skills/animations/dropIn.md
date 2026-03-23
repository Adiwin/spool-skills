# Skill: Drop In Animation (`dropIn`)

**Description:** An entrance animation where the layer rapidly drops into place from above. It MUST be a single operation.

**Strict Requirements:**
To execute a "Drop In" animation, the operation MUST contain these properties:
1. `type`: MUST be exactly `"dropIn"`.
2. `distance`: The starting offset distance from above.
3. `startTime`: Time in milliseconds when the drop begins.
4. `endTime`: Time in milliseconds when the drop finishes.
5. `targetId`: The ID of the targeted layer.
6. `easing`: Defines the easing curve.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "dropIn",
    "distance": 100,
    "startTime": 0,
    "endTime": 500,
    "targetId": "<TARGET_LAYER_ID>",
    "easing": {
      "name": "bounce"
    }
  }
}
```
