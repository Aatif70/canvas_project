// src/components/Canvas/CodeEditor.js
import React from 'react';

const CodeEditor = () => {
    return (
        <div style={{ flex: 1, border: '1px solid #ccc', height: '500px', padding: '10px' }}>
            <h3>Generated Code</h3>
            <pre>
                {/* Display generated HTML, CSS, and JS code here */}
                <code>{`<h1>Hello World</h1>`}</code>
            </pre>
        </div>
    );
};

export default CodeEditor;

