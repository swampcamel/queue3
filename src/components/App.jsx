import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route exact path='/newTicket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
