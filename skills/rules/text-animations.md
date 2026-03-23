# Frammo Text Animations

Use this file when animating typography in Frammo. Text should usually be animated with dedicated text operations instead of pretending text is just another rectangle.

## Primary Tools

Preferred text operations:

- `textIn`
- `textOut`

These operations are designed for split-based text choreography such as letters, words, or lines.

## Why Text Needs Dedicated Rules

Typography has different needs from generic layers:

- it has reading order
- it has cadence
- it breaks into semantic units
- it can become noisy very quickly

Strong text motion respects comprehension before spectacle.

## Required `textIn` Shape

Typical `textIn` payload:

```json
{
  "id": "headline-intro",
  "item": {
    "type": "textIn",
    "effect": "slideAndMask",
    "split": "letters",
    "order": "forward",
    "offset": 50,
    "travelDistance": 120,
    "slideDirection": "up",
    "nodeDuration": 1400,
    "nodeEasing": { "name": "natural" },
    "easing": { "name": "natural" },
    "startTime": 400,
    "endTime": 1800,
    "targetId": "headline"
  }
}
```

Important fields:

- `effect`
- `split`
- `order`
- `offset`
- `travelDistance` when sliding
- `slideDirection` when sliding
- `nodeDuration`
- `nodeEasing`
- `startTime`
- `endTime`
- `targetId`

## Split Strategy

Choose split based on message density:

- `letters` for punchy headlines, labels, kinetic type, logo-like motion
- `words` for readable phrases and mid-length marketing copy
- `lines` for editorial layouts, subtitles, or larger text blocks

Practical rule:

- the longer the text, the larger the split unit should usually become

Letter-level animation on long body copy usually creates noise instead of sophistication.

## Order Strategy

Use order to control how the eye travels:

- `forward` for natural reading direction
- `backward` for reverse reveals or stylized emphasis
- alternate or custom-feeling order only if supported by the existing implementation and clearly justified

## Effect Strategy

Good text effects depend on tone:

- `slideAndMask` for premium, directional, editorial reveals
- `appear` or soft fade-like behavior for understated UI or captions
- scale-led text motion for punchy creator/social motion
- blur-assisted entrances for dramatic hero type, not dense paragraphs

## Stagger Rules

`offset` controls delay between split nodes.

Useful ranges:

- `20` to `40` ms for subtle fast text
- `40` to `80` ms for standard headline choreography
- `80` to `140` ms for slower dramatic reveals

Too much offset can make short copy feel sluggish and long copy feel endless.

## Node Duration

`nodeDuration` is the animation duration per split unit.

Practical ranges:

- tight UI text: `300` to `700` ms
- standard marketing headline: `700` to `1400` ms
- editorial hero typography: `1000` to `1800` ms

The more nodes you have, the more careful you should be with long node durations.

## Combining Text with Other Motion

Text often works best when paired with support motion:

- panel `resize` reveals
- background card `move` + `opacity`
- subtle group drift behind the text

Good pairing:

- parent container enters
- text then resolves in staggered pieces

This creates hierarchy: surface first, typography second.

## Text Layer Requirements

The target layer should be a real `text` item and usually include:

- `text`
- `font`
- `fontSize`
- `lineHeight`
- `textAlign`
- `verticalAlign` when needed
- `fillColor`

Optional but useful:

- `characterStyleOverrides`
- `styleOverrideTable`
- `autoResize`

## Readability Rules

- Do not over-animate long paragraphs.
- Avoid large travel distance on small labels.
- Keep stagger, blur, and scale under control when the user still needs to read quickly.
- Use line-based reveals for multi-line text blocks instead of letter chaos.

## Common Mistakes

- Faking text animation with only `move` + `opacity` when `textIn` is available.
- Animating letters on body copy.
- Using large `travelDistance` on already oversized headline type.
- Choosing a playful easing curve for serious editorial typography.
- Forgetting that text animation is part of reading rhythm, not just decoration.
