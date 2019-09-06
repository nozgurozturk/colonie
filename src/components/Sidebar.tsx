import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'


type SidebarProps = {

}


export const Sidebar: FunctionComponent<SidebarProps> = ({ }) => (
    <div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/expenses">Expenses</Link>
                <Link to="shopping-list">Shopping List</Link>
                <Link to="tasks">Tasks</Link>
            </ul>
        </nav>
    </div>
)

