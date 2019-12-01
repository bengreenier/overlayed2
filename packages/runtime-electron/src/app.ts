import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '@overlayed2/ux-core'

document.body.style.backgroundColor = 'black'

const mountNode = document.querySelector('#app')
const app = React.createElement(App)
ReactDOM.render(app, mountNode)
