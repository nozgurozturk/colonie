import React, { FunctionComponent } from 'react';

type ShoppingProprs = {
title: string
}

export const ShoppingList: FunctionComponent<ShoppingProprs> = ({ title }) => (
    <h1>{title}</h1>
)