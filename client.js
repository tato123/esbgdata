import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import GraphContainer from './components/Graph/GraphContainer'
import App from './containers/App'
import configureStore from './store'
import {Tabs, Tab, TabHeaderList, TabHeader, TabPanel} from './components/Tabs/Tabs'

const store = configureStore()

render(
    <Provider store={store}>
        <App>
            <Tabs>
                <TabHeaderList>
                    <TabHeader title="Graph" id="graph"/>
                    <TabHeader title="Manage" id="manage"/>
                </TabHeaderList>
                <TabPanel>
                    <Tab id="graph">
                        <GraphContainer />
                    </Tab>
                    <Tab id="manage">
                        <label>Something here</label>
                    </Tab>
                </TabPanel>
                
            </Tabs>
        </App>
    </Provider>, 
    document.getElementById('root')
)
