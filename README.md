# Sentiment Analysis App

A full-stack sentiment analysis application with a Next.js frontend and FastAPI backend that analyzes text emotions using machine learning.

## Demo Link ```https://sentienceq.vercel.app/```

## 🚀 Quick Install (Automated)

**One-command installation for both frontend and backend:**

```bash
# Download and run the automated installation script
mkdir sentienceq && cd sentienceq
curl -O https://raw.githubusercontent.com/RajulThakur/sentiment-app/main/install.sh
chmod +x install.sh
./install.sh
```

## 🎯 After Installation

Once the automated installation completes, you can start the applications:

### **Start Both Automatically**
```bash
./start-all.sh
```
The script will automatically:
- ✅ Install both frontend and backend
- ✅ Create environment files with proper configuration
- ✅ Set up Python virtual environment
- ✅ Create startup scripts for easy launching
- ✅ Verify all prerequisites

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **Python** (version 3.8 or higher)
- **pip** (Python package manager)
- **Git**


## 🌐 Access URLs

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:8000`

## 📁 Project Structure

```
project-directory/
├── sentiment-app/           # Frontend (Next.js)
│   ├── .env.local          # Environment configuration
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/    # React components
│   │   └── types/         # TypeScript types
│   └── package.json
├── backend-sentience/       # Backend (FastAPI)
│   ├── .env               # Environment configuration
│   ├── venv/              # Python virtual environment
│   ├── main.py            # FastAPI application
│   └── requirements.txt   # Python dependencies
├── start-frontend.sh        # Frontend startup script
├── start-backend.sh         # Backend startup script
├── start-all.sh            # Combined startup script
└── install.sh              # Installation script
```

## 🔧 Environment Configuration

The automated installation creates the following environment files:

### **Frontend (.env.local)**
```
NEXT_PUBLIC_BACKEND_URL=https://sentienceq.love-you-orange.site
```

### **Backend (.env)**
```
GEMINI_API= 
```

## 📖 Manual Installation (Alternative)

If you prefer to install manually:

### 1. Frontend Setup
```bash
git clone https://github.com/RajulThakur/sentiment-app.git
cd sentiment-app
npm install
echo "NEXT_PUBLIC_BACKEND_URL=https://sentienceq.love-you-orange.site" > .env.local
npm run dev
```

### 2. Backend Setup
```bash
git clone https://github.com/RajulThakur/backend-sentience.git
cd backend-sentience
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "GEMINI_API=You are an expert engineer and your task is to write a new file from scratch." > .env
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## 🎨 Usage

1. Open your browser and go to `http://localhost:3000`
2. Enter the text you want to analyze in the text area
3. Click "Submit" to get sentiment analysis results
4. View the emotional breakdown with confidence scores and visual charts

## 🔗 API Endpoints

- `POST /api/sentiment-analysis` - Analyze text sentiment
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /health` - Health check endpoint

## 🛠️ Development

### Frontend Development
```bash
cd sentiment-app
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
```

### Backend Development
```bash
cd backend-sentience
source venv/bin/activate
uvicorn main:app --reload    # Development server with auto-reload
python -m pytest            # Run tests (if available)
```

## 🐛 Troubleshooting

### Common Issues

1. **Installation Script Fails**:
   - Ensure you have all prerequisites installed
   - Check internet connection for repository cloning
   - Verify permissions to create files and directories

2. **Frontend Can't Connect to Backend**:
   - Ensure backend is running on port 8000
   - Check if the backend URL is correct in `.env.local`
   - Verify CORS settings in the backend

3. **Python Dependencies Issue**:
   - Ensure virtual environment is activated
   - Update pip: `pip install --upgrade pip`
   - Manually install requirements: `pip install -r requirements.txt`

4. **Node.js Version Issues**:
   - Ensure Node.js version is 18 or higher
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

5. **Port Conflicts**:
   - Frontend default port: 3000
   - Backend default port: 8000
   - Kill processes using these ports or change ports in configuration

### Environment Variables Issues

If you need to update environment variables:

**Frontend**:
```bash
cd sentiment-app
echo "NEXT_PUBLIC_BACKEND_URL=your-backend-url" > .env.local
```

**Backend**:
```bash
cd backend-sentience
echo "GEMINI_API=your-api-key" > .env
```

## 🔒 Security Notes

- The backend URL is configured for production deployment
- Environment variables are properly configured for security
- CORS settings should be reviewed for production use
- API keys should be kept secure and not committed to version control

## 🌟 Features

- 🎯 **Real-time Sentiment Analysis** - Analyze text emotions instantly
- 📊 **Visual Results** - Interactive charts showing emotion breakdown
- 🌙 **Dark/Light Theme** - Toggle between themes for better user experience
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast Performance** - Built with Next.js 15 and FastAPI
- 🎨 **Modern UI** - Clean interface with Tailwind CSS
- 🔄 **Auto-deployment** - Automated installation and setup
- 📈 **Real-time Updates** - Live sentiment analysis results

---
