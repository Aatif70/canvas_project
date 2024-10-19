// src/components/Canvas/Canvas.js
import React from 'react';
import DraggableComponent from './DraggableComponent';
import CodeEditor from './CodeEditor';

const Canvas = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div id="canvas" style={{ flex: 1, border: '1px solid #ccc', height: '500px' }}>
                <DraggableComponent />
                {/* Other components can be added here */}
            </div>
            <CodeEditor />
        </div>
    );
};

export default Canvas;

