import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './lib/icon/icon'

function App(): React.ReactElement {
    return (<Icon name='loading' />)
}

ReactDOM.render(<App />, document.querySelector("#app"))