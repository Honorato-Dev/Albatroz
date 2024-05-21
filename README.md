
<div align="center">
   <img src="image/albatroz-logo.png" alt="Description" width="150" height="150">
   
# Albatroz  
</div>








## Introduction
Tool to recover session through the forgot password flow, includes API and necessary forms to implement in your project.

Innovative and secure session recovery tool designed to improve user authentication and password recovery processes. The application integrates a robust forget password functionality and a contact form using Nodemailer for email communication. Built with Node.js and React, this tool provides a reliable full-stack solution for modern web applications.


## Installation





```bash
npm i albatroz
```
## Overview

```bash
import React from 'react';
import { useForm } from 'react-hook-form';
import { useForgotPassword } from 'albatroz';



const ForgotPasswordScreen: React.FC = () => {
  const { loading, submitHandler } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
      <div >
        <h1>Forgot password ?</h1>
         <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email
              placeholder="exemplo@email.com"
              id="email"
              autoFocus
              {...register('email', {
                required: 'Please enter a valid email ',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please use a valid email format ',
                },
              })}
            />
            {errors.email && (
              <div >{errors.email.message}</div>
            )}
          </div>
          <div >
            <button
              disabled={loading}
            >
              {loading ? 'Processing' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;


```
## Features

   - User Authentication:
        - Securely manages user authentication, ensuring that only authorized users can access your application.
        - Implements industry-standard security practices to protect user credentials and session data.

   - Forgot Password Functionality:
       - Allows users to reset their passwords securely via a robust forgot password flow.
       - Includes API endpoints and necessary forms to integrate this functionality into your project effortlessly.

   - Contact Form with Nodemailer:
        - Facilitates communication by sending contact messages via email using Nodemailer.
        - Ensures reliable and timely delivery of contact form submissions to your specified email address.

   - Built with Node.js and MongoDB:
        - Utilizes Node.js for efficient server-side logic and asynchronous processing.
        - Employs MongoDB for flexible and scalable data storage solutions, ideal for handling user authentication and session data.





## Contributing

  Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

   -  Fork the repository.
   - Create a new branch (git checkout -b feature/new-feature).
   -  Make your changes.
   -  Commit your changes (git commit -am 'Add new feature').
   -  Push to the branch (git push origin feature/new-feature).
   -  Create a new Pull Request.

## License

 - This project is licensed under the MIT License.
