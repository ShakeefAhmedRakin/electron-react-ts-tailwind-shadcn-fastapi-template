# Electron-react-ts-tailwind-shadcn-fastapi-template

A fully-featured template for building cross-platform desktop apps with modern web and backend technologies created by me. It's built with:

- **Electron.js** for native desktop app functionality
- **React + TypeScript** for frontend architecture
- **TailwindCSS** for rapid UI styling
- **shadcn/ui** for beautiful, accessible components
- **FastAPI** backend bundled with PyInstaller
- **Vite** for lightning-fast builds and development

Tested on **Windows** and **macOS**

## Frontend Customization

This project uses **Vite + React + TypeScript**, so the frontend behaves just like any standard Vite-based React project.

You can freely:

- Install or remove **any npm packages** as needed
- Replace `shadcn/ui` with another UI library of your choice (e.g., MUI, Chakra UI, etc.)
- Extend `shadcn/ui` by generating or modifying components using the CLI
- Customize Tailwind config, themes, aliases, and structure

> _This setup gives you full flexibility to build your UI the way you want, while keeping the benefits of a modern Electron integration._

## Backend Customization

The backend is powered by **FastAPI**, bundled using **PyInstaller** for production.

You can:

- Add new endpoints by expanding the `app.py` file
- Refactor into routers and services to scale better
- Install any Python packages you need via `requirements.txt`

> _Deep FastAPI structuring (e.g., using multiple modules with `APIRouter`, service layers, database layers, etc.) is yet to be fully tested in production builds with PyInstaller. This is on the roadmap for future improvements._

Use the backend like you would in any typical FastAPI project — just keep an eye on how imports behave when bundling.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShakeefAhmedRakin/electron-react-ts-tailwind-shadcn-fastapi-template.git
cd electron-react-ts-tailwind-shadcn-fastapi-template
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Set Up the Python Backend

#### Create a Virtual Environment

> _Requires Python 3.8.0+ (Tested with 3.8.0)_

#### On **Windows**:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
```

#### On **macOS/Linux**:

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

#### 📦 Install Python Dependencies

```bash
pip install -r requirements.txt
```

## Development Mode

Make sure your Python **virtual environment** is activated before running `npm run dev`

```bash
npm run dev
```

This will:

- Start the FastAPI backend
- Launch the Electron app with hot reload for React

## Production Build

To create a production build of the app:

```bash
npm run build
```

Build output will be located under the `release/{version}` folder.

> _The build output is platform-specific._
>
> - Running `npm run build` on **Windows** will generate a **Windows executable**.
> - Running it on **macOS** will generate a **macOS app bundle**.

## TO-DO

- Add SQLite support to backend
- Test Linux compatibility and packaging
- Refactor FastAPI backend into modular structure and test in production

## License

MIT — feel free to fork and build awesome things!
