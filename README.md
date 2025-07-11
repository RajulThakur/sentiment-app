# Sentiment Analysis App

A modern web application built with Next.js that analyzes the emotional content of text using machine learning. The app provides detailed sentiment analysis with confidence scores and visual representations of detected emotions.

## Features

- 🎯 **Real-time Sentiment Analysis** - Analyze text emotions instantly
- 📊 **Visual Results** - Interactive charts showing emotion breakdown
- 🌙 **Dark/Light Theme** - Toggle between themes for better user experience
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🎨 **Modern UI** - Clean interface with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Chart.js with React Chart.js 2
- **Icons**: Lucide React
- **Themes**: Next Themes

## Prerequisites

Before installing, make sure you have:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Backend API** running on port 8000 (see Backend Setup section)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sentiment-app
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Backend Setup

This app requires a backend API running on `http://127.0.0.1:8000`. The backend should provide:

- **Endpoint**: `POST /api/sentiment-analysis`
- **Request Body**: `{ "text": "your text here" }`
- **Response Format**:
```json
[
  {
    "emotions": [
      {
        "emotion": "joy",
        "percent": 85.2,
        "words": ["happy", "great", "amazing"]
      },
      {
        "emotion": "sadness",
        "percent": 10.5,
        "words": ["disappointed"]
      }
    ],
    "confidence": 0.92,
    "accuracy": 0.88
  }
]
```

If you need to change the backend URL, update the `BACKEND_URL` in `src/const/constant.ts`.

### 4. Run the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Enter Text**: Type or paste the text you want to analyze in the textarea
2. **Submit**: Click the "Submit" button or press Enter
3. **View Results**: The app will display:
   - Detected emotions with percentages
   - Words associated with each emotion
   - Overall confidence and accuracy scores
   - Visual charts representing the analysis

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
sentiment-app/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── const/        # Constants and configuration
│   ├── helper/       # Utility functions
│   ├── types/        # TypeScript type definitions
│   └── ui/           # Reusable UI components
├── public/           # Static assets
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## Configuration

### Backend URL

To change the backend API URL, edit `src/const/constant.ts`:

```typescript
export const BACKEND_URL = "http://your-backend-url:port";
```

### Styling

The app uses Tailwind CSS for styling. You can customize the theme by modifying the Tailwind configuration files.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Docker**: Create a Dockerfile for containerized deployment
- **AWS/GCP/Azure**: Use their respective Next.js hosting services

## Troubleshooting

### Common Issues

1. **"Failed to fetch" error**: Ensure your backend API is running on port 8000
2. **Build errors**: Check that all dependencies are installed correctly
3. **TypeScript errors**: Run `npm run lint` to identify and fix issues

### Backend Connection Issues

If you're having trouble connecting to the backend:

1. Verify the backend is running on `http://127.0.0.1:8000`
2. Check that the `/api/sentiment-analysis` endpoint is available
3. Ensure CORS is configured on the backend to allow requests from `http://localhost:3000`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information about your problem

---

