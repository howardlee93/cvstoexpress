import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import App from './App';



const container = document.getElementById('home');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// render(
//   <div>
//     <h1>Hi there</h1>
//     <App/>
//   </div>,
//   document.getElementById("home")
// );