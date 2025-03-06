export default function Home() {
  return (
      <div className="container">
      <div className="login-card">
        <h1>LOGIN</h1>
        <input type="text" id="taskInput" placeholder="Username"></input>
        <input type="text" id="taskInput" placeholder="Password"></input>
        <input type="text" id="taskInput" placeholder="Email"></input>
        <button id="addTaskBtn">LOGIN</button>
          <p>don't u have an account? click here :</p>
      </div>
    </div>
  );
}
