import * as React from 'react';
import "./styles.css";

export default function App1({ onChange }) {
  return (
    <div className="MicroApp">
      <h1>Micro App 1</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}
