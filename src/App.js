import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import { withLDProvider} from 'launchdarkly-react-client-sdk';


import demo_data from "./demo_data.json"
import {useState} from "react";
const defaultUser = demo_data.users[0]

function App() {
    const [currUser, setCurrUser] = useState(defaultUser);

    console.log('currUser', currUser)

    return (
      <Router>
        <NavBar currUser={currUser} setCurrUser={setCurrUser}/>
        <div className="container mt-4">
          <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
  );
};

export default withLDProvider({
  clientSideID: process.env.REACT_APP_LD_CLIENT_ID,
    context: defaultUser
})(App);
