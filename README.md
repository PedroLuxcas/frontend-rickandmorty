## **README.md - Rick and Morty Frontend**

```markdown
# 🧪 Rick and Morty Character Explorer

A modern React application to explore characters from the Rick and Morty universe. This frontend consumes a custom Flask API to display character information with a sleek, responsive interface featuring grayscale effects and 3D image perspectives.

![Rick and Morty App](https://via.placeholder.com/800x400/000000/00FF00?text=Rick+and+Morty+Explorer)

## ✨ Features

- 🔍 **Search Characters** - Find your favorite characters by name
- 📱 **Fully Responsive** - Perfect layout on desktop, tablet, and mobile
- 🎨 **Grayscale Effects** - Cards in grayscale, color on hover/selection
- 🖼️ **3D Image Perspective** - Character images with depth effect on desktop
- 📄 **Pagination** - Browse through pages of characters
- ℹ️ **Detailed View** - Modal with complete character information
- ⚡ **Loading States** - Smooth loading animations
- 🎯 **URL Parameters** - Shareable search queries and character pages

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Styled Components** - Component styling
- **React Router DOM** - Navigation and routing
- **Axios** - API requests
- **Vite** - Build tool and development server

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CharacterCard/    # Individual character card
│   ├── CharacterGrid/    # Grid of character cards
│   ├── CharacterDetail/  # Modal with character details
│   ├── SearchBar/        # Search input component
│   ├── LoadingScreen/    # Loading overlay
│   └── Pagination/       # Page navigation
├── hooks/                # Custom React hooks
│   ├── useCharacter.ts   # Main character logic
│   └── useDebounce.ts    # Debounce for search
├── services/             # API services
│   ├── api.ts            # Axios configuration
│   └── characterService.ts # Character API calls
├── types/                # TypeScript definitions
│   └── character.ts      # Character types
├── styles/               # Global styles
│   ├── theme.ts          # Theme configuration
│   └── GlobalStyles.ts   # Global CSS
├── pages/                # Application pages
│   └── Home.tsx          # Main page
├── App.tsx               # Main component
├── main.tsx              # Entry point
└── vite-env.d.ts         # Vite types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running (see backend README)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/frontend-rickandmorty.git
cd frontend-rickandmorty
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Configure API URL** (in `.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

5. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🔗 API Integration

This frontend expects a backend API with the following endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/characters/?page=1` | GET | List characters with pagination |
| `/api/characters/search?name=rick&page=1` | GET | Search characters by name |
| `/api/characters/1` | GET | Get character by ID |

### Example Response

```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 826,
    "page": 1,
    "pages": 42,
    "per_page": 20
  }
}
```

## 🎨 Design System

### Colors
- **Primary Green**: `#00FF00` - Accents and highlights
- **Background**: `#000000` to `#111111` - Dark theme
- **Text**: White to light gray - Readable contrast
- **Borders**: `#333333` - Subtle separation

### Typography
- **Font Family**: `"Courier New", monospace` - Terminal aesthetic
- **Sizes**: Responsive scale from 12px to 32px

### Effects
- **Grayscale**: `filter: grayscale(100%)` on inactive cards
- **3D Transform**: `perspective(1000px) rotateY(-5deg)` on desktop images
- **Blur**: `backdrop-filter: blur(8px)` on modals and loading overlay

## 📱 Responsive Design

| Breakpoint | Layout | Card Columns |
|------------|--------|--------------|
| > 768px | Desktop | 4-5 columns |
| 481-768px | Tablet | 2-3 columns |
| ≤ 480px | Mobile | 2 columns |
| ≤ 320px | Small Mobile | 1 column |

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |

### Vite Configuration

The project uses Vite with the following plugins:
- `@vitejs/plugin-react` - React support
- Path aliases for cleaner imports

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🚢 Deployment

### Build for production
```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

### Deploy to Vercel/Netlify

1. Build command: `npm run build`
2. Output directory: `dist`
3. Environment variable: `VITE_API_URL` set to your production backend URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for the character data
- [Render](https://render.com/) for backend hosting
- All the fans of Rick and Morty! 🧪

## 📞 Contact

Your Name - [@yourusername](https://github.com/yourusername)

Project Link: [https://github.com/PedroLuxcas/frontend-rickandmorty](https://github.com/PedroLuxcas/frontend-rickandmorty)

---

**Made with 🧪 by a Rick and Morty fan**
```