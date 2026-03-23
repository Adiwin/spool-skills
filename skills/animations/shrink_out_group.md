# Skill: Shrink Out Sequence Group (`shrink_out_group`)

**Description:** A combined exit animation that simultaneously scales the layer down and fades it out. It MUST be an `opGrp`.

**Strict Requirements:**
To execute a "Shrink Out" group animation, the `opGrp` MUST contain these child operations targeting the same `targetId` with identical start/end times:
1. `scale`: Animates the scale down.
2. `opacity`: Animates the opacity to 0.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": { "type": "opGrp", "name": "Shrink out" },
  "children": [
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": {
        "type": "scale",
        "toValue": 0.8,
        "startTime": 3200,
        "endTime": 3500,
        "targetId": "<TARGET_LAYER_ID>",
        "easing": { "name": "accelerate" }
      }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": {
        "type": "opacity",
        "toValue": 0,
        "startTime": 3200,
        "endTime": 3500,
        "targetId": "<TARGET_LAYER_ID>",
        "easing": { "name": "accelerate" }
      }
    }
  ]
}
```
