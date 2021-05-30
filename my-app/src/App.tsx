import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
// import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Header } from './components/Header';
import Header from './components/Header';


const App: React.FC<{}> = () => {
  useEffect(() => {
    logging.info('Loading application.')
  }, []);

  return (
    <div>
      <Header />
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