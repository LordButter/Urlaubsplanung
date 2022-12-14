const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1200,
        height: 800,
		icon:  path.join(__dirname, '/assets/schichtkalender.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('login.html');
}

app.commandLine.appendSwitch('no-sandbox');
app.commandLine.appendSwitch('in-process-gpu');
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})