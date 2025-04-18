const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');

let loaderWindow;
let appWindow;

function createLoaderWindow() {
  loaderWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
  });

  loaderWindow.setMenuBarVisibility(false)
  loaderWindow.loadFile(path.join(__dirname, 'renderer/launcher.html'));

  ipcMain.on('open-app-window', (event, data) => {
    loaderWindow.close();
    createAppWindow(data);
  });
}

function createAppWindow(data) {
  appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
  });

  appWindow.setMenuBarVisibility(false)
  appWindow.loadFile(path.join(__dirname, 'renderer/app.html'));

  appWindow.webContents.on('did-finish-load', () => {
    appWindow.webContents.send('data-from-loader', data);
  });
}

app.whenReady().then(createLoaderWindow);

// Quit when all windows are closed (for macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
