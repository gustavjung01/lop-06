const { contextBridge, ipcRenderer } = require('electron');

const electronAPI = {
  checkForUpdates: async () => {
    return await ipcRenderer.invoke('check-for-updates');
  },

  installUpdate: async () => {
    return await ipcRenderer.invoke('install-update');
  },

  onUpdateStatus: (callback) => {
    const listener = (event, status) => {
      callback(status);
    };
    ipcRenderer.on('update-status', listener);
    return () => {
      ipcRenderer.removeListener('update-status', listener);
    };
  },

  getAppVersion: async () => {
    return await ipcRenderer.invoke('get-app-version');
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);
