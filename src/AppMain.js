import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import SideBar from './components/SideBar'

export default function AppMain() {
    return (
        <BrowserRouter>
            <main>
                <div className="layout">
                    <Switch>
                        <SideBar></SideBar>
                        <Route path="/group" component={App}>
                            {/* <App /> */}
                        </Route>
                    </Switch>
                </div>
            </main>
        </BrowserRouter>
    )
}
// export default withRouter(<AppMain />);
