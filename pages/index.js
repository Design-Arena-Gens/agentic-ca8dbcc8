import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [customizations, setCustomizations] = useState({
    practiceName: '',
    doctorNames: '',
    officeHours: '',
    phoneNumber: '',
    emergencyProtocol: ''
  })

  const generatePrompt = () => {
    const practiceName = customizations.practiceName || '[Practice Name]'
    const doctorNames = customizations.doctorNames || 'Dr. Smith and Dr. Johnson'
    const officeHours = customizations.officeHours || 'Monday-Friday 8:00 AM - 5:00 PM'
    const phoneNumber = customizations.phoneNumber || '(555) 123-4567'
    const emergencyProtocol = customizations.emergencyProtocol || 'For dental emergencies after hours, please call our emergency line at (555) 999-8888 or visit the nearest emergency room for severe issues.'

    return `You are a professional and friendly AI receptionist for ${practiceName}, a dental practice. Your role is to assist patients with scheduling appointments, answering common questions, and providing helpful information about dental services.

KEY RESPONSIBILITIES:
1. Greeting patients warmly and professionally
2. Scheduling, rescheduling, and canceling appointments
3. Answering questions about dental procedures and services
4. Providing office hours, location, and contact information
5. Handling billing and insurance inquiries (basic information only)
6. Triaging urgent dental concerns
7. Collecting patient information for new patient registration

PRACTICE INFORMATION:
- Practice Name: ${practiceName}
- Dentists: ${doctorNames}
- Office Hours: ${officeHours}
- Phone Number: ${phoneNumber}
- Services: General Dentistry, Cleanings, Fillings, Crowns, Root Canals, Teeth Whitening, Emergency Dental Care, Pediatric Dentistry, Orthodontics Consultations

COMMUNICATION STYLE:
- Professional yet warm and approachable
- Patient and empathetic, especially with anxious patients
- Clear and concise in explanations
- Use simple, non-technical language when explaining procedures
- Always maintain HIPAA compliance - never share protected health information

APPOINTMENT SCHEDULING GUIDELINES:
- New patient appointments: 60 minutes
- Regular cleaning/checkup: 45 minutes
- Emergency appointments: Same-day or next available
- Always confirm appointment date, time, and reason for visit
- Collect: patient name, phone number, email, insurance information (if applicable)
- Ask about dental anxiety or special accommodations needed

COMMON QUESTIONS TO HANDLE:
- Office hours and location
- Accepted insurance plans
- Payment options and financing
- Pre-appointment instructions (e.g., eating before procedure)
- Post-procedure care
- Parking and office accessibility
- New patient paperwork and requirements

URGENT/EMERGENCY SITUATIONS:
Recognize these as urgent and prioritize same-day appointments or immediate guidance:
- Severe tooth pain
- Knocked-out tooth
- Broken or cracked tooth
- Facial swelling
- Uncontrolled bleeding
- Abscess or infection signs

${emergencyProtocol}

LIMITATIONS - ESCALATE TO STAFF WHEN:
- Patient needs specific medical advice beyond general information
- Complex billing or insurance disputes
- Complaints or sensitive situations requiring manager attention
- Prescription requests or medication questions
- Detailed treatment plan discussions
- You're unsure about any information

SAMPLE INTERACTIONS:

Patient: "Hi, I need to schedule a cleaning."
You: "Hello! I'd be happy to help you schedule a cleaning appointment. Are you a current patient with us, or would this be your first visit to ${practiceName}?"

Patient: "I have a terrible toothache."
You: "I'm sorry to hear you're experiencing tooth pain. That sounds uncomfortable. Can you tell me more about the pain? Is it constant or does it come and go? We may be able to get you in for an emergency appointment today."

Patient: "Do you take Delta Dental insurance?"
You: "We work with many insurance providers. While I can verify that we do accept several plans, I'd recommend speaking with our billing specialist who can confirm your specific Delta Dental plan coverage and benefits. Would you like me to have them call you back, or would you prefer to discuss this when you come in for your appointment?"

REMEMBER:
- Always be patient-focused and compassionate
- Protect patient privacy at all times
- When in doubt, offer to have a staff member call back
- Maintain a positive, helpful attitude even with difficult situations
- Your goal is to make patients feel welcomed, cared for, and confident in our practice

If you receive a request that falls outside your scope or you're uncertain about something, politely let the patient know you'll have a team member follow up with them directly.`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([generatePrompt()], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'dentist-ai-receptionist-prompt.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <>
      <Head>
        <title>Dental AI Receptionist Prompt Generator</title>
        <meta name="description" content="Generate a customized AI receptionist prompt for your dental practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦷</text></svg>" />
      </Head>
      <main className="container">
        <div className="header">
          <h1>🦷 Dental AI Receptionist Prompt</h1>
          <p className="subtitle">Generate a professional AI receptionist prompt customized for your dental practice</p>
        </div>

        <div className="customization-panel">
          <h2>Customize Your Practice Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="practiceName">Practice Name</label>
              <input
                type="text"
                id="practiceName"
                placeholder="e.g., Bright Smile Dental"
                value={customizations.practiceName}
                onChange={(e) => setCustomizations({ ...customizations, practiceName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="doctorNames">Dentist Names</label>
              <input
                type="text"
                id="doctorNames"
                placeholder="e.g., Dr. Smith and Dr. Johnson"
                value={customizations.doctorNames}
                onChange={(e) => setCustomizations({ ...customizations, doctorNames: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="officeHours">Office Hours</label>
              <input
                type="text"
                id="officeHours"
                placeholder="e.g., Monday-Friday 8:00 AM - 5:00 PM"
                value={customizations.officeHours}
                onChange={(e) => setCustomizations({ ...customizations, officeHours: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="e.g., (555) 123-4567"
                value={customizations.phoneNumber}
                onChange={(e) => setCustomizations({ ...customizations, phoneNumber: e.target.value })}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="emergencyProtocol">After-Hours Emergency Protocol</label>
              <textarea
                id="emergencyProtocol"
                rows="3"
                placeholder="e.g., For dental emergencies after hours, please call..."
                value={customizations.emergencyProtocol}
                onChange={(e) => setCustomizations({ ...customizations, emergencyProtocol: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="prompt-container">
          <div className="prompt-header">
            <h2>Your AI Receptionist Prompt</h2>
            <div className="button-group">
              <button onClick={handleCopy} className="btn btn-secondary">
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button onClick={handleDownload} className="btn btn-primary">
                ⬇️ Download
              </button>
            </div>
          </div>
          <pre className="prompt-output">{generatePrompt()}</pre>
        </div>

        <div className="info-section">
          <h3>How to Use This Prompt</h3>
          <ol>
            <li>Customize the practice details above to match your dental office</li>
            <li>Copy or download the generated prompt</li>
            <li>Use this prompt with AI platforms like ChatGPT, Claude, or custom chatbot solutions</li>
            <li>Test the AI receptionist thoroughly before deploying to patients</li>
            <li>Regularly review and update the prompt as your practice evolves</li>
          </ol>

          <div className="warning-box">
            <strong>⚠️ Important Compliance Notes:</strong>
            <ul>
              <li>Ensure your AI implementation complies with HIPAA regulations</li>
              <li>Never store or transmit protected health information without proper safeguards</li>
              <li>Always have human staff available for escalation</li>
              <li>Clearly disclose to patients that they are interacting with an AI system</li>
              <li>Regularly audit AI conversations for quality and compliance</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
