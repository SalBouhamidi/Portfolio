import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'


export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EmailJs); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_ServiceId; 
    const templateId = import.meta.env.VITE_template; 
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams);
      toast('Email successfully sent!')
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <Toaster position="bottom-right" />
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <p className="font-bold text-4xl text-gray-200">Salima BHM</p>
              </a>
              <p className="footer-text">
                Well, if you want to know more about me or my projects please contact me
              </p>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Let's get in touch</p>

              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    ref={nameRef}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input-field"
                    autoComplete="off"
                  />
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                </div>

                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                    autoComplete="off"
                  />
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                </div>

                <div className="input-wrapper">
                  <input type="message" name="message" placeholder="Your Message" ref={messageRef} value={message} onChange={(e) => setMessage(e.target.value)} required
                    className="input-field"
                    autoComplete="off"
                  />
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/salima-bouhamidi-01a72a196/"  target="_blank" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <span className="span">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/SalBouhamidi" target="_blank" className="social-link">
                  <ion-icon name="logo-github"></ion-icon>
                  <span className="span">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
