import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});

    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let formErrors = {};
    if (!name) {
      formErrors.name = 'Please enter your name';
    }
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
    // if (!passwordRegex.test(password)) {
    //   formErrors.password =
    //     'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.';
    // }
    if (!number) {
      formErrors.phone = 'Please enter your phone number ';
    }

    setError(formErrors);

    var userDetails = {
      name: name,
      email: email,
      password: password,
      number: number,
    };

    console.log(userDetails);
    axios
      .post(
        'http://127.0.0.1:9000/proxy?url=http://127.0.0.1:8080/register',
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
                <h3>Sign Up</h3>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="mb-3 ">
                  <label>Email </label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.password}
                    </span>
                  )}
                </div>

                <div className="mb-3 ">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="number"
                    value={number}
                    className="form-control"
                    placeholder="Enter Phone number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  {errors.phone && (
                    <span className="error" style={{ color: 'red' }}>
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Already registered <Link to="/Login">Log in?</Link>
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

export default SignUp;
