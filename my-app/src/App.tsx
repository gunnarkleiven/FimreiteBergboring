import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import Header from './components/Header';


export interface NameAndPath {
  path: string;
  name: string;

}


const App: React.FC<{}> = () => {
  useEffect(() => {
    logging.info('Loading application.')
    console.log(`All paths: ${allPaths}`);
  }, []);



  // All the current route paths, list of lists on the format [[path,]]
  // Basically list comprehensions
  const allPaths: NameAndPath[] = routes.map(({ path, name }) => ({ path: path, name: name }));

  return (
    <div>
      <Header linkPaths={allPaths} />

      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;