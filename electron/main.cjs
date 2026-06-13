const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');

const publishUrl = 'https://pub-53f18eb6ccaf40f5a7c141e65e97dfb3.r2.dev/app-updates/app-lop-06';

let mainWindow = null;

function sendUpdateStatus(status) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send('update-status', status);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1024,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
    },
  });

  const indexHtml = path.join(__dirname, '..', 'dist', 'index.html');
  win.loadFile(indexHtml);

  mainWindow = win;

  win.on('closed', () => {
    mainWindow = null;
  });
}

function configureAutoUpdater() {
  autoUpdater.setFeedURL({ provider: 'generic', url: publishUrl });

  try {
    const electronLog = require('electron-log');
    autoUpdater.logger = electronLog;
    autoUpdater.logger.transports.file.level = 'info';
  } catch {
    autoUpdater.logger = null;
  }

  autoUpdater.on('checking-for-update', () => {
    sendUpdateStatus({
      state: 'checking',
      message: 'Đang kiểm tra cập nhật...',
    });
  });

  autoUpdater.on('update-available', (info) => {
    sendUpdateStatus({
      state: 'update-available',
      version: info.version,
      message: `Đã tìm thấy bản mới ${info.version}`,
    });
  });

  autoUpdater.on('update-not-available', () => {
    sendUpdateStatus({
      state: 'up-to-date',
      message: 'Bạn đang dùng bản mới nhất',
    });
  });

  autoUpdater.on('download-progress', (progressObj) => {
    sendUpdateStatus({
      state: 'downloading',
      progress: progressObj.percent,
      bytesPerSecond: progressObj.bytesPerSecond,
      transferred: progressObj.transferred,
      total: progressObj.total,
      message: `Đang tải ${Math.round(progressObj.percent || 0)}%`,
    });
  });

  autoUpdater.on('update-downloaded', (info) => {
    sendUpdateStatus({
      state: 'downloaded',
      version: info.version,
      message: 'Bản cập nhật đã sẵn sàng. Bấm "Khởi động lại để cập nhật"',
    });
  });

  autoUpdater.on('error', (error) => {
    sendUpdateStatus({
      state: 'error',
      error: error?.message || 'Lỗi khi cập nhật',
      message: error?.message || 'Lỗi khi cập nhật',
    });
  });

  setInterval(() => {
    autoUpdater.checkForUpdates().catch(() => {});
  }, 10 * 60 * 1000);
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    try {
      configureAutoUpdater();
    } catch (error) {
      sendUpdateStatus({
        state: 'error',
        error: error?.message || 'Không thể khởi tạo cập nhật',
        message: error?.message || 'Không thể khởi tạo cập nhật',
      });
    }
  });

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
  });
}

ipcMain.handle('check-for-updates', async () => {
  try {
    if (!mainWindow) {
      return { success: false, error: 'Main window not available' };
    }
    const result = await autoUpdater.checkForUpdates();
    return { success: true, info: result };
  } catch (err) {
    return { success: false, error: String(err) };
  }
});

ipcMain.handle('install-update', async () => {
  try {
    autoUpdater.quitAndInstall(false, true);
    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
});

ipcMain.handle('get-app-version', async () => {
  return app.getVersion();
});
