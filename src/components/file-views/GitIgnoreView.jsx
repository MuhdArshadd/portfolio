import React from 'react';

// A tiny helper component just for this file to handle the number gutter!
const Line = ({ num, children, isHeading }) => (
    <div style={{ display: 'flex', gap: '25px', padding: '0 20px' }}>
        <span style={{ color: '#858585', minWidth: '25px', textAlign: 'right', userSelect: 'none' }}>
            {num}
        </span>
        <span style={{ color: isHeading ? '#ce9178' : 'inherit', flex: 1 }}>
            {children}
        </span>
    </div>
);

export const GitIgnoreView = () => {
    return (
        <div className="animate-view" style={{ padding: '20px 0', fontFamily: 'Consolas, monospace', color: '#cccccc', fontSize: '14px', lineHeight: '1.6' }}>
            
            <Line num="1" isHeading># dependencies</Line>
            <Line num="2">/node_modules</Line>
            <Line num="3">/.pnp</Line>
            <Line num="4">.pnp.js</Line>
            
            <Line num="5"></Line> {/* Empty line */}

            <Line num="6" isHeading># testing</Line>
            <Line num="7">/coverage</Line>

            <Line num="8"></Line>

            <Line num="9" isHeading># production</Line>
            <Line num="10">/build</Line>
            <Line num="11">/dist</Line>

            <Line num="12"></Line>

            <Line num="13" isHeading># environment variables</Line>
            <Line num="14" isHeading># yes i dont forget about this</Line>
            <Line num="15">
                .env <span style={{ color: '#6a9955', fontStyle: 'italic', marginLeft: '15px' }}>
                </span>
            </Line>
            <Line num="16">.env.local</Line>
            <Line num="17">.env.development.local</Line>
            <Line num="18">.env.test.local</Line>
            <Line num="19">.env.production.local</Line>
        </div>
    );
};