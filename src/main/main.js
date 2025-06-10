import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url'
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            },
        });
        
    if (app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, '../view/index.html'));
    }
    else {
        mainWindow.loadURL('http://localhost:5173');
    }
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.handle('ping', () => 'pong');
