const fs = require('fs-extra')

const folder = process.argv[2]

async function execute () {
  try {
    await fs.emptyDir('./static')
    await fs.outputFile('./static/DONT-EDIT-FILES-IN-THIS-DIRECTORY.md', 'For more information show `webui/readme.md`')
    
    await fs.copy(`./dist/${folder}`, './static', { overwrite: true })
    
  } catch (err) {
    console.error(err)
  }
}

execute()
