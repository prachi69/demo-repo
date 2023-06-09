import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPass() {
  // State variables for form fields and errors
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the error messages
    setEmailError('');

    // Validate the form fields
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    // Further validation logic if needed

    // Submit the form
    // TODO: Implement the password reset logic here
  };

  return (
    <div className="container h-100vh con1">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card d-flex auth-inner">
            <div className="card-body">
              <form className="needs-validation" onSubmit={handleSubmit}>
                <h3>Forgot Password</h3>
                <div className="mb-3 was-validated">
                  <label>Email : </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {emailError && <div className="error">{emailError}</div>}
                <button type="submit" className="btn btn-primary ">
                  Reset Password
                </button>{' '}
                <br />
                <Link to="/">Log in</Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
export default ForgotPass;
