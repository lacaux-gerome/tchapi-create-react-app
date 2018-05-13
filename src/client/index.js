import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import {AppContainer} from 'react-hot-loader'

const renderApp = Component => {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('root'),
    )
};

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', renderApp)
}

renderApp();