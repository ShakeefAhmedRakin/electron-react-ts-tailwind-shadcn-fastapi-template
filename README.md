# Electron-react-ts-tailwind-shadcn-fastapi-template

A modern cross-platform desktop application template powered by:

- **Electron.js** for native desktop app functionality
- **React + TypeScript** for frontend architecture
- **TailwindCSS** for rapid UI styling
- **shadcn/ui** for beautiful, accessible components
- **FastAPI** backend bundled with PyInstaller
- **Vite** for lightning-fast builds and development

Tested on **Windows** and **macOS**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShakeefAhmedRakin/electron-react-ts-tailwind-shadcn-fastapi-template.git
cd electron-react-ts-tailwind-shadcn-fastapi-template
```

---

### 2. Install Frontend Dependencies

```bash
npm install
```

---

### 3. Set Up the Python Backend

#### ⬇️ Create a Virtual Environment

> ✅ Requires Python 3.12+

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

---

## 🧪 Development Mode

To run the full stack app in development:

```bash
npm run dev
```

This will:

- Start the FastAPI backend
- Launch the Electron app with hot reload for React

---

## 📦 Production Build

You can improve the wording to make it clearer and more professional. Here's a suggestion:

---

### 🛠 Build Instructions

To create a production build of the app:

```bash
npm run build
```

Build output will be located under the `release/{version}` folder.

> **Note:** The build output is platform-specific.
>
> - Running `npm run build` on **Windows** will generate a **Windows executable**.
> - Running it on **macOS** will generate a **macOS app bundle**.

## 📄 License

MIT — feel free to fork and build awesome things!
