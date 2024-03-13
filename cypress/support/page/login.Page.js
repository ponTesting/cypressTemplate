class Login {
  get = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    submitButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };
  enterUsername(type) {
    type && this.get.usernameInput().type(type);
  }
  enterPassword(type) {
    type && this.get.passwordInput().type(type);
  }
  submitLogin() {
    this.get.submitButton().click();
  }
}
export const login = new Login();
