import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Themes

import {lightTheme, darkTheme} from './utils/styles/Themes';
// Pages

import { Expenses } from './pages/Expenses';
import { Home } from './pages/Home';
import { ShoppingList } from './pages/ShoppingList';
import { Tasks } from './pages/Tasks';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => (
    <ThemeProvider theme={lightTheme}>
        <HashRouter>
            <Sidebar />
            <Route path="/" component={Home} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/shopping-list" component={ShoppingList} />
            <Route path="/tasks" component={Tasks} />
        </HashRouter>
        </ThemeProvider>
);

export default App;
