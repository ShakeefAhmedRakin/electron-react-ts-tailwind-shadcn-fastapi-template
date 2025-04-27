/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ROOT: string;
    VITE_PUBLIC: string;
  }
}

interface Window {
  // DEFINE ELECTRON BASED APIS FOR REACT TO USE LIKE SO: window.electron.sendNotification(...)
  electron: {
    sendNotification: ({ title: string, body: string }) => void;
    openExternal: (url: string) => void;
  };
}
