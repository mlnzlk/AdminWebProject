import React from 'react';

export default function CleaningMode() {
    return (
        <div style={{
            display: 'flex', // flexbox를 사용
        }}>
            <div style={{width: '50%', display: 'flex', flexDirection: 'column'}}>
                <button>Button 1</button>
                <div style={{width: '100px', height: '100px', backgroundColor: '#eee'}}>Box</div>
                <button>Button 2</button>
                <button>Button 3</button>
            </div>
            <div style={{width: '50%'}}>
                ddd
            </div>
        </div>
      );
  }