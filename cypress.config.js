const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // URL des Servers, auf dem Ihre Frontend-Anwendung läuft
    baseUrl: 'http://localhost:8080',

    // Pfad zu den Integrationstestdateien
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',

    // Weitere E2E-spezifische Konfigurationen können hier hinzugefügt werden, falls erforderlich
  },

  // Hier können Sie globale oder gemeinsame Konfigurationen hinzufügen, die sowohl für Komponententests als auch für E2E-Tests gelten
  // Beispiel:
  // viewportWidth: 1280,
  // viewportHeight: 720,

  // Andere globale oder gemeinsame Konfigurationen...
});
