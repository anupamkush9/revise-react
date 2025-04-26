import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import "./index.css"
import { BrowserRouter, Routes, Route, Link, Navigate  } from "react-router";
import App from './App.jsx'
import About from './About.jsx'
import PageNotFound from './PageNotFound.jsx';
import NavLayout from './NavLayout.jsx';
import Home from './Home.jsx'
import Contact from './Contact.jsx';
import ListCourse from './ListCourse.jsx';
import Search from './Search.jsx';
import Courses from './Courses.jsx';
import UserDetail from './UserDetail.jsx';
import UserList from './UserList.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />

        <Route path='/users/list?' element={<UserList />} />
        <Route path='/users/:id/:name?' element={<UserDetail />} />

        <Route path="/courses" element={<Courses />} >
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListCourse />} />
        </Route>

        {/* <Route path="*" element={<Navigate to='/' />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

//  implementation Ref link
//  https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6/

// or same as above

// <Route path="/" element={<NavLayout />}>
// <Route index element={<Home />} />
// <Route path="app" element={<App />} />
// <Route path="contact" element={<Contact />} />
// <Route path="about" element={<About />} />
// <Route path="*" element={<PageNotFound />} />
// </Route>