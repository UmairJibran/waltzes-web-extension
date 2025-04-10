# GitHub Copilot Instructions for Waltzes Web Extension

Welcome, Copilot. You're contributing to **Waltzes**, a Manifest V3 browser extension built with **React, TypeScript, Tailwind CSS**, and Webpack. This extension helps job seekers quickly generate personalized resumes and cover letters.

Please follow the instructions below when suggesting code.

---

## 🧠 Project Purpose

- Waltzes is a privacy-respecting extension aimed at job seekers.
- It allows users to generate a resume, cover letter, or both.
- Users can interact via:
  - The **extension popup** (opened by clicking the extension icon)
  - A **context menu**, especially on sites like Glassdoor or Indeed where URLs don’t change dynamically.

## ⚙️ Tech Stack

- React (function-based components only)
- TypeScript (strict mode, no `any`, use clear interfaces)
- Tailwind CSS for styling (no custom CSS unless essential)
- Webpack for bundling
- MV3-compatible extension architecture (background, content, popup)

## 🧱 Project Structure

- `src/components/` – All UI components
- `src/api/` – API-related utilities (auth, job parsing)
- `src/utils/` – Shared logic (background script, constants, error handlers)
- `src/store/` – Lightweight state management
- `src/types/` – TypeScript type definitions
- `src/styles/tailwind.css` – Global styling
- `src/content.tsx` – Content script entry point
- `src/manifest-info.ts` – MV3 manifest helper
- `webpack.config.js` – Extension bundler

---

## ✍️ Coding Guidelines

- **Use TypeScript.** Avoid `any` unless absolutely unavoidable.
- **Follow Google’s TypeScript Style Guide.**
- Use **docstrings** (JSDoc or Google-style) for every function exported from a module.
- Follow a **fail-fast** philosophy: validate inputs early, throw clearly.
- Keep components and functions **small, modular, and pure** when possible.
- Use **functional components only**. No class-based components.
- Use **named exports** unless there's a strong reason to default-export.
- Avoid unnecessary abstraction. Be pragmatic and readable.
- Tailwind is preferred over inline styles or CSS files.
- Avoid silent errors. Always log or throw with context.
- If dealing with external APIs (backend or 3rd-party), always account for error handling and user consent.
- Assume the user is not technical. **Clear UX > clever code**.

---

## 🔒 Security & Privacy

- Treat user job descriptions as sensitive data.
- Never store or transmit user input without purpose and explicit consent.
- Avoid third-party scripts or analytics unless privacy-reviewed.
- For MV3, use `chrome.storage.sync` or `chrome.runtime.sendMessage` responsibly.
- Escape unsafe DOM content in content scripts.

---

## 🧪 Testing & Debugging

- Prefer mockable, testable utilities over tightly coupled logic.
- Suggestions should avoid test frameworks unless explicitly requested.
- Use meaningful logging during development, but clean up before production.

---

## 🧠 When in Doubt

- Make it readable first, performant second.
- Add docstrings to help the team understand.
- Respect the user's time and privacy.
- Simplicity is a feature.

---

Thanks, Copilot.
Let’s make job hunting less painful.
