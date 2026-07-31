# API Framework Generator Skill

## Overview

API Framework Generator is an AI Skill that generates a Playwright API automation testing framework from a natural language prompt.

The generated project follows a reusable structure and provides a ready-to-run API automation framework.

---

## Features

- Generate Playwright API Framework (JavaScript)
- Detect GET and POST API operations
- Generate reusable project structure
- Generate Playwright configuration
- Generate sample API tests
- Generate environment template
- Generate project from reusable templates

---

## Current Implementation

- ✅ Playwright (JavaScript)

---

## Planned Support

- Playwright (TypeScript)
- Rest Assured (Java)
- Pytest (Python)

---

## Example Prompt

```
Create a production-ready Playwright API framework with GET and POST automation.
```

---

## Generated Project

The generated framework contains:

```
generated-framework/
│
├── package.json
├── playwright.config.js
├── tests/
│   ├── getUsers.spec.js
│   └── createPost.spec.js
├── helpers/
├── config/
└── .env.example
```

---

## Verification

The generated framework was verified by executing:

```bash
npm install
npx playwright install
npx playwright test
```

Result:

```
Running 2 tests using 2 workers

✓ POST Create User
✓ GET Users API

2 passed
```

---

## Project Goal

Reduce the time required to create a production-ready API automation framework by automatically generating the project structure and starter files.

---

## Author

Rahama Trisha
