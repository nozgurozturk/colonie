import React, { FunctionComponent } from 'react';

type TasksProps = {
title: string
}

export const Tasks: FunctionComponent<TasksProps> = ({ title }) => (
    <h1>{title}</h1>
)