import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    // Insted of using Browser router which already have history built in, we use regular router where we pass out history
    // Due to this we have access to history variable in here and we can easily export it.
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;