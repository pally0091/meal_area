

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import Home from './Components/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
        path: '/',
        element: <Home></Home>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
