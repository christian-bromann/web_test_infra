const COOKIE_ACCEPT_BUTTON_FRAGMENT = 'I accept';
const SUBSCRIPTION_SUCCESS_MESSAGE = 'You are subscribed!';

export const homePage = {
  acceptCookies: () => cy.get('body').then(($body) => {
    if ($body.text().includes(COOKIE_ACCEPT_BUTTON_FRAGMENT)) {
      cy.get(`button:contains(${COOKIE_ACCEPT_BUTTON_FRAGMENT})`).click();
    }
  }),
  clickFooterOption: (label: string) => cy.get(`footer a:contains(${label})`).click(),
  subscribeToNewsletterAs: (email: string) => {
    cy.get('footer form input[type=email]').type(email);
    cy.get('footer form button[type=submit]').click();
  },
  getSubscriptionSuccessMessage: () => cy.get(`span:contains(${SUBSCRIPTION_SUCCESS_MESSAGE})`, { timeout: 30000 }),
};
