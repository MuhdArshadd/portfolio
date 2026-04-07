import React from 'react';
import { Icons } from '../icons/Icons';

export const ExtensionView = () => (
    <div style={{ padding: '30px', maxWidth: '900px', color: '#cccccc', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', gap: '25px', marginBottom: '30px' }}>
            <div style={{ width: '110px', height: '110px', background: 'linear-gradient(135deg, #007acc, #004d80)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                <div style={{ transform: 'scale(2.5)' }}><Icons.Bot /></div>
            </div>
            <div>
                <h1 style={{ margin: '0 0 5px 0', color: '#ffffff', fontSize: '28px', fontWeight: '600' }}>Cad Bot</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#858585', fontSize: '13px', marginBottom: '15px' }}>
                    <span style={{ color: '#4fc1ff' }}>Aahana Bobade</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⬇ 14,204</span>
                    <span style={{ color: '#cca700' }}>★★★★★ (5)</span>
                    <span style={{ color: '#c586c0' }}>♥ Sponsor</span>
                </div>
                <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>Open/Run/Debug Portfolio Questions by leveraging the Activity Bar, Chat logic, and much more.</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 12px', borderRadius: '3px', cursor: 'not-allowed' }}>Disable ⌄</button>
                    <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 12px', borderRadius: '3px', cursor: 'not-allowed' }}>Uninstall ⌄</button>
                    <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer' }}>⚙️</button>
                </div>
            </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '25px', borderBottom: '1px solid #3c3c3c', marginBottom: '25px', textTransform: 'uppercase', fontSize: '12px' }}>
            <div style={{ borderBottom: '2px solid #4fc1ff', color: '#ffffff', paddingBottom: '8px', cursor: 'pointer' }}>Details</div>
            <div style={{ color: '#858585', paddingBottom: '8px', cursor: 'pointer' }}>Features</div>
            <div style={{ color: '#858585', paddingBottom: '8px', cursor: 'pointer' }}>Changelog</div>
        </div>

        {/* Markdown Body */}
        <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
            <h2 style={{ borderBottom: '1px solid #3c3c3c', paddingBottom: '8px', color: '#ffffff', fontWeight: 'normal', fontSize: '22px' }}>Cad Bot</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '15px' }}>
                <span style={{ background: '#333333', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>version 1.2.5</span>
                <span style={{ background: '#007acc', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>installed globally</span>
            </div>
            <p>A conversational AI assistant natively integrated into the portfolio environment. Navigate the codebase, learn about tech stacks, and discover Easter eggs by simply asking Cad Bot!</p>
            <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Features</h3>
            <p>Codelens will be added above each <code>Feature:</code>, <code>Scenario:</code> and <code>Scenario Outline:</code> ... just kidding. Here is what I actually do:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>Context-aware portfolio guidance.</li>
                <li>Instant answers about tech stacks (React, Test Automation, Node.js).</li>
                <li>Pre-configured shortcut buttons for quick learning.</li>
                <li>Built-in humor and self-awareness ("vibe coded").</li>
            </ul>
            <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Sponsors</h3>
            <p style={{ color: '#858585' }}>This project is proudly sponsored by coffee, late-night debugging sessions, and the burning desire to finally land a permanent role!</p>
        </div>
    </div>
);