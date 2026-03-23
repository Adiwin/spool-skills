# Skill: Twist In Animation (`twistIn`)

**Description:** A complex entrance animation where the layer twists into place. It MUST be an `opGrp`.

**Strict Requirements:**
To execute a "Twist In", the `opGrp` MUST contain exactly four child operations targeting the same `targetId` with identical start/end times:
1. `opacity`: Animates from 0 to 100.
2. `rotate`: Defines the twist angle.
3. `move`: Defines the X/Y translation offset.
4. `scale`: Defines the size change.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": { "type": "opGrp", "name": "Twist in" },
  "children": [
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "opacity", "fromValue": 0, "toValue": 100, "startTime": 0, "endTime": 500, "targetId": "<TARGET_LAYER_ID>" }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "rotate", "fromValue": -90, "toValue": 0, "startTime": 0, "endTime": 500, "targetId": "<TARGET_LAYER_ID>" }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "move", "fromValue": { "moveX": -50, "moveY": 50 }, "toValue": { "moveX": 0, "moveY": 0 }, "startTime": 0, "endTime": 500, "targetId": "<TARGET_LAYER_ID>" }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "scale", "fromValue": 0.5, "toValue": 1, "startTime": 0, "endTime": 500, "targetId": "<TARGET_LAYER_ID>" }
    }
  ]
}
```
