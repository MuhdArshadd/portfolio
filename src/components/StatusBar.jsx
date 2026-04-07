import React from 'react';
import { Icons } from './Icons';

export const StatusBar = () => {
    return (
        <div className="status-bar">
            <div className="status-left">
                <div className="status-item"><Icons.Branch /><span>main*</span></div>
                <div className="status-item"><Icons.Error /><span>0</span><Icons.Warning /><span>0</span></div>
            </div>
            <div className="status-right">
                <div className="status-item"><span>Ln 12, Col 18</span></div>
                <div className="status-item"><span>UTF-8</span></div>
                <div className="status-item"><span>JavaScript JSX</span></div>
                <div className="status-item"><Icons.Check /><span>Prettier</span></div>
            </div>
        </div>
    );
};