import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import UpdateUser from './Pages/UpdateUser';
import DeleteUser from './Pages/DeleteUser';



function App() {
 var token = localStorage.getItem("token");

  return (
    <>
   
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/r' element={<RegisterPage/>}/>
      <Route path='/p' element={<ProfilePage token={token}/>}/>
      <Route path='/d' element={<DeleteUser token={token}/>}/>
      <Route path='/u' element={<UpdateUser token={token}/>}/>
     </Routes>
    </>
  );
}

export default App;