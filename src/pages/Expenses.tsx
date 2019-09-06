import React, { FunctionComponent } from 'react';

type ExpenseProps = {
title: string
}

export const Expenses: FunctionComponent<ExpenseProps> = ({ title }) => (
    <h1>{title}</h1>
)