import { StrictMode } from "react";

// createroot is used to render the UI
import { createRoot } from "react-dom/client";

// imports the index.css file where you can define global styles
import "./index.css";

// imports App function from app.tsx which usually holds the main logic
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// createRoot is being the DOM element that is Identified by 'root'
// which is an element in index.html where this will latch on
// the ! at the end signifies that you are confident that the element with ID root exists and wont be null or undefined
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* this is commenting in JSX */}
    {/* wrapping the entire app in browserRouter is necessary to be able to use <Link> and <Route> in all the sub files */}
    <BrowserRouter>
      {/* below, even tho App() is a funciton, it cannot directly be called
    because it isnt made of pure logic, therefore doing <App/> makes an instance
    of it */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
