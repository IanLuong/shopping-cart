import { useState } from "react"

export default function Contact() {

    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })

    function handleChange(e) {
        const {name, value} = e.target
        setContactForm(prevContactForm => {
            return {
                ...prevContactForm,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`You submitted: ${contactForm}`)
        // submitMessage() 
    }

    return (
        <div className="contact">
            <div className="contact-form-container">
                <h1>Let us know what you think.</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label className="visually-hidden" htmlFor="firstName">First Name</label>
                        <input onChange={handleChange} value={contactForm.firstName} type="text" name="firstName" placeholder="First name" />
                        <label className="visually-hidden" htmlFor="lastName">Last Name</label>
                        <input onChange={handleChange} value={contactForm.lastName} type="text" name="lastName" placeholder="Last name" />
                    </div>
                    <label className="visually-hidden" htmlFor="email">Email</label>
                    <input onChange={handleChange} value={contactForm.email} type="email" name="email" placeholder="Email" />
                    <label className="visually-hidden" htmlFor="message">Message</label>
                    <input onChange={handleChange} value={contactForm.message} type="text" name="message" placeholder="How can we help?" />

                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="contact-other">
                <h2>Get in touch</h2>
                <p><strong>Phone Number:</strong> (918) 485-2727</p>
                <p><strong>Email:</strong> ianluongcodes@gmail.com</p>
                <p><strong>Address:</strong> 308 W 8th St, Hearne, Texas(TX), 77859 </p>
            </div>
        </div>
    )
}