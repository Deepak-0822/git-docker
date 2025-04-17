Slide 1: Title
Title: Automating JavaScript Linting using Docker-based GitHub Actions
Subtitle: Custom CI Workflow with ESLint
Presenter: [Your Name / Team]

Slide 2: Agenda
What is ESLint & Why Automate?

GitHub Actions Overview

Custom Docker-based GitHub Action

Folder Structure & Files

Demo Error & Fix (npm ci issue)

Real-world Use Case

Summary & Q&A

Slide 3: What is ESLint & Why Automate?
ESLint is a linting tool to identify and fix problems in JavaScript code.

Why Automate with GitHub Actions?

Ensures consistent code quality in PRs.

Prevents bugs & bad code from merging.

Fast feedback loop via CI.

Slide 4: GitHub Actions – Overview
GitHub Actions is a CI/CD platform for automating workflows.

Can run jobs on pushes, PRs, and schedules.

Supports Docker-based actions for encapsulated tools like ESLint.

Slide 5: How It Works
Developer pushes code to GitHub.

GitHub Action triggers on push or PR.

Action runs in Docker:

Installs dependencies.

Executes npx eslint .

Results shown in GitHub Checks.

Slide 6: Folder & Action Files
bash
Copy code
.github/
│
├── workflows/eslint.yml         → Workflow trigger file
└── actions/eslint-action/       
    ├── Dockerfile               → Node + shell setup
    ├── entrypoint.sh            → Installs & runs eslint
    └── action.yml               → Metadata file
Slide 7: Real Use Case
Scenario: A frontend team managing a React or Node.js codebase.

Problem: Developers forget to lint or push non-standard code.

Solution:

This GitHub Action runs ESLint automatically on PRs.

Catches issues early before merge.

No dependency on local setup.

Slide 8: Error Faced & Fix
Error: npm ci failed due to missing package-lock.json
Fix: Replaced with npm install in entrypoint.sh.

Slide 9: Summary
Automating ESLint helps maintain code quality.

GitHub Actions make CI simple and native to GitHub.

Docker-based approach ensures environment consistency.# git-docker
