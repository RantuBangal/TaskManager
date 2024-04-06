import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import PageNotFound from '../pages/PageNotFound'
import PrivateRoute from './PrivateRoute'
import TaskPage from '../pages/TaskPage'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tasks' element={<PrivateRoute><TaskPage/></PrivateRoute>} />
            <Route path='/register' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
