import React from 'react'
import Grid from './layout/grid'
import DisplayManagedNode from './layout/display-managed-node'

export default class App extends React.Component {
  render() {
    return (
      <Grid initialSize={10} scaleBy={10} maxScale={250} minScale={1}>
        <DisplayManagedNode>
          <p>Hello world</p>
        </DisplayManagedNode>
      </Grid>
    )
  }
}
