import React, { useState } from 'react';
import axios from 'axios';

function MultiForm ()
{
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });
}

const handleChange = (e) => {}

const signUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useSate(null);

    const
}


export default 'Authenticate';
return (
     <>
        <form onSubmit = {handleSubmit}>
            <label>
           username:
            </label>
            <input type='text' name="username" value={formState.username}
                onChange={handleChange}
        </form>
        )
    </>