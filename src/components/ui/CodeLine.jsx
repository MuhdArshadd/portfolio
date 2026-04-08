import React from 'react';
import './CodeLine.css';

export const CodeLine = ({ num, children, isHeading }) => (
    <div className="code-line">
        <span className="code-line-number">{num}</span>
        <span className={`code-line-content ${isHeading ? 'heading' : ''}`}>
            {children}
        </span>
    </div>
);