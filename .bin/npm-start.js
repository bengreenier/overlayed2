const prompts = require('prompts')
const execspawn = require('npm-execspawn')

;(async () => {
  let response

  if (process.argv.includes('--browser')) {
    response = 'browser'
  } else if (process.argv.includes('--electron')) {
    response = 'electron'
  } else {
    const res = await prompts({
      type: 'select',
      name: 'value',
      message: 'Pick a runtime',
      choices: [
        { title: 'Browser', value: 'browser' },
        { title: 'Electron', value: 'electron' },
      ],
      initial: 0,
    })
    response = res.value
  }

  var child = execspawn(
    `lerna run --stream --scope @overlayed2/runtime-${response} watch`
  )
  child.stderr.pipe(process.stderr)
  child.stdout.pipe(process.stdout)
})()
