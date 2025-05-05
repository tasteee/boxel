import Essentia from 'essentia.js'
import fs from 'fs'

const getAudioFilePaths = (folderPath: string) => {
  const filePaths = fs.readdirSync(folderPath)
  return filePaths.filter((file) => file.endsWith('.wav') || file.endsWith('.mp3'))
}

export const indexFolder = async (folderPath: string) => {
  const audioContext = new Essentia.EssentiaNode()

  const filePaths = getAudioFilePaths(folderPath)
  const audioFilePaths = filePaths.map((file) => `${folderPath}/${file}`)

  const getAudioFileInfo = async (filePath: string) => {
    const audioData = fs.readFileSync(filePath)
    const features = audioContext.audioFeaturesExtractor(audioData)
    const keyFeatures = audioContext.keyExtractor(audioData)
    const tempoFeatures = audioContext.tempoExtractor(audioData)
    console.log({ keyFeatures, tempoFeatures, features })
    return { filePath, keyFeatures, tempoFeatures, features }
  }

  const processors = audioFilePaths.map(getAudioFileInfo)
  const index = await Promise.all(processors)
  return index
}
