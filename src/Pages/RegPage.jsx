import React from 'react';
import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';

import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const RegPage = () => {
    const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.purl.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must contain at least one uppercase, one lowercase, and 6+ characters.');
            toast.error('Invalid password format.');
            return;
        }

        setError('');
        createUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                toast.success('Registration successful');
                form.reset();
                navigate(location.state?.from?.pathname || '/', { replace: true });
            })
            .catch(() => toast.error('Registration failed. Try again.'));
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                setUser(user);
                toast.success('Login successful');
                navigate(location.state?.from?.pathname || '/', { replace: true });
            })
            .catch(() => toast.error('Login failed.'));
    };




    return (
        <div>
            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input input-bordered w-full" placeholder="Name" required />
                        </div>

                        <div>
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />
                        </div>

                        <div>
                            <label className="label">Photo URL</label>
                            <input name="purl" type="text" className="input input-bordered w-full" placeholder="Photo URL" />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button type="submit" className="btn btn-primary w-full mt-2">Register</button>

                        <p className="text-center mt-2 text-sm">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="text-secondary font-medium">Login Now</Link>
                        </p>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="btn w-full bg-white text-black border border-gray-300 flex items-center justify-center gap-2"
                    >
                        <svg width="20" height="20" viewBox="0 0 512 512">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegPage;