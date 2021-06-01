import React, { useEffect } from 'react';
import logging from './config/logging';
import routes from './config/routes';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

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
    <BrowserRouter>
      <div className="App">
        <Header linkPaths={allPaths} />
        <Route exact path="/">
          <Home pageName="This is the home page" />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </div>
    </BrowserRouter>

  );
}

export default App;