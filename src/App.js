import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import { withLDProvider} from 'launchdarkly-react-client-sdk';
import Footer from "./Footer";

import demo_data from "./demo_data.json"
import {useState} from "react";
import DemoModal from "./pages/components/DemoModal";

const randomUser = Math.floor(Math.random() * 4)
const defaultUser = demo_data.users[randomUser]

function App() {
    const [modalOpen, setModalOpen] = useState(true);
    const [users, setUsers] = useState(demo_data.users);
    const [currUser, setCurrUser] = useState(defaultUser);


    const handleOpenModal = () => {
        setModalOpen(true);
    };

    return (
      <Router>
          <DemoModal
              open={modalOpen}
              setModalOpen={setModalOpen}
              />
        <NavBar
            users={users}
            setUsers={setUsers}
            currUser={currUser}
            setCurrUser={setCurrUser}
            onOpenModal={handleOpenModal}
        />
        <div style={{ flexGrow: 1, paddingBottom: "150px" }}>
          <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
          <Footer />
      </Router>
  );
};

export default withLDProvider({
  clientSideID: process.env.REACT_APP_LD_CLIENT_ID,
    options: { streaming: true },
    context: defaultUser
})(App);
