import React, { useState } from 'react';
import axios from 'axios';

function MultiForm ()
{
    const [formState]
}


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
           Username:
            </label>
            <input type='text' name="username" value={formState.username}
                onChange={handleChange}
        </form>
        )
    </>