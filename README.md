# 🚴‍♂️ London Bike Flow Map

Real-time visualization of Santander Cycles bike availability across Central London.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 What it is

Interactive map showing 284+ bike sharing stations in London. Color-coded markers indicate availability: brighter blue means more bikes available.

### Features

- 🗺️ **Interactive Map** - Explore bike stations across Central London
- 🔵 **Visual Availability** - Color-coded markers (brighter = more bikes)
- 📊 **Live Statistics** - Real-time data updates every 30 seconds
- 🎨 **Modern UI** - Dark theme with smooth animations
- 📱 **Responsive** - Works seamlessly across devices

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Maps:** [Leaflet](https://leafletjs.com/) with React-Leaflet
- **API:** [CityBikes API](https://citybik.es/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
bike-flow-amsterdam/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── BikeFlowMap.tsx    # Main map component
│   ├── InfoPanel/         # Dashboard components
│   └── Map/               # Map-related components
├── hooks/
│   ├── useBikeData.ts     # Data fetching
│   └── useFlowAnimation.ts # Animation logic
├── types/
│   └── bike.ts            # TypeScript types
└── utils/
    └── mapHelpers.ts      # Helper functions
```

## 📝 API Reference

Uses the [CityBikes API](https://api.citybik.es/v2/) for real-time bike-sharing data:

```
GET https://api.citybik.es/v2/networks/santander-cycles
```

## 📄 License

This project is licensed under the MIT License.
