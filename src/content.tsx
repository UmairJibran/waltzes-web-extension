import React from 'react';
import { createRoot } from 'react-dom/client';
import { JobApplicationPopup } from './components/JobApplicationPopup';
import { useAuthStore } from './store/auth';
import './styles/tailwind.css';

// Get context information from window object
const waltzesContext = window.waltzesContext || {
  mode: 'page_scan',
  selectedText: null,
};
const { mode, selectedText } = waltzesContext;

// Create container for our app
const container = document.createElement('div');
container.id = 'job-application-extension-root';
document.body.appendChild(container);

// Create root and render app
const root = createRoot(container);

// Function to remove the popup
const removePopup = () => {
  root.unmount();
  container.remove();
};

// Handle cleanup when extension is clicked again
const cleanup = () => {
  removePopup();
};

useAuthStore
  .getState()
  .initializeFromStorage()
  .then(() => {
    root.render(
      <React.StrictMode>
        <JobApplicationPopup
          onClose={removePopup}
          mode={mode}
          selectedText={selectedText}
        />
      </React.StrictMode>
    );
  });
