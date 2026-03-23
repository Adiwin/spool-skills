# Skill: Tweet Appears Animation Group (`tweet_appears`)

**Description:** A complex nested animation sequence used for bringing a tweet or social card into view. It MUST be an `opGrp`.

**Strict Requirements:**
To execute a "Tweet Appears" group animation, the `opGrp` MUST contain a sequence of children, sometimes nested:
1. An interior `opGrp` named "Grow in" containing `scale` and `opacity`.
2. Supporting operations such as `spinIn`, `textIn`, or other grouped operations as required by the composition.
3. All child operations MUST target valid layer IDs in the scene.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": { "type": "opGrp", "name": "Tweet appears" },
  "children": [
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "name": "Grow in", "type": "opGrp" },
      "children": [
        {
          "id": "<GENERATE_UNIQUE_ID>",
          "item": { "type": "scale", "fromValue": 0.9, "startTime": 0, "endTime": 400, "targetId": "<TARGET_LAYER_ID>", "easing": { "name": "back" } }
        },
        {
          "id": "<GENERATE_UNIQUE_ID>",
          "item": { "type": "opacity", "fromValue": 0, "startTime": 0, "endTime": 200, "targetId": "<TARGET_LAYER_ID>", "easing": { "name": "back" } }
        }
      ]
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "spinIn", "angle": 30, "direction": "clockwise", "startTime": 100, "endTime": 400, "targetId": "<TARGET_LAYER_ID>", "easing": { "name": "natural" } }
    },
    {
      "id": "<GENERATE_UNIQUE_ID>",
      "item": { "type": "textIn", "effect": "slideAndMask", "split": "lines", "order": "forward", "offset": 50, "travelDistance": 100, "slideDirection": "up", "nodeDuration": 300, "startTime": 200, "targetId": "<TARGET_LAYER_ID>", "nodeEasing": { "name": "natural" } }
    }
  ]
}
```
