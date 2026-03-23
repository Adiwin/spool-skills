# Skill: Text In Animation (`textIn`)

**Description:** A rich entrance animation specifically designed for text layers. It splits the text and applies a cascading animation effect across the split nodes. It MUST be a single operation.

**Strict Requirements:**
To execute a "Text In", the operation MUST contain these properties:
1. `type`: MUST be exactly `"textIn"`.
2. `effect`: The visual effect applied to the nodes.
3. `split`: How the text is split (`"letters"`, `"words"`, `"lines"`).
4. `order`: The direction of the cascade.
5. `offset`: Time delay in milliseconds between each split node starting its animation.
6. `slideDirection`: Required if the effect includes slide.
7. `travelDistance`: Required if the effect includes slide.
8. `nodeDuration`: Duration of the animation for each individual piece.
9. `nodeEasing`: Defines the easing curve applied to each piece.
10. `startTime`: Time in milliseconds when the overall text animation begins.
11. `targetId`: The ID of the targeted text layer.

**JSON Template:**
```json
{
  "id": "<GENERATE_UNIQUE_ID>",
  "item": {
    "type": "textIn",
    "effect": "slide",
    "split": "words",
    "order": "forward",
    "offset": 50,
    "travelDistance": 20,
    "slideDirection": "down",
    "nodeDuration": 500,
    "startTime": 400,
    "targetId": "<TARGET_LAYER_ID>",
    "nodeEasing": {
      "name": "natural"
    }
  }
}
```
