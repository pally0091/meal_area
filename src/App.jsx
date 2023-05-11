

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'


import Blogs from './Components/Blogs'
import Meals from './Components/Meals'
import Detail from './Components/Detail'
import Categories from './Components/Categories'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
        path: '/',
        element: <Meals></Meals>,
          loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'),
        },
        {
          path: '/:id',
          element: <Meals></Meals>,
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.id}`),
          },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/meal/:id',
          element: <Detail></Detail>,
          loader: ({ params }) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
            )
        },
        {
          path: '/category/:id',
          element: <Categories></Categories>,
          loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
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
