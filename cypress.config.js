import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import pkg from '@badeball/cypress-cucumber-preprocessor'
const { addCucumberPreprocessorPlugin } = pkg
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild.js'

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
	await addCucumberPreprocessorPlugin(on, config)
	on(
		'file:preprocessor',
		createBundler({
			plugins: [createEsbuildPlugin(config)],
		})
	)

	// Make sure to return the config object as it might have been modified by the plugin.
	return config
}

export default defineConfig({
	// 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
	viewportWidth: 1280,
	viewportHeight: 720,
	// Whether Cypress will watch and restart tests on test file changes:
	watchForFileChanges: false,
	// En Caso de hacer testing en SUT con seguridad web:
	chromeWebSecurity: false,
	// multi-reporters: one report.xml + mochawesome.json per file.
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'jsconfig.json',
	},
	// Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
	retries: 0,
	// Whether Cypress will record a video of the test run when running on headless:
	video: false,
	// E2E Testing runner
	e2e: {
		// Glob pattern to determine what test files to load:
		specPattern: ['cypress/e2e/cucumber-test/Gherkin/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		// Use Cypress plugins:
		setupNodeEvents,
		//baseUrl: "example.com"
	},
	env: {
		baseUrl:{
			'suageLabs':"https://www.saucedemo.com/",
			'toolsQA':"https://demoqa.com/"
		}
	},
})

