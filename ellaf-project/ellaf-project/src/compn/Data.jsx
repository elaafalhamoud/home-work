import React from 'react';
import './Data.css';

function Data({ items }) {
  return (
    <div>
      { }
      {items && items.length > 0 ? (
        <ul >
          {}
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>لايوجد عناصر في القائمة</p>
      )}
    </div>
  );
}

export default Data;
