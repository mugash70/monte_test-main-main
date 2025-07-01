export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const {
      name,
      email,
      phone,
      position,
      message,
      resumeFile
    } = body

    // Validate required fields
    if (!name || !email || !position) {
      return {
        success: false,
        error: 'Missing required fields: name, email, position'
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Invalid email format'
      }
    }

    // Create email content
    const emailContent = `
New Resume Submission

Applicant Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Position Applied: ${position}

Message:
${message || 'No additional message provided'}

${resumeFile ? 'Resume file attached.' : 'No resume file attached.'}

---
This email was sent from the Monte Group website career portal.
    `.trim()

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For now, we'll simulate the email sending
    console.log('📧 Resume submission email would be sent to: cyrilmugash70@gmail.com')
    console.log('Email content:', emailContent)

    // Log the submission for tracking
    console.log('📝 Resume submission logged:', {
      name,
      email,
      phone,
      position,
      timestamp: new Date().toISOString()
    })

    return {
      success: true,
      message: 'Resume submitted successfully. We will contact you soon!'
    }
  } catch (error) {
    console.error('Error submitting resume:', error)
    return {
      success: false,
      error: 'Failed to submit resume. Please try again later.'
    }
  }
})
