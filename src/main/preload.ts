import { contextBridge, ipcRenderer } from 'electron'
import fs from 'fs'
import path from 'path'
import editJsonFile from 'edit-json-file'

const config = editJsonFile(`./config.json`)

// Define channels for IPC communication
export type Channels =
  | 'scanDirectory'
  | 'renameFile'
  | 'renameFolder'
  | 'deleteFile'
  | 'deleteFolder'
  | 'addFolder'
  | 'readState'
  | 'saveConfig'

const exposedIpcRenderer = {
  sendMessage(channel: Channels, ...args: unknown[]) {
    ipcRenderer.send(channel, ...args)
  },

  on(channel: Channels, func: (...args: unknown[]) => void) {
    const subscription = (_event, ...args: unknown[]) => func(...args)
    ipcRenderer.on(channel, subscription)
    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },

  once(channel: Channels, func: (...args: unknown[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args))
  }
}

const electronHandler = {
  ipcRenderer: exposedIpcRenderer,

  saveState: (state: any) => ipcRenderer.invoke('saveState', state),
  readState: () => ipcRenderer.invoke('readState'),
  loadModel: (id: string) => ipcRenderer.invoke('loadModel', id),

  scanDirectory: (path: string) => ipcRenderer.invoke('scanDirectory', path),

  renameModel: (oldPath: string, newPath: string) => ipcRenderer.invoke('renameModel', oldPath, newPath),
  renameFolder: (oldPath: string, newPath: string) => ipcRenderer.invoke('renameFolder', oldPath, newPath),

  addFolder: () => ipcRenderer.invoke('addFolder'),
  deleteFile: (filePath: string) => ipcRenderer.invoke('deleteFile', filePath),
  deleteFolder: (filePath: string) => ipcRenderer.invoke('deleteFolder', filePath)
}

contextBridge.exposeInMainWorld('electron', electronHandler)
export type ElectronHandler = typeof electronHandler
