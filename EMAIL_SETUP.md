# Contact Form Email Setup

This project now includes a fully functional contact form that sends emails using Nodemailer. Follow these steps to configure email functionality:

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `SMTP_PASS`

## Alternative Email Providers

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP Server

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Features Implemented

✅ **API Route**: `/api/contact` handles form submissions  
✅ **Form Validation**: Client and server-side validation  
✅ **Email Templates**: Professional HTML and text email templates  
✅ **Error Handling**: Comprehensive error handling with user feedback  
✅ **Loading States**: Form shows loading state during submission  
✅ **Toast Notifications**: Success/error notifications using Sonner  
✅ **Form Reset**: Form clears after successful submission

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message
5. Verify toast notifications appear

## Security Notes

- Environment variables are not committed to version control
- Email validation prevents spam
- Rate limiting can be added if needed
- Consider adding CAPTCHA for production use

## Troubleshooting

- **Authentication Error**: Verify your SMTP credentials and app password
- **Connection Error**: Check SMTP host and port settings
- **Email Not Received**: Check spam folder and SMTP configuration
- **Form Not Submitting**: Check browser console for errors
