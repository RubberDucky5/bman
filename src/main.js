const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
let window_options = fs.readFileSync('src/window_options.json');
window_options = JSON.parse(window_options);

function createApplication() {
    settings = window_options;
    settings.webPreferences = {
        preload: path.join(__dirname, 'preload.js'),
    }
    const window = new BrowserWindow(settings);

    window.loadFile('src/index.html');
}

app.whenReady().then(() => {
    createApplication();
});

app.on('window-all-closed', () => {
    app.quit();
});