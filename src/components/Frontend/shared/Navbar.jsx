import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import useAdmin from './../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  
  const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
  }
  
  const navbar = <>

    {
      isAdmin ?
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/instructor">Instructor</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
        </> :
        isInstructor ? <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/instructor">Instructor</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/instructor/dashboard">Dashboard</Link></li>
      </> :
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/instructor">Instructor</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/student/dashboard">Dashboard</Link></li>
          </>
    }
       
  </>
  
     
  
    
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navbar}
      </ul>
    </div>
<img src={logo} alt="" className='lg:h-16 lg:w-16 h-6 mr-2'/> <Link to="/">Sports Shala</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navbar}
    </ul>
                </div>
  <div className="">
               {
                        user &&
            
                        <div className="w-10 rounded-full">
                        <div className="tooltip" data-tip={user?.displayName}>
                        <div className="avatar">
                        <div className="rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 lg:h-9 h-8">
                            <img src={user?.photoURL} />
                        </div>
                        </div>
                                    </div>
                                     </div>
                    }
           
                   
                    {
                        user ? <button className='btn ml-5' onClick={handleLogOut}>Logout</button> : <div className="btn ml-5"><Link to="login">Login/Register</Link></div>
                    }

  </div>
</div>
        </div>
    );
};

export default Navbar;