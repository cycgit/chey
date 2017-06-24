const {
  app, BrowserWindow, ipcMain,
  dialog, Tray
} = require('electron')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 660,
    height: 560,
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './pages/index/index.html'),
    protocol: 'file:',
    type: 'textured'
  }))

  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', function() {
  createWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
