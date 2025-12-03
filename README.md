# 🚴‍♂️ London Bike Availability Monitor

A real-time interactive visualization of bike availability across Central London's Santander Cycles network.

![London Bike Monitor](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Overview

This project provides an intuitive, real-time map visualization to help Londoners quickly find available bikes across Central London. The interface uses color-coded markers where brighter blue indicates higher bike availability, making it easy to spot the best stations at a glance.

### Key Features

- 🗺️ **Interactive Map** - Explore 284+ bike stations across Central London
- 🔵 **Visual Availability** - Color-coded markers (brighter = more bikes available)
- 📊 **Live Statistics** - Real-time data on bikes, stations, and availability
- 🔄 **Auto-refresh** - Data updates automatically every 30 seconds
- 🎨 **Modern UI** - Dark theme with smooth animations and hover effects
- 📱 **Responsive Design** - Works seamlessly across devices

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Maps:** [Leaflet](https://leafletjs.com/) with React-Leaflet
- **API:** [CityBikes API](https://citybik.es/)

## 🎨 Color Logic

The visualization uses an intuitive color system:

- **Bright Blue (#4a9eff)** - High availability (>70% bikes available)
- **Medium Blue (#3d7fd9)** - Good availability (50-70%)
- **Dark Blue (#3366b3)** - Low availability (30-50%)
- **Darkest Blue (#2d4d8c)** - Very low availability (<30%)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bike-flow-amsterdam.git

# Navigate to project directory
cd bike-flow-amsterdam

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
│   ├── globals.css        # Global styles and map customization
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── BikeFlowMap.tsx    # Main map component
│   ├── InfoPanel/         # Dashboard components
│   │   ├── InfoPanel.tsx
│   │   ├── StatsGrid.tsx
│   │   └── Legend.tsx
│   ├── Map/               # Map-related components
│   │   ├── StationMarker.tsx
│   │   ├── StationPopup.tsx
│   │   ├── FlowLines.tsx
│   │   └── FlowParticles.tsx
│   ├── LoadingScreen.tsx
│   └── ErrorScreen.tsx
├── hooks/
│   ├── useBikeData.ts     # Data fetching hook
│   └── useFlowAnimation.ts # Animation logic
├── types/
│   └── bike.ts            # TypeScript types
└── utils/
    └── mapHelpers.ts      # Helper functions
```

## 🎯 Use Cases

- **Commuters** - Check bike availability before leaving home/office
- **Tourists** - Find nearby bikes for exploring London
- **Data Enthusiasts** - Visualize real-time urban mobility patterns
- **Urban Planners** - Understand bike-sharing usage patterns

## 🔮 Future Enhancements

- [ ] Historical data analysis
- [ ] Predictive availability based on time/day
- [ ] Route planning between stations
- [ ] Mobile app version
- [ ] Multi-city support

## 📝 API Reference

This project uses the [CityBikes API](https://api.citybik.es/v2/) which provides real-time bike-sharing data for cities worldwide.

```
GET https://api.citybik.es/v2/networks/santander-cycles
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Thales Brederodes**

- GitHub: [@thalesbmc](https://github.com/thalesbmc)

## 🙏 Acknowledgments

- [CityBikes API](https://citybik.es/) for providing free bike-sharing data
- [OpenStreetMap](https://www.openstreetmap.org/) contributors for map data

---

⭐ If you found this project helpful, please consider giving it a star!
