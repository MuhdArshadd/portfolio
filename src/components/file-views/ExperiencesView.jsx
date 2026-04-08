import React from 'react';

export const ExperiencesView = () => {
    return (
        <div className="animate-view" style={{ padding: '40px', fontFamily: 'Consolas, monospace', color: '#cccccc', fontSize: '14px', lineHeight: '1.6' }}>
            <div style={{ color: '#6a9955', fontStyle: 'italic', marginBottom: '20px' }}>
                // experiences.json
                <br />
                // My professional journey so far...
            </div>

            <div><span style={{ color: '#ffd700' }}>[</span></div>
            
            {/* Experience 1 */}
            <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: '#c586c0' }}>{'{'}</span>
                <div style={{ paddingLeft: '20px' }}>
                    <span style={{ color: '#9cdcfe' }}>"role"</span>: <span style={{ color: '#ce9178' }}>"QA Automation Intern"</span>,
                    <br />
                    <span style={{ color: '#9cdcfe' }}>"company"</span>: <span style={{ color: '#ce9178' }}>"Teleport"</span>,
                    <br />
                    <span style={{ color: '#9cdcfe' }}>"duration"</span>: <span style={{ color: '#ce9178' }}>"Current - April 2026"</span>,
                    <br />
                    <span style={{ color: '#9cdcfe' }}>"stack"</span>: <span style={{ color: '#ffd700' }}>[</span><span style={{ color: '#ce9178' }}>"Karate"</span>, <span style={{ color: '#ce9178' }}>"Java"</span>, <span style={{ color: '#ce9178' }}>"STLC"</span><span style={{ color: '#ffd700' }}>]</span>,
                    <br />
                    <span style={{ color: '#9cdcfe' }}>"highlights"</span>: <span style={{ color: '#ce9178' }}>"Automating logistics business flows and ensuring zero-defect deployments."</span>
                </div>
                <span style={{ color: '#c586c0' }}>{'}'}</span>,
            </div>

            {/* You can copy/paste that block above to add older experiences here! */}

            <div><span style={{ color: '#ffd700' }}>]</span></div>
        </div>
    );
};