import React form 'react';
import SignUp
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>NavBar</nav>
        <signUpForm />
        <Authenticate />
      </div>
    </>
  );
};

export default App;
