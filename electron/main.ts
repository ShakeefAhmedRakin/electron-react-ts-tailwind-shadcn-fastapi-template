import { app, BrowserWindow, ipcMain, shell } from "electron";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Setup paths
process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
const BACKEND_DIST = path.join(
  process.resourcesPath,
  "backend",
  "dist",
  "main"
);

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;
let backendProcess: ChildProcessWithoutNullStreams | null = null;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    resizable: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Load renderer
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.webContents.closeDevTools();
    win.removeMenu();
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Spawn backend if not in dev
  if (!VITE_DEV_SERVER_URL && !backendProcess) {
    const backendExecutable =
      process.platform === "win32" ? "main.exe" : "main";
    const backendPath = path.join(BACKEND_DIST, backendExecutable);

    backendProcess = spawn(backendPath, [], {
      cwd: path.dirname(backendPath),
      detached: false,
      stdio: "pipe", // Ensure stdio is set to "pipe" for compatibility
    }) as ChildProcessWithoutNullStreams;

    backendProcess.unref();
  }
}

function cleanup() {
  if (backendProcess) {
    try {
      console.log("Killing backend process...");
      backendProcess.kill();
    } catch (err) {
      console.error("Failed to kill backend process:", err);
    }
    backendProcess = null;
  } else {
    console.log("No backend process to clean up.");
  }
}

// Handle process termination and cleanup
process.on("exit", cleanup);
process.on("SIGINT", () => {
  cleanup();
  process.exit();
});
process.on("SIGTERM", () => {
  cleanup();
  process.exit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    cleanup();
    app.quit();
    win = null;
  }
});

app.on("before-quit", cleanup);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);

// API FUNCTIONS
ipcMain.on("open-external", (_event, url) => {
  shell.openExternal(url).catch((err) => {
    console.error("Failed to open URL:", err);
  });
});
