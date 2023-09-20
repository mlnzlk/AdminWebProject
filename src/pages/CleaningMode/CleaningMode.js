import React from 'react';
import LeftContainer from './LeftContainer';

import { TabLayout, TabMenu } from './TabLayout';

export default function App() {
    return (
        <div style={{ display:'flex' }}>
            <LeftContainer />
            <TabLayout />
            
        </div>
    );
}
