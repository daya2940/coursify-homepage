import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Fragment } from 'react';
import Header from './components/header';
import Homepage from './components/homepage';

function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <Homepage />
      </Fragment>
    </div>
  );
}

export default App;
