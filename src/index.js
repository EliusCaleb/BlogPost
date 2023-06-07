import React from 'react';
import ReactDOM from 'react-dom/client';
import { SidebarProvider } from './context/sidebarContext';
import { BlogsProvider } from './context/blogsContext';
import { UserProvider } from './context/usersContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <UserProvider>
      <App />
      </UserProvider>
      <BlogsProvider>
       
      </BlogsProvider>
   
    </SidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
