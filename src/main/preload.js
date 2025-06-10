const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	// Ejemplo: función para pruebas
	ping: () => ipcRenderer.invoke('ping'),
});
