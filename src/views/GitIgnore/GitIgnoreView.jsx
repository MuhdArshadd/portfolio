import React from 'react';
import { CodeLine } from '../../components/ui/CodeLine';
import './GitIgnoreView.css';

export const GitIgnoreView = () => {
    return (
        <div className="gitignore-container animate-view">
            
            <CodeLine num="1" isHeading># dependencies</CodeLine>
            <CodeLine num="2">/node_modules</CodeLine>
            <CodeLine num="3">/.pnp</CodeLine>
            <CodeLine num="4">.pnp.js</CodeLine>
            
            <CodeLine num="5"></CodeLine> {/* Empty line */}

            <CodeLine num="6" isHeading># testing</CodeLine>
            <CodeLine num="7">/coverage</CodeLine>

            <CodeLine num="8"></CodeLine>

            <CodeLine num="9" isHeading># production</CodeLine>
            <CodeLine num="10">/build</CodeLine>
            <CodeLine num="11">/dist</CodeLine>

            <CodeLine num="12"></CodeLine>

            <CodeLine num="13" isHeading># environment variables</CodeLine>
            <CodeLine num="14" isHeading># yes i dont forget about this</CodeLine>
            <CodeLine num="15">
                .env <span className="gitignore-comment"></span>
            </CodeLine>
            <CodeLine num="16">.env.local</CodeLine>
            <CodeLine num="17">.env.development.local</CodeLine>
            <CodeLine num="18">.env.test.local</CodeLine>
            <CodeLine num="19">.env.production.local</CodeLine>
        </div>
    );
};