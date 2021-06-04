import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface Props {
    path: string;
    name: string;
    key: number;
}

//const PageLinkButton: React.FunctionComponent<Props & RouteComponentProps<any>> = ({ path, name, key }) => {
const PageLinkButton: React.FunctionComponent<Props> = ({ path, name }) => {
    const [pagePath, setPagePath] = useState<string>(path);
    const [pageName, setPageName] = useState<string>(name);
    //const [buttonKey, setButtonKey] = useState<number>(key);

    const handleClick = () => {
        console.log(`Click to page ${pageName}`)
    }





    return (
        <div>
            <Button
                variant="contained"
                component={Link}
                to={pagePath}
            >
                {pageName}
            </Button>
        </div>
    );
}

export default PageLinkButton;