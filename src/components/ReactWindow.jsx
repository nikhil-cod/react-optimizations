import React from 'react';
import { FixedSizeList as List } from 'react-window';

const ReactWindow = () => {
  // Generate a large dataset for demonstration
  const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  // Render each item in the list
  const renderRow = ({ index, style }) => (
    <div style={style}>
      {data[index]}
    </div>
  );

  return (
    <div>
      <h1>React Window Example</h1>
      <List
        height={400} // Height of the list container
        itemCount={data.length} // Total number of items
        itemSize={35} // Height of each item
        width={300} // Width of the list container
      >
        {renderRow}
      </List>
    </div>
  );
};

export default ReactWindow;
