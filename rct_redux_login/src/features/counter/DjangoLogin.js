import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from './djangoLoginSlice';

const DjangoLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.django.isLoggedIn);
    const isLoading = useSelector((state) => state.django.isLoading);
    const error = useSelector((state) => state.django.error);
    const dispatch = useDispatch();

    const Login = async () => {
        dispatch(loginAsync({ username, password }));
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
                <div className="d-flex h-custom-2 px-5 ms-xl-4 mt-xl-n5">
                    <form style={{ width: '23rem' }}>
                        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Django Login</h3>
                        <div className="form-outline mb-4">
                            <input type="username" placeholder="Username" id="form2Example18" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label className="form-label" htmlFor="form2Example18">Username</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" placeholder="Password" id="form2Example28" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label" htmlFor="form2Example28">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                            <button className="btn btn-info btn-lg btn-block" type="button" onClick={Login} disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                            <br /><br />
                        </div>
                    </form>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isLoggedIn && <p style={{ color: 'green' }}>Login successful!</p>}
        </div>
    );
};

export default DjangoLogin;
