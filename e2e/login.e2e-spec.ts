import { browser, by, element } from 'protractor';

describe('Recept TO-DO App', () => {
  beforeEach(() => {
    browser.get('/login');
  });

  it('should display Login', () => {
    expect(element(by.css('h1')).getText()).toEqual('Bejelentkezés');
  });

  it('should redirect to the main page after writing wrong credentails', () => {
    element(by.css('[name=username]')).sendKeys('wasd');
    element(by.css('[name=password]')).sendKeys('wasd');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('h1')).getText()).toEqual('Recept TO-DO');
  });

  it('should display my recipes button after login as user', () => {
    element(by.css('[name=username]')).sendKeys('barack');
    element(by.css('[name=password]')).sendKeys('bbb');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('button:nth-child(4)')).getText()).toEqual('Saját Receptek');
  });

  it('should redirect to main page after logout as user', () => {
    element(by.css('button:last-child')).click();

    expect(element(by.css('h1')).getText()).toEqual('Recept TO-DO');
  });

  it('should display my recipes button after login as admin', () => {
    element(by.css('[name=username]')).sendKeys('alma');
    element(by.css('[name=password]')).sendKeys('aaa');
    element(by.css('[type=submit]')).click();

    expect(element(by.css('button:nth-child(6)')).getText()).toEqual('Felhasználók');
  });

  it('should redirect to main page after logout as admin', () => {
    element(by.css('button:last-child')).click();

    expect(element(by.css('h1')).getText()).toEqual('Recept TO-DO');
  });
});