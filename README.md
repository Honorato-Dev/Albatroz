
![albatroz-logo-300](https://github.com/Honorato-Dev/Albatroz/assets/101150943/e3405d9a-8696-4a93-9207-689f421b0402)


# Albatroz Recovery 


Tool to recover session through the forgot password flow, includes API and necessary forms to implement in your project.

## Features

- User authentication: Securely manage user authentication for your application.
- Forgot password functionality: Allow users to reset their passwords securely.
- Contact form with Nodemailer: Send contact messages via email using Nodemailer.
- Built with Node.js and MongoDB: Utilizes Node.js for server-side logic and MongoDB for data storage.


## Installation

### To install the Albatroz Authenticator API, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Honorato-Dev/Albatroz.git
```
2. Install dependencies:
```bash
cd Albatroz
npm install
```
3. Configure environment variables:

   Create a .env file in the root directory and add the following variables:
```bash

NEXTAUTH_URL=
NEXTAUTH_SECRET=
MONGODB_URI=
EMAIL=
EMAIL_PASS=
SECRET_KEY=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_SECURE=
EMAIL_FROM=
APP_URL=

```
### To configure email reception through the application, we will use Google as an example.
   - Access your account in settings and look for App Passwords.
   - Remember 2FA must be eneable for this option show up.
    ![Screenshot from 2024-04-20 21-14-12](https://github.com/Honorato-Dev/crud-angular-spring/assets/101150943/7cf4c9f4-7435-4339-a35f-b202a30553ba)
   - Write the name of the application and press "Create".
    ![Screenshot from 2024-04-20 21-15-35](https://github.com/Honorato-Dev/crud-angular-spring/assets/101150943/86851a68-d2d4-447a-8e40-09ed3fbe9922)
   - Now the App Password created set it as environment variable EMAIL_PASS= 
    ![Screenshot from 2024-04-20 21-16-07](https://github.com/Honorato-Dev/crud-angular-spring/assets/101150943/4ae072fa-0468-4c2b-9232-118b0b4384a1)
   - Set the your email account as a environment variable EMAIL=

4. Seed data from ./utils/data.ts
 URL: http://localhost:3000/api/seed
 - OBS: Delete de file /page/api/seed.ts   after set the comand above

 
5. In templates/html configure it to your liking, copy and paste into:
 - pages/api/contactmail.ts

 -  return {html: <Content>}

6. Set SMTP data in aplication:
   - Let's use Brevo to configure SMTP
    ![Screenshot from 2024-04-20 00-48-10](https://github.com/Honorato-Dev/tech-quiz/assets/101150943/a48ffb84-60fa-4bc2-afd4-aaf72678a4c0)

```bash
SECRET_KEY=somethingsecret
SMTP_HOST=SMTP Server
SMTP_PORT=Port
SMTP_USER=Login
SMTP_PASSWORD=<master password>
SMTP_SECURE=false
EMAIL_FROM=Sender email
APP_URL=http://localhost:3000
```

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
