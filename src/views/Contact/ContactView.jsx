import React, { useState, useEffect, useRef } from 'react';
import { Icons } from '../../components/icons/Icons';
import './ContactView.css';

export const ContactView = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [progress, setProgress] = useState(100);
  const [secondsLeft, setSecondsLeft] = useState(5);
  
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  const AUTO_CLOSE_DELAY = 5000; // 5 seconds

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqobeon";

  // Clear all timers
  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Auto-close effect when modal opens
  useEffect(() => {
    if (showModal) {
      setProgress(100);
      setSecondsLeft(5);
      
      // Animate progress bar
      const startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, AUTO_CLOSE_DELAY - elapsed);
        const progressPercent = (remaining / AUTO_CLOSE_DELAY) * 100;
        setProgress(progressPercent);
        setSecondsLeft(Math.ceil(remaining / 1000));
      }, 50);

      // Auto close after delay
      timerRef.current = setTimeout(() => {
        closeModal();
      }, AUTO_CLOSE_DELAY);

      return () => clearTimers();
    }
  }, [showModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setModalType('success');
        setShowModal(true);
        setIsClosing(false);
        document.body.style.overflow = 'hidden';
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setModalType('error');
      setShowModal(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    clearTimers();
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setModalType(null);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  return (
    <div className="contact-container animate-view">
      
      <div className="contact-header">
        <div className="comment-text green">// contact.css — let's build something</div>
        <h1 className="contact-title">Contact</h1>
        <div className="comment-text gray">// open to work, permanent roles & good conversations</div>
      </div>

      <div className="contact-layout">
        
        <div className="contact-socials">
          <h2 className="section-title">FIND ME ON</h2>
          
          <a href="mailto:arshadmuhd50@gmail.com" className="social-card">
            <div className="social-icon-wrapper green-border">
              <Icons.Mail />
            </div>
            <div className="social-details">
              <div className="social-name green-text">EMAIL</div>
              <div className="social-link">arshadmuhd50@gmail.com</div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/muhdarshad50/" target="_blank" rel="noreferrer" className="social-card">
            <div className="social-icon-wrapper blue-border">
              <Icons.LinkedIn />
            </div>
            <div className="social-details">
              <div className="social-name blue-text">LINKEDIN</div>
              <div className="social-link">linkedin.com/in/muhdarshad50</div>
            </div>
          </a>

          <a href="https://github.com/MuhdArshadd" target="_blank" rel="noreferrer" className="social-card">
            <div className="social-icon-wrapper gray-border">
              <Icons.GitHub />
            </div>
            <div className="social-details">
              <div className="social-name gray-text">GITHUB</div>
              <div className="social-link">github.com/MuhdArshadd</div>
            </div>
          </a>
        </div>

        <div className="contact-form-section">
          <h2 className="section-title">SEND A MESSAGE</h2>
          
          <form onSubmit={handleSubmit} className="code-form" noValidate>
            <div className="form-group">
              <label className="comment-text">
                YOUR_NAME <span className="required">*</span>
              </label>
              <input 
                type="text" 
                placeholder="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label className="comment-text">
                YOUR_EMAIL <span className="required">*</span>
              </label>
              <input 
                type="email" 
                placeholder="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label className="comment-text">SUBJECT</label>
              <input 
                type="text" 
                placeholder="subject" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label className="comment-text">
                MESSAGE <span className="required">*</span>
              </label>
              <textarea 
                placeholder="'your message'" 
                rows="5" 
                required 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={!formData.name || !formData.email || !formData.message}
            >
              Send Message
            </button>
            
            <div className="comment-text footer">// Powered by Formspree</div>
          </form>
        </div>
      </div>

      {/* MODAL with Progress Bar */}
      {showModal && (
        <div 
          className={`modal-backdrop ${isClosing ? 'closing' : ''}`} 
          onClick={handleBackdropClick}
        >
          <div 
            className={`modal-content ${modalType} ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-categories">
                <span className="modal-category">
                  {modalType === 'success' ? 'TRANSMISSION SUCCESS' : 'TRANSMISSION FAILED'}
                </span>
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>

            <div className="modal-icon">
              {modalType === 'success' ? '✓' : '✕'}
            </div>
            
            <h2 className="modal-title">
              {modalType === 'success' ? 'SENT SUCCESSFULLY' : 'ERROR'}
            </h2>
            
            <p className="modal-message">
              {modalType === 'success' 
                ? "Your message has been compiled and delivered. I'll get back to you shortly!" 
                : "The system encountered an error. Please check your connection or reach out via LinkedIn."}
            </p>

            <button className="modal-btn" onClick={closeModal}>
              Return to Editor ({secondsLeft}s)
            </button>

            {/* Progress Bar */}
            <div className="modal-progress-container">
              <div 
                className="modal-progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ContactView;