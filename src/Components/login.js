import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});

    let formErrors = {};
    if (!email) {
      formErrors.email = 'Please enter your email';
    }
    if (!password) {
      formErrors.password = 'Please enter your password';
    }
    if (password.length < 8) {
      formErrors.password =
        'Password must contain greater than or equal to 8 characters';
    }
    setError(formErrors);

    //   function validateForm() {
    //     if (email.length == 0) {
    //       alert('Invalid form, Email Address can not be empty');
    //       return;
    //     }
    //     if (password.length < 8) {
    //       alert(
    //         'Invalid Form, Password must contain greater than or equal to 8 characters.'
    //       );
    //       return;
    //     }

    var userDetails = { email: email, password: password };
    console.log(userDetails);
    axios
      .post(
        'http://127.0.0.1:9000/proxy?url=http://127.0.0.1:8080/login',
        userDetails
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container h-100vh con1">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card d-flex auth-inner">
            <div className="card-body">
              <form className="needs-validation" onSubmit={handleSubmit}>
                <h3>Login</h3>

                <div className="mb-3 ">
                  <label>Email </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="mb-3 ">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.password}
                    </span>
                  )}
                </div>
                <Link to="/Forgotpass">Forget Password</Link>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Not have an account Do Registered here{' '}
                  <Link to="/">sign in?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Login;
