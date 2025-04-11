import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    return(

            <main >
                <div>
                    <h1 >Login</h1>
                    <div ></div>
                </div>
                <div>
                    <div >
                        <img src="" alt="" />
                        <input type="text" placeholder='Username' />
                    </div>
                </div>
                <div >
                    <div >
                        <img src="" alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
                

            </main>
    );
}
