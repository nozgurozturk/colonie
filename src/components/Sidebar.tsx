import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface SidebarProps  {
    isCompact : boolean
}

const SidebarContainer = styled.div<SidebarProps>`
    background-color: ${props => props.theme.colors.main};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: min-width 300ms;
    width: ${props => (props.isCompact ? 100 : 200)}px;
    height: 100vh;
    border-top-right-radius:${props=>props.theme.borderRadius};
    border-bottom-right-radius:${props=>props.theme.borderRadius};
`


export const Sidebar: FunctionComponent = ({ }) => (

    <SidebarContainer isCompact={false}>
                <Link to="/">Home</Link>
                <Link to="/expenses">Expenses</Link>
                <Link to="shopping-list">Shopping List</Link>
                <Link to="tasks">Tasks</Link>
    </SidebarContainer>
)

