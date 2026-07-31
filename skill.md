---
name: API Framework Generator
description: Generates a complete API automation testing framework based on user requirements.
version: 1.0
author: Rahama Trisha
---

# API Framework Generator

## Purpose

This skill generates a production-ready API automation framework based on the user's requirements.

## Instructions

When a user requests an API framework:

1. Ask which framework they want.
   - Playwright (JavaScript)
   - Playwright (TypeScript)
   - Rest Assured (Java)
   - Pytest (Python)

2. Ask for the Base URL.

3. Ask for the authentication type.
   - Bearer Token
   - Basic Auth
   - API Key
   - OAuth 2.0

4. Ask for the reporting tool.
   - HTML
   - Allure

5. Generate a complete API automation framework.

## The generated project must include

- Project folder structure
- Configuration files
- Environment configuration
- Authentication helper
- API client
- Sample API tests
- Utility classes
- README
- .gitignore

## If Playwright is selected, generate

- package.json
- playwright.config.js
- tests/
- utils/
- config/
- helpers/
- fixtures/
- .env.example
- README.md

## Coding Rules

- Follow best practices.
- Write reusable code.
- Keep the folder structure clean.
- Avoid duplicate code.
- Add comments where useful.
- Generate code that is ready to run.

## Goal

Generate a complete, production-ready API automation framework with minimal manual changes.
---

# Framework Generation Rules

When the user requests an API framework, always generate a complete production-ready project.

For Playwright, generate:

```
project/
├── package.json
├── playwright.config.js
├── .env.example
├── tests/
│   ├── getUsers.spec.js
│   └── createPost.spec.js
├── helpers/
├── config/
└── README.md
```

The generated GET test should:

- Use Playwright APIRequestContext
- Validate HTTP 200 status
- Validate the response body

The generated POST test should:

- Use Playwright APIRequestContext
- Send sample JSON data
- Validate HTTP 201 status
- Validate the response body

Always generate clean, reusable, and production-ready code following Playwright best practices.