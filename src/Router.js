import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Error from './pages/Error'
import About from './pages/About'
import Logement from './pages/Logement'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'logement',
        element: <Logement />,
      },
    ],
  },
])

export default router
