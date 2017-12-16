import { browser, by, element } from 'protractor';

describe('Recept TO-DO App', () => {
  beforeEach(() => {
    browser.get('/register');
  });

  it('should display register', () => {
    expect(element(by.css('h1')).getText()).toEqual('Regisztráció');
  });

  it('should redirect to the login page after registration', () => {
    element(by.css('[name=username]')).sendKeys('qwertz');
    element(by.css('[name=password]')).sendKeys('qwertz');
    element(by.css('[name=email]')).sendKeys('qwertz@qwertz.com');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('h1')).getText()).toEqual('Bejelentkezés');
  });

  it('should login with the new account', () => {
    element(by.css('[name=username]')).sendKeys('qwertz');
    element(by.css('[name=password]')).sendKeys('qwertz');
    element(by.css('[name=email]')).sendKeys('qwertz@qwertz.com');
    element(by.css('[type=submit]')).click();

    element(by.css('[name=username]')).sendKeys('qwertz');
    element(by.css('[name=password]')).sendKeys('qwertz');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('button:last-child')).getText()).toEqual('Kijelentkezés');
  });
});