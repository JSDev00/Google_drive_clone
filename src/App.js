import {useState} from 'react';
import './App.css';
import Header from '../src/components/header';
import Sidebar from '../src/components/sidebar';
import FileView from './components/FileView/FileView'
import SideIcons from './components/sideIcons'
import google from './media/google.png'
import {auth,provider} from './firebase';
function App() {
  const [user,setUser] = useState();
  const handleLogin =()=>{
    if (!user) {
      auth.signInWithPopup(provider).then((result)=>{
        setUser(result.user)
      })
    }
  }
  return (
    <div className="App">
    {
      user ? (
        <>
        <Header userPhoto={user.photoURL}/>
        <div className="app_main">
          <Sidebar/>
          <FileView/>
          <SideIcons/>
        </div>
        </>
      ):(
        <div className="app_login">
            <img className="img" src={google} alt="Google Drive" />
            <button className="btn" onClick={handleLogin}>LogIn</button>
        </div>
      )
    }
    </div>
  );
}

export default App;
