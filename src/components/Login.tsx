import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Login(props:any) {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        if (email && password) {
            localStorage.setItem('isSignIn', 'true');
            props.isLoggedIn(true);
            navigate('/home')
        }
    }

    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-4 mt-5'>
                    <div className="card">
                        <div className="card-body ">
                            <h2 className='text-center'>Login</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={e => { setEmail(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" value={password} onChange={e => { setPassword(e.target.value) }} />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-success"
                                        disabled={!email || !password} onClick={onLogin}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login