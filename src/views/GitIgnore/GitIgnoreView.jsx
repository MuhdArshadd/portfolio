import React from 'react';
import { CodeLine } from '../../components/ui/CodeLine';
import './GitIgnoreView.css';

export const GitIgnoreView = () => {
    return (
        <div className="gitignore-container animate-view">
            
            <CodeLine num="1" isHeading># dependencies</CodeLine>
            <CodeLine num="2">/node_modules</CodeLine>
            <CodeLine num="3"></CodeLine> 

            <CodeLine num="4" isHeading># testing</CodeLine>
            <CodeLine num="5">/coverage</CodeLine>
            <CodeLine num="6"></CodeLine>

            <CodeLine num="7" isHeading># production</CodeLine>
            <CodeLine num="8">/build</CodeLine>
            <CodeLine num="9">/dist</CodeLine>
            <CodeLine num="10"></CodeLine>

            <CodeLine num="11" isHeading># environment variables</CodeLine>
            <CodeLine num="13">.env</CodeLine>
            <CodeLine num="14">.env.local</CodeLine>
            <CodeLine num="15"></CodeLine>

            <CodeLine num="16" isHeading># OS generated files</CodeLine>
            <CodeLine num="17">.DS_Store</CodeLine>
            <CodeLine num="18">Thumbs.db</CodeLine>
            <CodeLine num="19"></CodeLine>

            <CodeLine num="20" isHeading># editor settings</CodeLine>
            <CodeLine num="21">.vscode/*</CodeLine>
            <CodeLine num="22">!.vscode/settings.json</CodeLine>

        </div>
    );
};