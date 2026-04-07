import React from 'react';
import {portfolioData} from '../../data/index'

export const ContactView = () => (
    <div className="portfolio-section">
        <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">/* Contact Styles */</span></span></div>
        <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">3</span><span className="line-content"><span className="attr">.contact</span> {'{'}</span></div>
        <div className="code-line"><span className="line-num">4</span><span className="line-content">  <span className="attr">email</span>: <span className="string">"{portfolioData.contact.email}"</span>;</span></div>
        <div className="code-line"><span className="line-num">5</span><span className="line-content">  <span className="attr">github</span>: <span className="string">"{portfolioData.contact.github}"</span>;</span></div>
        <div className="code-line"><span className="line-num">6</span><span className="line-content">  <span className="attr">linkedin</span>: <span className="string">"{portfolioData.contact.linkedin}"</span>;</span></div>
        <div className="code-line"><span className="line-num">7</span><span className="line-content">  <span className="attr">status</span>: <span className="keyword">available</span>;</span></div>
        <div className="code-line"><span className="line-num">8</span><span className="line-content">{'}'}</span></div>
        <div className="code-line"><span className="line-num">9</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">10</span><span className="line-content"><span className="comment">/* Let's connect! */</span></span></div>
        <div className="code-line"><span className="line-num">11</span><span className="line-content"><span className="attr">.cta</span>:<span className="function">hover</span> {'{'}</span></div>
        <div className="code-line"><span className="line-num">12</span><span className="line-content">  <span className="attr">transform</span>: <span className="function">scale</span>(<span className="number">1.1</span>);</span></div>
        <div className="code-line"><span className="line-num">13</span><span className="line-content">  <span className="attr">transition</span>: <span className="keyword">all</span> <span className="number">0.3s</span> <span className="function">ease</span>;</span></div>
        <div className="code-line"><span className="line-num">14</span><span className="line-content">{'}'}</span></div>
    </div>
);