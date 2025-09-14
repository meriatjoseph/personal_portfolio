# Personal Portfolio Website
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://muhammednihas-portfolio-pied-phi.vercel.app/)

A modern, responsive portfolio website built with React to showcase skills, projects, and professional experience. This website includes a functional contact form powered by EmailJS for seamless communication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [EmailJS Setup](#emailjs-setup)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Skills showcase with proficiency indicators
- Project portfolio with detailed descriptions
- Professional experience timeline
- Educational background section
- Certifications display
- Achievements and badges
- Testimonials from colleagues and clients
- Contact form with EmailJS integration
- Social media links

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mhdnihas/personal-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd personal-website
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and configure your EmailJS credentials (see [Environment Variables](#environment-variables))

5. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## EmailJS Setup

To enable the contact form on your portfolio website to send emails to your Gmail account (muhammednihas2218@gmail.com), you need to set up an EmailJS account and configure the service.

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click on "Sign Up Free"
3. Create an account using your preferred method (email, Google, etc.)

### Step 2: Create an Email Service

1. After logging in, go to the Email Services page
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (muhammednihas2218@gmail.com) when prompted
5. Give your service a name (e.g., "Portfolio Contact Form")
6. Click "Create Service"

### Step 3: Create Email Templates

You need to create two templates - one for notifications to yourself and one for auto-replies to visitors.

#### Notification Template (for yourself):

1. Go to the Email Templates page
2. Click "Create New Template"
3. Customize your template:
   - Template Name: "Portfolio Contact Form Notification"
   - Subject: `New message from {{from_name}}: {{subject}}`
   - Body:
     ```
     Hello,
     
     You received a new message from your portfolio website.
     
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     This message was sent from your portfolio contact form.
     ```
4. Click "Save"

#### Auto-Reply Template (for visitors):

1. Go to the Email Templates page
2. Click "Create New Template"
3. Customize your template:
   - Template Name: "Portfolio Contact Form Auto-Reply"
   - Subject: `Thank you for contacting Muhammed Nihas`
   - Body:
     ```
     Hello {{from_name}},
     
     Thank you for reaching out to me through my portfolio website. I appreciate your message and will get back to you as soon as possible.
     
     Here's a copy of your message:
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     I typically respond within 24-48 hours. If you need immediate assistance, feel free to call me at +91 8589932218.
     
     Best regards,
     Muhammed Nihas
     
     ---
     This is an automated response. Please do not reply to this email.
     ```
4. Click "Save"

### Step 4: Get Your Credentials

1. Go to your EmailJS Dashboard
2. Note down your:
   - User ID (in the "Account" section)
   - Service ID (from the service you created)
   - Template ID (from the template you created)

### Step 5: Configure Environment Variables

For security reasons, we store the EmailJS credentials in environment variables rather than hardcoding them in the source code.

1. Open the `.env` file in the root of your project
2. Replace the placeholder values with your actual EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_USER_ID=your_actual_user_id
   ```

### Step 6: Test Your Form

1. Save all changes
2. Restart your development server: `npm start`
3. Navigate to the contact form
4. Fill out the form and submit
5. Check your Gmail inbox for the received message

### Troubleshooting

If you encounter issues:

1. Check that all IDs are correctly entered in the `.env` file
2. Verify that your Gmail account is properly connected to EmailJS
3. Ensure that you've confirmed any permissions requests from EmailJS
4. Check your browser's console for any error messages
5. Make sure you're not blocking pop-ups or scripts
6. Ensure you've restarted the development server after updating the `.env` file

### Security Notes

- Environment variables prefixed with `REACT_APP_` are embedded into the build and are visible in the client-side code
- For production sites with stricter security requirements, consider implementing a backend service to handle email sending
- EmailJS has rate limits on free accounts (200 emails per month)
- Never commit your `.env` file to version control (it should be in `.gitignore`)

## Environment Variables

The following environment variables are required for the EmailJS functionality:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

These variables are accessed in the Contact component via `process.env.REACT_APP_VARIABLE_NAME`.

## Folder Structure

```
personal-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Achievements/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Testimonials/
│   │   └── ...
│   ├── styles/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
└── README.md
```

## Deployment

The easiest way to deploy your React app is to use [Vercel](https://vercel.com/), which integrates well with GitHub and provides automatic deployments on every push to the main branch.

Alternatively, you can use other platforms like:
- Netlify
- GitHub Pages
- Firebase Hosting

For more information on deployment options, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Create React App Environment Variables Documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [React Components Documentation](https://reactjs.org/docs/components-and-props.html)
