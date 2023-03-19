
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple react form</h1>
      <form>
      <label htmlFor="name">Username</label> <br />
      <input type="text" placeholder='username' /> <br />
      <label htmlFor="name">Email</label> <br />
      <input type="Email" placeholder='Email' /> <br />
      <label htmlFor="text">Password</label><br />
      <input type="password" placeholder='password' /> <br />
      <button>Submit</button>
      </form>

      <section className='okay'>

      </section>
    </div>




  );
}

export default App;
