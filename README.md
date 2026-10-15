# PW Appium Framework

This project is a scalable Playwright + Appium automation framework for mobile web testing.

## Structure

- `src/config` - Appium capability definitions
- `src/pages` - Page Object Model classes for the web app
- `src/tests` - Automation test cases
- `src/utils` - Lifecycle utilities and shared helpers
- `playwright.config.ts` - Playwright suite configuration
- `allure-results` - Generated report artifacts
- `allure-report` - Human-readable HTML report output

## Prerequisites

- Node.js 18+
- Android SDK / emulator or iOS simulator
- Appium server
- Playwright browsers

## Start Appium server

```bash
npm run appium:start
```

## Run tests

```bash
npx playwright test
```

## Run Appium-enabled tests

```bash
set RUN_APPIUM=true
npx playwright test --project=android-chrome
```

## Generate Allure HTML report

```bash
npx playwright test --reporter=line,allure-playwright
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

## Example flow

The sample test opens the SauceDemo web app, logs in, verifies the product page, adds an item to cart, and captures screenshots.
