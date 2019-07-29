import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Page/Home';
import { CreateAccount } from './Components/Users/CreateAccount';
import { TarefaInput } from './Components/Tarefas/TarefaInput';
import { TarefaList } from './Components/Tarefas/TarefaList';
import { TodoProvider } from './Hooks/TarefaContext';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true}><TodoProvider><Home/></TodoProvider></Route>
            <Route path="/registrar" component={CreateAccount} />
            <Route path="/novatarefa"><TodoProvider><TarefaInput/></TodoProvider></Route>
            <Route path="/tarefas"><TodoProvider><TarefaList/></TodoProvider></Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
