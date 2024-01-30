// example_test.cy.js

describe('Meine erste Test-Suite', () => {
  it('besucht die Startseite', () => {
    cy.visit('http://localhost:8080'); // Ersetzen Sie dies durch die URL Ihrer Anwendung
    cy.contains('Willkommen'); // Ersetzen Sie 'Willkommen' durch einen Text, der auf Ihrer Seite zu finden ist
  });
});
