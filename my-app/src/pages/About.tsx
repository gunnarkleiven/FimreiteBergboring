import React, { useState, useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<String>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);

        /*
        let number = props.match.params.number;

        if (number) {
            setMessage(`The Number is ${number}`);
        }
        else {
            setMessage(`No number provided!`);
        }
        */
        setMessage("This is the about page!");

    }, [props])

    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default withRouter(AboutPage);

