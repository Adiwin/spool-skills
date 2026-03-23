# Layer Skill: Structure

The live AI flow should think in editor arrays first:
- generate `elements`
- generate `effects`

Serialization into exported schema happens later.

## Practical Rule
- Build clean element hierarchy in the editor model.
- Use groups only when there is a real parent-child relationship.
- Keep effect targeting clear and local.

## Mental Model
- scene composition first
- effect choreography second
- export structure last

That order consistently leads to better AI results than designing around old serialization trees.
