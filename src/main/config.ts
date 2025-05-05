import editJsonFile from 'edit-json-file'
import { app } from 'electron'
import fs from 'fs'
import path from 'path'

const DEFAULT_CONFIG = {
    folders: [],
    samples: [],
    midis: [],
    settings: {}
}

const CONFIG_PATH = path.join(app.getPath('userData'), 'sanatyConfig.json')
const STRING_DEFAULT_CONFIG = JSON.stringify(DEFAULT_CONFIG, null, 2)
if (!fs.existsSync(CONFIG_PATH)) fs.writeFileSync(CONFIG_PATH, STRING_DEFAULT_CONFIG)

export const config = editJsonFile(CONFIG_PATH)