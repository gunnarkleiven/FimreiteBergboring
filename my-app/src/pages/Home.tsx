import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

interface Props {
    pageName: string;
}

const HomePage: React.FunctionComponent<Props> = ({ pageName }) => {
    useEffect(() => {
        logging.info(`Loading ${pageName}`);
    }, [])

    return (
        <div>
            <p>This is the Home Page!</p>
        </div>
    );
}

export default HomePage;

