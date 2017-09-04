#!/usr/bin/env node

const fs = require('fs-extra')
const yargs = require('yargs')
  .command(
    'component', 'Create new component',
    ctx => ctx.option('funtional', {
      alias: 'f',
      type: 'boolean',
      describe: 'for funtional component'
    })
  )
  .example('$0 component name', "shiver me timbers, here's an example for ye")
  .help('help')

// console.warn(JSON.stringify(yargs.argv, null, 2))

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

let basePath = process.cwd() + '/src/components/'
let cmds = yargs.argv['_']

if (cmds.includes('component')) {
  let idx = cmds.indexOf('component')
  let name = capitalize(cmds[idx + 1] || 'NewComponent')

  let componentExists = fs.pathExistsSync(basePath + name + '/index.js')

  if (componentExists) {
    console.log('Component already exists.')
    process.exit(0)
  }

  fs.ensureFileSync(basePath + name + '/index.js') // Create folder
  fs.ensureFileSync(basePath + name + '/style.css') // Create folder

  let template = yargs.argv.funtional ? funtionalComponentTemplet : componentTemplet
  fs.writeFile(basePath + name + '/index.js', template(name), done(name))
} else {
  yargs.showHelp()
}

function done (name) {
  return error => {
    if (error) return console.error(error)
    console.log(`Component ${name} crated.`)
  }
}

function componentTemplet (name) {
  return `
  import React, { Component } from 'react'
  import style from './style.css'

  export default class ${name} extends Component {
    render () {
      return (
        <div className={style.local}>
          Base component
        </div>
      )
    }
  }
`
}

function funtionalComponentTemplet () {
  return `
  import React, { Component } from 'react'
  import style from './style.css'

  export default (props, context) => (
    <div className={style.local}>
      Base => functional component
    </div>
  )
`
}
