import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout';
import List from '../pages/List'


const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={List} />
            <Route path ="/list/:type" exact component={List}/>
        </Switch>
    </Layout>
    

);

export default AppRoutes;



