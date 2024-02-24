import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About/About.jsx'
import MyServices from './pages/service/MyServices.jsx'
import MyProject from './pages/project/MyProject.jsx'
import MyContact from './pages/contact/MyContact.jsx'
import SkillCom from './pages/skill/SkillCom.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/service",
    element: <MyServices/>,
  },
  {
    path: "/project",
    element: <MyProject/>,
  },
  {
    path: "/contact",
    element: <MyContact/>,
  },
  {
    path: "/skill",
    element: <SkillCom/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
