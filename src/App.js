
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';


import { BrowserRouter as Router, Routes , Route, BrowserRouter
 } from 'react-router-dom';
 
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Hello from './Hello';
import ListOfEmployee from './component/ListOfEmployee';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import EmployeeComponent from './component/EmployeeComponent';

function  App() {
  return (

    <>
      <BrowserRouter>   
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<ListOfEmployee/>}></Route>
            <Route path='/getAll' element={<ListOfEmployee/>}></Route>
            <Route path='/save' element={<EmployeeComponent/>}></Route>  
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
          {/* <ListOfEmployee/> */}
      </>
    
    //  <Hello/>
  //   <div className="App">
  //   <Router>
  //   <NavBar/>   
  //     <Routes>
  //          <Route exact path='/' element={<Home/>}/> 
  //          <Route exact path='/adduser' element={<AddUser/>}/> 
  //          <Route exact path='/edituser/:id' element={<EditUser/>}/> 
  //          <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
  //     </Routes>
  //   </Router>
  //   </div>
  );
}

export default App;
