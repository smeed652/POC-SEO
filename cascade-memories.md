# 🤖 Cascade Memory Log

This file contains all AI assistant (Cascade) persistent memories and workflow agreements for this project. Update or review as needed.

---

## Project Conventions & Defaults

- All new coding conventions, naming standards, and project defaults (e.g., camelCase for variables, functions, and files) must be documented in `conventions.md` at the project root.
- Cascade will always apply and update these standards as part of its normal process, and remind the user to update or clarify them as needed.

## Build Time Tracking

- All major tasks and project milestones are logged in `build-time-log.md`.
- Cascade will update this log after each major task or commit.

## File Size & Structure

- Keep files under 400 lines. If a file grows larger, split it into smaller functions or classes.
- Only add child classes for specific, exceptional functionality (e.g., restaurant-specific logic).

## Project Organization

- Do not nest projects inside other projects.
- Always ask before creating new directories.
- Place files in the correct directory according to their purpose.
- Abstract new functionality to be reusable and component-based.

## Testing & Debugging

- After refactoring, always run tests to ensure the code works.
- If a unit is failing, run it in isolation for faster debugging.
- When fixing issues, review the entire code to address all related problems at once.

---

_Last exported: 2025-04-24_
