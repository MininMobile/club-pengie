const { app, BrowserWindow } = require('electron');
const path = require("path"),
      url = require("url");

var win;

function createWindow() {
    win = new BrowserWindow();

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'assets/index.html'),
        protocol: "file:",
        slashes: true
    }));

    win.setSize(616, 509);
    win.focus();

    win.on("closed", () => {
        app.quit();
    });
}

app.on("window-all-closed", () => { app.quit(); });
app.on("ready", createWindow);