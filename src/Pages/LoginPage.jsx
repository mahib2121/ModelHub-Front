import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                toast.success("Login successful");
                navigate(location.state?.from?.pathname || "/", { replace: true });
            })
            .catch(() => toast.error("Login failed. Check your credentials."));
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                setUser(user);
                toast.success("Login successful");
                navigate(location.state?.from?.pathname || "/", { replace: true });
            })
            .catch(() => toast.error("Login failed. Check your credentials."));
    };

    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="flex justify-between text-sm mt-1">
                            <a className="link link-hover">Forgot password?</a>
                            <Link to="/auth/register" className="text-secondary font-medium">
                                Register Now
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                        >
                            Login
                        </button>

                        <div className="divider">OR</div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn w-full bg-white text-black border border-gray-300 flex items-center justify-center gap-2"
                        >
                            <svg
                                aria-label="Google logo"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <g>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                </g>
                            </svg>
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default LoginPage;
