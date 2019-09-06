import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Pages

import { Expenses } from './pages/Expenses';
import { Home } from './pages/Home';
import { ShoppingList } from './pages/ShoppingList';
import { Tasks } from './pages/Tasks';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => (
    <div className="App">
        <HashRouter>
            <Sidebar />
                <Route path="/" component={Home} />
                <Route path="/expenses" component={Expenses} />
                <Route path="/shopping-list" component={ShoppingList} />
                <Route path="/tasks" component={Tasks} />   
        </HashRouter>

    </div>
);

export default App;
