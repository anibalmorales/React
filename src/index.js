// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css'; 
import Header from './component/header.js'
import Hola from './component/component.js'
import Footer from './component/footer.js'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

ReactDOM.render(
  <h1 class="hola">Hola Mundo, Anibal Morales!</h1>,
  document.getElementById('root')
)

render(<Header/>)
render(<Hola/>)
render(<Footer/>)