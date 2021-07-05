import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logging from './config/logging';
import routes from './config/routes';
import Header from './components/Header';
import HeaderCleaner from './components/HeaderCleaner';
import Footer from './components/Footer';
import { BrowserRouter, Route, } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Home from './pages/Home';
// Import the pages to be used in the categories cards
import WaterPage from "./pages/WaterPage";
import PiercingPage from "./pages/PiercingPage";
import EnergywellPage from "./pages/EnergywellPage";
import FundamentPage from "./pages/FundamentPage";

import dotenv from 'dotenv';

export interface NameAndPath {
  path: string;
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  }),
);


const App: React.FC<{}> = () => {
  useEffect(() => {
    logging.info('Loading application.')
  }, []);

  const classes = useStyles();



  // All the current route paths, list of lists on the format [[path,]]
  // Basically list comprehensions
  const allPaths: NameAndPath[] = routes.map(({ path, name }) => ({ path: path, name: name }));

  return (

    <div className={classes.root}>
      <BrowserRouter>
        <HeaderCleaner linkPaths={allPaths} />
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Home pageName="This is the home page" />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/water">
          <WaterPage />
        </Route>
        <Route exact path="/piercing">
          <PiercingPage />
        </Route>
        <Route exact path="/energywells">
          <EnergywellPage />
        </Route>
        <Route exact path="/fundament">
          <FundamentPage />
        </Route>

      </BrowserRouter>

      <Footer />
    </div >


  );
}

export default App;