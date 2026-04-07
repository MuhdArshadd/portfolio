import React from 'react';
import { portfolioData } from '../../data/index';

export const HomeView = () => (
    <div className="portfolio-section">
        <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">// Welcome to my portfolio</span></span></div>
        <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">3</span><span className="line-content"><span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;</span></div>
        <div className="code-line"><span className="line-num">4</span><span className="line-content"><span className="keyword">import</span> {'{ Passion, Skills }'} <span className="keyword">from</span> <span className="string">'./life'</span>;</span></div>
        <div className="code-line"><span className="line-num">5</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">6</span><span className="line-content"><span className="keyword">const</span> <span className="function">Portfolio</span> = () =&gt; {'{'}</span></div>
        <div className="code-line"><span className="line-num">7</span><span className="line-content">  <span className="keyword">const</span> developer = {'{'}</span></div>
        <div className="code-line"><span className="line-num">8</span><span className="line-content">    name: <span className="string">"{portfolioData.name}"</span>,</span></div>
        <div className="code-line"><span className="line-num">9</span><span className="line-content">    role: <span className="string">"{portfolioData.role}"</span>,</span></div>
        <div className="code-line"><span className="line-num">10</span><span className="line-content">    passion: <span className="string">"Building amazing web experiences"</span>,</span></div>
        <div className="code-line"><span className="line-num">11</span><span className="line-content">    available: <span className="keyword">true</span></span></div>
        <div className="code-line"><span className="line-num">12</span><span className="line-content">  {'}'};</span></div>
        <div className="code-line"><span className="line-num">13</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">14</span><span className="line-content">  <span className="keyword">return</span> (</span></div>
        <div className="code-line"><span className="line-num">15</span><span className="line-content">    &lt;<span className="tag">div</span> className=<span className="string">"welcome"</span>&gt;</span></div>
        <div className="code-line"><span className="line-num">16</span><span className="line-content">      &lt;<span className="tag">h1</span>&gt;Hello, I'm {portfolioData.name}&lt;/<span className="tag">h1</span>&gt;</span></div>
        <div className="code-line"><span className="line-num">17</span><span className="line-content">      &lt;<span className="tag">p</span>&gt;{portfolioData.role}&lt;/<span className="tag">p</span>&gt;</span></div>
        <div className="code-line"><span className="line-num">18</span><span className="line-content">      &lt;<span className="tag">Status</span> available={'{'}developer.available{'}'} /&gt;</span></div>
        <div className="code-line"><span className="line-num">19</span><span className="line-content">    &lt;/<span className="tag">div</span>&gt;</span></div>
        <div className="code-line"><span className="line-num">20</span><span className="line-content">  );</span></div>
        <div className="code-line"><span className="line-num">21</span><span className="line-content">{'}'};</span></div>
        <div className="code-line"><span className="line-num">22</span><span className="line-content"></span></div>
        <div className="code-line"><span className="line-num">23</span><span className="line-content"><span className="keyword">export default</span> Portfolio;</span></div>
    </div>
);