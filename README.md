# London Bike Flow Map

Visualização em tempo real da disponibilidade de bikes do Santander Cycles em Londres Central.

## O que é

Mapa interativo mostrando 284+ estações de bike sharing em Londres. Marcadores coloridos indicam disponibilidade: quanto mais claro o azul, mais bikes disponíveis.

**Features:**

- Dados em tempo real (atualização a cada 30s)
- Estatísticas ao vivo
- Interface responsiva com tema dark
- Popups com detalhes de cada estação

## Stack

- Next.js 15 + TypeScript
- TailwindCSS
- Leaflet (mapas)
- CityBikes API

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## Estrutura

```
├── app/              # Next.js App Router
├── components/       # Componentes React
│   ├── BikeFlowMap.tsx
│   ├── InfoPanel/
│   └── Map/
├── hooks/            # Custom hooks
├── types/            # TypeScript types
└── utils/            # Helpers
```

## API

Usa a [CityBikes API](https://api.citybik.es/v2/):

```
GET https://api.citybik.es/v2/networks/santander-cycles
```

## License

MIT
