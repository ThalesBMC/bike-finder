# London Bike Flow Map

Real-time visualization of Santander Cycles bike availability across Central London.

## What it is

Interactive map showing 284+ bike sharing stations in London. Color-coded markers indicate availability: brighter blue means more bikes available.

**Features:**

- Real-time data (updates every 30s)
- Live statistics
- Responsive interface with dark theme
- Popups with station details

## Stack

- Next.js 15 + TypeScript
- TailwindCSS
- Leaflet (maps)
- CityBikes API

## How to run

```bash
# Install dependencies
npm install

# Run in development
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
├── app/              # Next.js App Router
├── components/       # React components
│   ├── BikeFlowMap.tsx
│   ├── InfoPanel/
│   └── Map/
├── hooks/            # Custom hooks
├── types/            # TypeScript types
└── utils/            # Helpers
```

## API

Uses [CityBikes API](https://api.citybik.es/v2/):

```
GET https://api.citybik.es/v2/networks/santander-cycles
```

## License

MIT
