# Easing Skill: Text Motion (`nodeEasing`)

Text motion should feel crisp, readable, and ordered.

## Preferred Defaults
- headlines by line or word: `ease-out`
- elegant editorial type: soft custom bezier
- energetic social type: `ease-out` with tighter stagger
- only use `back-out` when the prompt explicitly wants playful snap

## Stagger Pairing
- lines: 40 to 90ms
- words: 20 to 60ms
- letters: 10 to 30ms

## Rule
The smaller the text unit, the gentler the motion should be.
Letter-level animation gets noisy fast.
