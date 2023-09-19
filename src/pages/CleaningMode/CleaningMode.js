import React from 'react';
import LeftContainer from './LeftContainer';
import RightTab from './RightTab';

export default function App() {
    return (
        <div style={{ display:'flex' }}>
            <LeftContainer />
            <RightTab />
        </div>
    );
}
