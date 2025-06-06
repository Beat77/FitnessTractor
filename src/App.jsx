

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import { Route,Routes } from "react-router";
import Layout from "./layout/Layout.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
 

  <Routes>
    <Route>
      <Route element = {<Layout/>}/>
      <Route path ="/" element ={<Register/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path= "/activities" element={<ActivitiesPage/>}/> 
      <Route path="*" element={<Error404/>}/>
    </Route>

  </Routes>


 
  return <Error404 />;
}
