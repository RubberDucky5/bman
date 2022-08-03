const { app, BrowserWindow } = require('electron');
const path = require("path");


function createApplication() {
    // Temporary
    let settings = {
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    };
    const window = new BrowserWindow(settings);

    window.loadFile('src/index.html');
}

app.whenReady().then(() => {
    createApplication();
});

app.on('window-all-closed', () => {
    if (process.platform) app.quit();
})