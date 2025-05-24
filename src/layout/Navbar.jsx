import { NavLink } from "react-router";

/** Navbar with site navigation links */
{
  const { token, logout } = useAuth();
  const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to = "/" end>
        Activities
        </NavLink>

        
          <NavLink to = "/logout" end>
          Log out
          </NavLink>
          
            <NavLink to = "/register" end>
            Register
            </NavLink>

            <NavLink to ="/login"> Login </NavLink>
          
      </nav>
    </header>
  );
}
