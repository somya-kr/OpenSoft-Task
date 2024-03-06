import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainDashboard from './components/Maindashboard/MainDashboard';
import Register from './components/Verification/UserRegister';
import UserLogin from './components/Verification/UserLogin'
import Workspace from './components/Workspace'
import Analytics from './components/Analytics/Analytics';
import PremiumComp from './components/Premium/Premium';
import PrivateRoutes from './components/PrivateRoutes';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainDashboard />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route element = {<PrivateRoutes />} >
          <Route path='/workspace' element={<Workspace />} />
        </Route>
        <Route path='/analytics/:shortid' element={<Analytics />}/>
        <Route path='/premium' element={<PremiumComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
