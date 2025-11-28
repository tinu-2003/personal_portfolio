import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'
import AdminHomePage from './Pages/AdminHomePage'
import Adminprojectadd from './Pages/Adminprojectadd'
import Inbox from './Pages/Inbox'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/adminhomepage' element={<AdminHomePage/>}/>
      <Route path='/adminprojectadd' element={<Adminprojectadd/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>

 
    </>
  )
}

export default App
