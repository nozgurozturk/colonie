import React, { FunctionComponent } from 'react';

type HomeProps = {
    title: string
}

export const Home: FunctionComponent<HomeProps> = ({ title }) => (
     <h1>{title}</h1>
)