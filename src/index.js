import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


async function fetchdetails()
{
    const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";
  var Boards=[];
  let boardResponse= await fetch("https://api.trello.com/1/members/rohitjha13/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key="+apiKey+"&token="+token+"")
  let boardResponseJson=await boardResponse.json();
  ReactDOM.render(<App  boards={boardResponseJson}/>, document.getElementById('root'));
   
}

fetchdetails()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

