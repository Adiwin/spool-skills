# Skill: Grow In Sequence Group (`grow_in_group`)

**Description:** A combined entrance animation that simultaneously scales the layer up and fades it in. It MUST be an `opGrp`.

**Strict Requirements:**
To execute a "Grow In" group animation, the `opGrp` MUST contain these child operations targeting the same `targetId` with identical start/end times:
1. `scale`: Animates the scale from a smaller value to 1.0.
2. `opacity`: Animates the opacity from 0 to 100.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": { "type": "opGrp", "name": "Grow in" },
  "children": [
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": {
        "type": "scale",
        "fromValue": 0.5,
        "startTime": 0,
        "endTime": 400,
        "targetId": "<TARGET_LAYER_ID>",
        "easing": { "name": "slowDown" }
      }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": {
        "type": "opacity",
        "fromValue": 0,
        "startTime": 0,
        "endTime": 400,
        "targetId": "<TARGET_LAYER_ID>",
        "easing": { "name": "slowDown" }
      }
    }
  ]
}
```
