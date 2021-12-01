import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Adotar from '../../views/contents/adotar'
import Doar from '../../views/contents/doar'
import Contato from '../../views/contents/contato'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/adotar">
                <Adotar />
            </Route>
            <Route path="/doar">
                <Doar />
            </Route>
            <Route path="/contato">
                <Contato />
            </Route>         
        </Switch>
    </main>
)
export default Content
