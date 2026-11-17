# Neotethys

An open-source, real-time 3D map of wind, earthquakes and active faults for Turkey and Cyprus.

> **Status: early development.** There is nothing to use yet; see the roadmap below.

The name comes from the Neo-Tethys, the ancient ocean whose closure built the fault systems of Anatolia and the Cyprus Arc. Cyprus's Troodos mountains are a piece of its old ocean floor.

## What it will do

- **Wind:** animated wind particles from open weather-model data (NOAA GFS, ECMWF open data, DWD ICON-EU), with forecast playback over hours and days.
- **Earthquakes:** live events merged from several agencies (EMSC, USGS, AFAD and others). Duplicates are removed, and each agency's magnitude is shown side by side.
- **Faults in 3D:** active-fault surfaces and earthquakes at their true depth, including the subducting Cyprus Arc slab.
- **Self-hosted:** no paid map services or access tokens. Every layer is served from our own static files and services.

## Roadmap

| Milestone | Scope |
|---|---|
| M1 | Wind pipeline and animated wind on the globe |
| M2 | Live multi-agency earthquakes |
| M3 | 3D subsurface view: terrain and bathymetry, faults, hypocentres, cross-sections |
| M4 | Event history, a small backend, AI-generated event summaries, MCP server |
| M5 | Performance, accessibility, documentation, public launch |

## Development

Requires Node.js 24+ and pnpm 10+.

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build
```

## Data and attribution

Each data source keeps its own license and attribution terms. They will be listed in `docs/DATA_SOURCES.md` before the data ships.

## Disclaimer

Neotethys is not an early-warning system and does not predict earthquakes. For official information, follow your national agency (AFAD in Turkey, the Geological Survey Department in Cyprus).

## License

Code is licensed under the [Apache License 2.0](LICENSE).
