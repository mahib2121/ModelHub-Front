import React, { use, useContext } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/Logo.png'
import { toast } from 'react-toastify';
import userIcon from '../assets/Sample_User_Icon.png';
import { AuthContext } from '../context/AuthContext';





const NavBar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => toast.success('Logged out successfully'))
            .catch(() => toast.error('Logout failed'));
    };

    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addmodel">Add Model</Link></li>
            <li><Link to="/viewModel">View Model</Link></li>
        </>
    );

    return (
        <div>
            <nav className="navbar bg-base-100 px-4 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
                    </Link>

                    <h2 className="ml-2 font-bold text-lg"> ModelHub </h2>

                    {user && <span className="text-sm font-medium ml-2">{user.email}</span>}
                </div>

                <div className="navbar-center hidden lg:flex items-center gap-4">

                    <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-4">
                    <img src={userIcon} alt="User" className="w-8 h-8 rounded-full" />
                    {user ? (
                        <button onClick={handleLogout} className="btn btn-primary">
                            Log Out
                        </button>
                    ) : (
                        <>
                            <Link to="/auth/login" className="btn btn-primary text-white">
                                Login
                            </Link>
                            <Link to="/auth/register" className="btn btn-primary text-white">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
