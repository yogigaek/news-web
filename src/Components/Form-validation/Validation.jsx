import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Validasi() {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = `Username is required!`;
    } else if (values.username.length < 3) {
      errors.username = `Username must be more than 2 characters`;
    } else if (values.username.length > 10) {
      errors.username = `Username cannot esced more than 10 characters`;
    }
    if (!values.email) {
      errors.email = `Email is required!`;
    } else if (!regex.test(values.email)) {
      errors.email = `This is not a valid email format !`;
    }
    if (!values.message) {
      errors.message = `Message is required!`;
    }
    return errors;
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <section className="contact" id="kontak1">
            <h1 style={{ fontSize: "30px" }}>My Contact</h1>

                <div className="kontak1">
                    <label for="username">Username</label>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                    />
                    <span>{formErrors.username}</span>
                </div>
                <div className="kontak1">
                    <label for="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                    />
                    <span>{formErrors.email}</span>
                </div>
                <div className="kontak1">
                    <label for="message">Message</label>
                    <textarea
                    name="message"
                    id="pesan"
                    placeholder="Write Something ..."
                    value={formValues.message}
                    style={{ height: "170px" }}
                    onChange={handleChange}
                    ></textarea>
                    <span>{formErrors.message}</span>
                </div>
                <div className="kontak1">
                    <input type="submit" placeholder="Submit" />
                </div>
                <br />
                {Object.keys(formErrors).length === 0 && isSubmit ?(
                    <div className="message">Data send successfully</div>
                ):(<div />)}
            </section>
        </form>
    </div>
  );
}

export default Validasi;
