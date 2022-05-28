import './App.css';
import Header from "./components/header/header"
import Home from "./components/homePage/home"
import Footer from "./components/footer/footer"
import User from "./components/account/userdashboard"
import Profile from "./components/account/profile";
import Business from "./components/account/businessDetails"
import Address from "./components/account/address";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>   
      <Route path="/" exact element={<Home/>}/>
      <Route path="/user" element={<User/>}>
      <Route index path='/user/profile' element={<Profile/>}/>
      <Route index path='/user/businessdetails' element={<Business/>}/>
      <Route index path='/user/addresses' element={<Address/>}/>
      </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;