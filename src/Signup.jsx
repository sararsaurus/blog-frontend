import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      // promise that handles errors
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} alt="" /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <br />
          <input
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
          />
        </div>
        <small className="text-danger ">{20 - name.length} characters remaining</small>
        <div>
          Email:
          <br />
          <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password:
          <br />
          <input
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div>
          Password confirmation:
          <br />
          <input
            className="form-control"
            value={password_confirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            name="password_confirmation"
            type="password"
          />
        </div>
        {password_confirmation !== password ? <small className="text-danger ">Password doesn't match!</small> : null}
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
