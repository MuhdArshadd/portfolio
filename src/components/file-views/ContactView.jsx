import React, { useState } from 'react';
import { Icons } from '../icons/Icons';
import './ContactView.css';

export const ContactView = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqobeon";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
                
                // Reset button text after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="contact-container animate-view">
            
            {/* Header Section */}
            <div className="contact-header">
                <div className="comment-text" style={{ color: '#6a9955' }}>// contact.css — let's build something</div>
                <h1 className="contact-title">Contact</h1>
                <div className="comment-text" style={{ color: '#858585' }}>// open to work, permanent roles & good conversations</div>
            </div>

            <div className="contact-layout">
                
                {/* Left Column: Social Links */}
                <div className="contact-socials">
                    <h2 className="section-title">FIND ME ON</h2>
                    
                    <a href="mailto:arshad@example.com" className="social-card">
                        <div className="social-icon-wrapper" style={{ borderColor: '#4ec9b0' }}>
                            <span style={{ color: '#4ec9b0' }}><Icons.Mail /></span>
                        </div>
                        <div className="social-details">
                            <div className="social-name" style={{ color: '#4ec9b0' }}>EMAIL</div>
                            <div className="social-link">muhdarshad50@gmail.com</div>
                        </div>
                        <div className="social-arrow"><Icons.ExternalLink /></div>
                    </a>

                    <a href="https://www.linkedin.com/in/muhdarshad50/" target="_blank" rel="noreferrer" className="social-card">
                        <div className="social-icon-wrapper" style={{ borderColor: '#4fc1ff' }}>
                            <span style={{ color: '#4fc1ff' }}><Icons.LinkedIn /></span>
                        </div>
                        <div className="social-details">
                            <div className="social-name" style={{ color: '#4fc1ff' }}>LINKEDIN</div>
                            <div className="social-link">linkedin.com/in/muhdarshad50</div>
                        </div>
                        <div className="social-arrow"><Icons.ExternalLink /></div>
                    </a>

                    <a href="https://github.com/MuhdArshadd" target="_blank" rel="noreferrer" className="social-card">
                        <div className="social-icon-wrapper" style={{ borderColor: '#cccccc' }}>
                            <span style={{ color: '#cccccc' }}><Icons.GitHub /></span>
                        </div>
                        <div className="social-details">
                            <div className="social-name" style={{ color: '#cccccc' }}>GITHUB</div>
                            <div className="social-link">github.com/MuhdArshadd</div>
                        </div>
                        <div className="social-arrow"><Icons.ExternalLink /></div>
                    </a>
                </div>

                {/* Right Column: Code Form */}
                <div className="contact-form-section">
                    <h2 className="section-title">SEND A MESSAGE</h2>
                    
                    <form onSubmit={handleSubmit} className="code-form">
                        
                        <div className="form-group">
                            <label className="comment-text">YOUR_NAME <span className="required">*</span></label>
                            <input type="text" placeholder="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>

                        <div className="form-group">
                            <label className="comment-text">YOUR_EMAIL <span className="required">*</span></label>
                            <input type="email" placeholder="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>

                        <div className="form-group">
                            <label className="comment-text">SUBJECT</label>
                            <input type="text" placeholder="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                        </div>

                        <div className="form-group">
                            <label className="comment-text">MESSAGE <span className="required">*</span></label>
                            <textarea placeholder="'your message'" rows="5" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                        
                        <div className="comment-text form-footer">
                            // Powered by Formspree
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};