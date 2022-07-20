import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Routes,Route,  useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ReactLoading from 'react-loading';
import Signup from './Components/Signup';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state.Reducer.isAuth);
  useEffect(() => {
    if (isAuth && pathname === "/") {
      navigate("/dashboard");
    }
    else if(!isAuth && pathname === "/dashboard") {
    navigate('/');
    }
    else if(!isAuth && pathname === "/userlist"){
      navigate('/');
    }
    else{
      navigate(pathname);
    }
  },[isAuth]);
  return (
    <div className="App">
      <ToastContainer />
      <Suspense
      fallback={
        <ReactLoading type="spin" color = "#7e0000" height="20px" width="20px" />
      }>
{
  isAuth ? (
    <Routes>
      <Route path ="/signup" element={<Signup />} />

    </Routes>
  ):(
    <>
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )}
      </Suspense>
      </div>
  );
}

export default App;
