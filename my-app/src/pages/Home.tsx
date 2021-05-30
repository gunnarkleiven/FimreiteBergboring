import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <div>
            <p>This is the Home Page!</p>
        </div>
    );
}

export default HomePage;

