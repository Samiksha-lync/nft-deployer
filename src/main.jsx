import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './Pages/Home/Home.jsx'
import Tutorials from './Pages/Tutorials.jsx'
import YourContracts from './Pages/YourContracts.jsx';
import './main.scss';
import DeployNft from './Pages/DeployNft.jsx';
import DeployMultiple from './Pages/DeployMultiple.jsx';
import LaunchNft from './Pages/LaunchNft/LaunchNft.jsx';


const router = (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/YourContracts" element={<YourContracts />}/>
        <Route path="/Tutorials" element={<Tutorials />}/>
        <Route path="/deploy-nft" element={<DeployNft />}/>
        <Route path="/multiple-edition" element={<DeployMultiple />}/>
        <Route path="/launch-nft" element={<LaunchNft />}/>
      </Route>
      </Routes>
    </BrowserRouter>
   )
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router} 
  </React.StrictMode>,
);



