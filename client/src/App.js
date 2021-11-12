import React, {useState} from 'react';

import './App.css';
import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">

        <Link to="/"><button>Home</button></Link>
        <Link to="/newAuthor"><button>Add Author</button></Link>

        <Switch>

          <Route exact path="/">
            <AllAuthors formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path = "/newAuthor/">
            <NewAuthorForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path = "/editAuthor/:id">
            <EditAuthorForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
