import React, { useEffect } from 'react';
import logging from './config/logging';
import routes from './config/routes';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Empty from './pages/Empty';
import Home from './pages/Home';

export interface NameAndPath {
  path: string;
  name: string;
}


const App: React.FC<{}> = () => {
  useEffect(() => {
    logging.info('Loading application.')
  }, []);



  // All the current route paths, list of lists on the format [[path,]]
  // Basically list comprehensions
  const allPaths: NameAndPath[] = routes.map(({ path, name }) => ({ path: path, name: name }));

  return (

    <div className="App">
      <BrowserRouter>
        <Header linkPaths={allPaths} />
        <Route exact path="/">
          <Home pageName="This is the home page" />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/empty">
          <Empty />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </div >


  );
}

export default App;