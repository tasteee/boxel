import path from 'path'
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

import MenuBuilder from './menu'
import { resolveHtmlPath } from './util'
import { is } from '@electron-toolkit/utils'
import { config } from './config'
import { indexFolder } from './indexer'

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info'
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify()
  }
}

// Main window reference
let mainWindow: BrowserWindow | null = null

ipcMain.handle('readState', async () => {
  return config.get()
})

ipcMain.handle('saveState', async (_, state) => {
    config.set('folders', state.folders)
    config.set('samples', state.samples)
    config.set('midis', state.midis)
    config.set('settings', state.settings)
    config.save()
    return true
})

ipcMain.handle('openAddFolderDialog', async (event, defaultPath) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory'],
    defaultPath,
    title: 'Select asset folder to index'
  })

  if (!result.canceled && result.filePaths.length > 0) return result.filePaths[0]
  return null
})

ipcMain.handle('indexFolder', async (_, directoryPath) => {
  try {
    const assets = await indexFolder(directoryPath)
    return assets
  } catch (error) {
    return error
  }
})

ipcMain.handle('closeApp', () => {
  app.quit()
})

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged ? path.join(process.resourcesPath, 'assets') : path.join(__dirname, '../../assets')

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths)
  }

  mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    // titleBarStyle: 'hidden',
    // frame: false,
    transparent: false,
    resizable: true,
    alwaysOnTop: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      webSecurity: false,
      sandbox: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      allowRunningInsecureContent: true,
      contextIsolation: true,
      devTools: true,
      preload: app.isPackaged ? path.join(__dirname, 'preload.js') : path.join(__dirname, '../../.erb/dll/preload.js')
    }
  })

  mainWindow.loadURL(resolveHtmlPath('index.html'))

  is.dev && mainWindow?.webContents.openDevTools()
  mainWindow.maximize()
  mainWindow.on('ready-to-show', () => mainWindow.show())

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menuBuilder = new MenuBuilder(mainWindow)
  menuBuilder.buildMenu()

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url)
    return { action: 'deny' }
  })

  // Auto updates
  new AppUpdater()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app
  .whenReady()
  .then(() => {
    createWindow()
    app.on('activate', () => {
      if (mainWindow === null) createWindow()
    })
  })
  .catch(console.log)
