import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

interface Props {
    path: string;
    name: string;
    // key: number;
}

//const PageLinkButton: React.FunctionComponent<Props & RouteComponentProps<any>> = ({ path, name, key }) => {
const PageLinkButton: React.FunctionComponent<Props> = ({ path, name }) => {
    const [pagePath, setPagePath] = useState<string>(path);
    const [pageName, setPageName] = useState<string>(name);
    // const [buttonKey, setButtonKey] = useState<number>(key);

    const handleClick = () => {
        console.log(`Click to page ${pageName}`)
    }





    return (
        <div>
            <BrowserRouter>
                <Route>
                    <Link to={pagePath} className="btn btn-primary">
                        {pageName}
                    </Link>
                </Route>
            </BrowserRouter>
        </div>
    );

    /*
    return (
    <Router>
        <div>
            <Button
                key={buttonKey}
                variant="contained"
                component={RouterLink}
                to={pagePath}
                onClick={handleClick}
            >
                {pageName}
            </Button>
        </div>
    </Router>

    );
    */
}

export default PageLinkButton;