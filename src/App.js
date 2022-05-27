import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home/index';
import Pag404 from './components/Pag404';
import Menu from './pages/Menu/Container_menu'
import About from './pages/About/Container_about'
import Reservation from './pages/Reservation/Container_reservation';
import Reservations from './pages/Reservation/Reservations';
import Login from './components/Login/Container_login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" render={()=> {
            return <Login login={true} />
          }} />
          <Route exact path="/registro" render={()=> {
            return <Login login={false} />
          }} />
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/nosotros" component={About}/>
          <Route exact path="/reservas" component={Reservation}/>
          <Route exact path="/reservaciones" component={Reservations}/>
          <Route exact component={Pag404}/>
        </Switch>
      </Layout>
    </BrowserRouter> 
  );
}

export default App;
