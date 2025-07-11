#!/bin/bash

# Sentiment Analysis App - Automated Installation Script
# This script installs both frontend and backend components

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
FRONTEND_REPO="https://github.com/RajulThakur/sentiment-app.git"
BACKEND_REPO="https://github.com/RajulThakur/backend-sentience.git"
FRONTEND_DIR="sentiment-app"
BACKEND_DIR="backend-sentience"
BACKEND_URL="http://0.0.0.0:8000"

# Function to print colored messages
print_message() {
    echo -e "${2}${1}${NC}"
}

# Function to print section headers
print_section() {
    echo ""
    echo "================================"
    print_message "$1" $BLUE
    echo "================================"
}

# Function to check if command exists
check_command() {
    if ! command -v $1 &> /dev/null; then
        print_message "❌ $1 is not installed. Please install $1 first." $RED
        exit 1
    fi
}

# Function to check prerequisites
check_prerequisites() {
    print_section "Checking Prerequisites"

    print_message "Checking for required tools..." $YELLOW

    check_command "git"
    print_message "✅ Git is installed" $GREEN

    check_command "node"
    print_message "✅ Node.js is installed" $GREEN

    check_command "npm"
    print_message "✅ npm is installed" $GREEN

    check_command "python3"
    print_message "✅ Python3 is installed" $GREEN

    check_command "pip3"
    print_message "✅ pip3 is installed" $GREEN

    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_message "❌ Node.js version 18 or higher is required. Current version: $(node --version)" $RED
        exit 1
    fi
    print_message "✅ Node.js version is compatible: $(node --version)" $GREEN

    # Check Python version
    PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
    PYTHON_MAJOR=$(echo "$PYTHON_VERSION" | cut -d'.' -f1)
    PYTHON_MINOR=$(echo "$PYTHON_VERSION" | cut -d'.' -f2)

    # Check if Python version is >= 3.8
    if [ "$PYTHON_MAJOR" -lt 3 ] || [ "$PYTHON_MAJOR" -eq 3 -a "$PYTHON_MINOR" -lt 8 ]; then
        print_message "❌ Python version 3.8 or higher is required. Current version: $(python3 --version)" $RED
        exit 1
    fi
    print_message "✅ Python version is compatible: $(python3 --version)" $GREEN
}

# Function to install frontend
install_frontend() {
    print_section "Installing Frontend (Next.js)"

    # Remove existing directory if it exists
    if [ -d "$FRONTEND_DIR" ]; then
        print_message "Removing existing frontend directory..." $YELLOW
        rm -rf "$FRONTEND_DIR"
    fi

    # Clone frontend repository
    print_message "Cloning frontend repository..." $YELLOW
    git clone "$FRONTEND_REPO" "$FRONTEND_DIR"

    # Navigate to frontend directory
    cd "$FRONTEND_DIR"

    # Install dependencies
    print_message "Installing frontend dependencies..." $YELLOW
    npm install

    # Create .env.local file
    print_message "Creating environment file..." $YELLOW
    echo "NEXT_PUBLIC_BACKEND_URL=$BACKEND_URL" > .env.local

    print_message "✅ Frontend installation completed!" $GREEN
    print_message "📁 Frontend installed in: $(pwd)" $BLUE

    # Go back to parent directory
    cd ..
}

# Function to install backend
install_backend() {
    print_section "Installing Backend (FastAPI)"

    # Remove existing directory if it exists
    if [ -d "$BACKEND_DIR" ]; then
        print_message "Removing existing backend directory..." $YELLOW
        rm -rf "$BACKEND_DIR"
    fi

    # Clone backend repository
    print_message "Cloning backend repository..." $YELLOW
    git clone "$BACKEND_REPO" "$BACKEND_DIR"

    # Navigate to backend directory
    cd "$BACKEND_DIR"

    # Create virtual environment
    print_message "Creating Python virtual environment..." $YELLOW
    python3 -m venv venv

    # Activate virtual environment
    print_message "Activating virtual environment..." $YELLOW
    source venv/bin/activate

    # Upgrade pip
    print_message "Upgrading pip..." $YELLOW
    pip install --upgrade pip

    # Install dependencies
    print_message "Installing backend dependencies..." $YELLOW
    if [ -f "requirements.txt" ]; then
        pip install -r requirements.txt
    else
        print_message "⚠️  requirements.txt not found. Installing common FastAPI dependencies..." $YELLOW
        pip install fastapi uvicorn python-multipart python-dotenv
    fi

    # Create .env file
    print_message "Creating environment file..." $YELLOW
    echo "GEMINI_API=You are an expert engineer and your task is to write a new file from scratch." > .env

    print_message "✅ Backend installation completed!" $GREEN
    print_message "📁 Backend installed in: $(pwd)" $BLUE

    # Go back to parent directory
    cd ..
}

# Function to create startup scripts
create_startup_scripts() {
    print_section "Creating Startup Scripts"

    # Create frontend startup script
    cat > start-frontend.sh << 'EOF'
#!/bin/bash
cd sentiment-app
echo "Starting frontend server..."
npm run dev
EOF
    chmod +x start-frontend.sh

    # Create backend startup script
    cat > start-backend.sh << 'EOF'
#!/bin/bash
cd backend-sentience
echo "Activating virtual environment..."
source venv/bin/activate
echo "Starting backend server..."
uvicorn main:app --reload --host 0.0.0.0 --port 8000
EOF
    chmod +x start-backend.sh

    # Create combined startup script
    cat > start-all.sh << 'EOF'
#!/bin/bash
echo "Starting Sentiment Analysis App..."
echo "Starting backend server..."
gnome-terminal -- bash -c "cd backend-sentience && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000; exec bash" 2>/dev/null || \
xterm -e "cd backend-sentience && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000; exec bash" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"'/backend-sentience && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000"' 2>/dev/null || \
echo "Please run the backend manually: ./start-backend.sh"

sleep 5

echo "Starting frontend server..."
gnome-terminal -- bash -c "cd sentiment-app && npm run dev; exec bash" 2>/dev/null || \
xterm -e "cd sentiment-app && npm run dev; exec bash" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"'/sentiment-app && npm run dev"' 2>/dev/null || \
echo "Please run the frontend manually: ./start-frontend.sh"
EOF
    chmod +x start-all.sh

    print_message "✅ Startup scripts created!" $GREEN
}

# Function to display completion message
display_completion() {
    print_section "Installation Complete!"

    print_message "🎉 Both frontend and backend have been installed successfully!" $GREEN
    echo ""

    # Prominent API key warning
    echo "⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️"
    print_message "                  🚨 IMPORTANT: GEMINI API KEY REQUIRED 🚨" $RED
    echo "⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️"
    echo ""
    print_message "❌ BEFORE RUNNING THE APPLICATION, YOU MUST:" $RED
    print_message "   1. Get your GEMINI API key from: https://aistudio.google.com/" $YELLOW
    print_message "   2. Edit the file: backend-sentience/.env" $YELLOW
    print_message "   3. Replace the placeholder with your actual API key:" $YELLOW
    print_message "      GEMINI_API=your_actual_api_key_here" $YELLOW
    echo ""
    print_message "💡 Without the API key, the backend will NOT work!" $RED
    echo ""

    print_message "📁 Project Structure:" $BLUE
    print_message "  ├── sentiment-app/          (Frontend - Next.js)" $NC
    print_message "  ├── backend-sentience/       (Backend - FastAPI)" $NC
    print_message "  ├── start-frontend.sh        (Start frontend only)" $NC
    print_message "  ├── start-backend.sh         (Start backend only)" $NC
    print_message "  └── start-all.sh             (Start both services)" $NC
    echo ""
    print_message "🚀 To start the applications (AFTER setting up API key):" $BLUE
    print_message "  Option 1 - Start both automatically:" $NC
    print_message "    ./start-all.sh" $NC
    echo ""
    print_message "📱 Access URLs:" $BLUE
    print_message "  Frontend: http://localhost:3000" $NC
    print_message "  Backend API: http://localhost:8000" $NC
    echo ""
}

# Main installation function
main() {
    print_message "🚀 Sentiment Analysis App - Automated Installation" $BLUE
    echo ""

    check_prerequisites
    install_frontend
    install_backend
    create_startup_scripts
    display_completion
}

# Run the main function
main "$@"
