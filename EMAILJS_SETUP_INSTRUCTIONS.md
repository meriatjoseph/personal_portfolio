# EmailJS Setup Instructions

To enable the contact form on your portfolio website to send emails to your Gmail account (muhammednihas2218@gmail.com), you need to set up an EmailJS account and configure the service.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click on "Sign Up Free"
3. Create an account using your preferred method (email, Google, etc.)

## Step 2: Create an Email Service

1. After logging in, go to the Email Services page
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (muhammednihas2218@gmail.com) when prompted
5. Give your service a name (e.g., "Portfolio Contact Form")
6. Click "Create Service"

## Step 3: Create Email Templates

You need to create two templates - one for notifications to yourself and one for auto-replies to visitors.

### Notification Template (for yourself):

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

### Auto-Reply Template (for visitors):

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

## Step 4: Get Your Credentials

1. Go to your EmailJS Dashboard
2. Note down your:
   - User ID (in the "Account" section)
   - Service ID (from the service you created)
   - Template ID (from the template you created)

## Step 5: Configure Environment Variables

For security reasons, we store the EmailJS credentials in environment variables rather than hardcoding them in the source code.

1. Open the `.env` file in the root of your project
2. Replace the placeholder values with your actual EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_USER_ID=your_actual_user_id
   ```

## Step 6: Test Your Form

1. Save all changes
2. Restart your development server: `npm start`
3. Navigate to the contact form
4. Fill out the form and submit
5. Check your Gmail inbox for the received message

## Troubleshooting

If you encounter issues:

1. Check that all IDs are correctly entered in the `.env` file
2. Verify that your Gmail account is properly connected to EmailJS
3. Ensure that you've confirmed any permissions requests from EmailJS
4. Check your browser's console for any error messages
5. Make sure you're not blocking pop-ups or scripts
6. Ensure you've restarted the development server after updating the `.env` file

## Security Notes

- Environment variables prefixed with `REACT_APP_` are embedded into the build and are visible in the client-side code
- For production sites with stricter security requirements, consider implementing a backend service to handle email sending
- EmailJS has rate limits on free accounts (200 emails per month)
- Never commit your `.env` file to version control (it should be in `.gitignore`)

For more information, visit the [EmailJS Documentation](https://www.emailjs.com/docs/) and [Create React App Environment Variables Documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/).
