import './App.css';
import Header from "./components/header/header"
import Home from "./components/homePage/home"
import Footer from "./components/footer/footer"
import User from "./components/account/userdashboard"
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
      <Route path="/youraccount" exact element={<User/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;