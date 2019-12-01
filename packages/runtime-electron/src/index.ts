import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
  const bw = new BrowserWindow()
  bw.loadFile(`${__dirname}/app.html`)
})
