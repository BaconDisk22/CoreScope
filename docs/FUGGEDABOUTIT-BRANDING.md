# FUGGEDABOUTIT RADIO — brand guide

**Tagline:** What Exit? We Got Your Signal.

Fuggedaboutit Radio is a New Jersey-themed presentation of the CoreScope MeshCore packet analyzer. Preserve CoreScope's underlying functionality and required GPL-3.0-or-later notices and attribution.

## Palette

| Token | Color | Hex |
|---|---|---|
| Background / Parkway Black | dark | `#101418` |
| Surface / Concrete Gray | gray | `#343A40` |
| Primary / Turnpike Green | green | `#006B3C` |
| Alert / Gabagool Red | red | `#C62828` |
| Foreground / Diner White | white | `#F5F5F0` |
| Accent / Pork Roll Gold | gold | `#FFCC33` |

Use accessible contrast, especially for text on green or red. Do not rely on color alone for packet status.

## Voice and interface

Use recognizable technical labels first, with Jersey flavor second. Suggested labels: `Network Overview — The Parkway`, `Node Directory — The Crew`, `Live Trace — What Exit?`, `Diagnostics — Under the Hood`. Suggested noncritical status copy: `You're good, boss!` (connected), `Looking for the crew...` (searching), `Fuggedaboutit!` (disconnected). Critical errors, radio settings, and packet details must retain precise wording.

Optional rotating easter eggs: `Jeet yet?`, `Pork roll or Taylor ham?`, `Watch the tram car, please!`, `Going down the Shore`, `What exit?`. Do not imply endorsement by the State of New Jersey, Parkway operators, or third-party brands.

## Rollout

1. Update UI theme variables and preserve light/dark and custom theme support.
2. Update visible product name, page title, navigation, and accessible labels without breaking routes, API paths, environment variables, or stored settings.
3. Add original logo/icon and screenshots.
4. Update README and deployment documentation; retain upstream credit and license.
5. Run Go, Node, and browser tests before merging.

**Scope:** Changes belong to BaconDisk22's fork only; never push to the upstream repository.
