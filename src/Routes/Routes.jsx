import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";
import Careers from "../Layouts/Careers/Careers";
import HomePage from "../Pages/HomePage/HomePage";
import Category from "../Pages/Category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        hydrateFallbackElement: (
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
        loader: () => fetch('../../Json data/news.json')
      }
    ]
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/careers',
    element: <Careers></Careers>
  },
  {
    path: '/*',
    element: <p>Error 404</p>
  }
]);