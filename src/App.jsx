import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ChatSearch from './components/ChatSearch'

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/reset-password' Component={ForgotPassword}/>
          <Route path='/profile' Component={null}/>
          <Route path='/settings' Component={null}/>
          <Route path='/chat' Component={null}/>
          <Route path='/group-settings' Component={null}/>
          <Route path='/chat-options' Component={null}/>
          <Route path='/group-options' Component={null}/>
          <Route path='/other-profile' Component={null}/>
          <Route path='/chat-selection' Component={null}/>
          <Route path='/new-group' Component={null}/>
          <Route path='/documents' Component={null}/>
          <Route path='/members' Component={null}/>
      </Routes>
    </div>
  )
}

export default App
