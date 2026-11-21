# LUMARIS — The Floating Isles

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/zhoomi/poster-lumaris/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/zhoomi/poster-lumaris/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

A travel poster for a place that isn't there, made for the make.fun bounty [The Poster for a Place That Isn't There](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539).

## Welcome to Lumaris

Lumaris is not on any map, because no map has ever reached it. High above a golden sea of cloud, a chain of green islands hangs in the sky, held up by nothing anyone can explain. Waterfalls pour off their cliffs and vanish into the mist below. Airships thread between the islands, carrying travellers who came for the view and stayed for the quiet. The sun never quite sets here — it lingers at the horizon, turning the whole sky amber and rose.

> Above the clouds. Beyond the map.

## How the poster was made

The scene was illustrated in the style of a classic 1930s lithograph travel poster: warm sunset colours, soft clouds, lush island greenery, and a lone airship for scale. The lettering was set afterwards with PIL in a bold serif face — the place name **LUMARIS** large across the lower third, **THE FLOATING ISLES** beneath it, and the tagline in italic at the foot — so every word stays sharp and readable even at thumbnail size. The finished image is a 1024x1024 PNG.

## Running the program

The program ships the finished poster. It needs only the Node standard library and no network access:

```sh
node main.ts
```

By default it writes `/output/entry.png`. To write somewhere else, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```

The output is a byte-for-byte copy of `entry.png`, and the program verifies the copy with a SHA-256 check before reporting success, so a partial write can never pass as a finished poster.

## Files

- `entry.png` — the poster (1024x1024 PNG, 533,148 bytes)
- `main.ts` — the program that ships it
- `LICENSE` — MIT
