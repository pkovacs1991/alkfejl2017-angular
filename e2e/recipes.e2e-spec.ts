import { browser, by, element } from 'protractor';

describe('Recept TO-DO App', () => {
  beforeEach(() => {
    browser.get('/recipe/all');
  });

  it('should display all recipe page', () => {
    expect(element(by.css('h1')).getText()).toEqual('Receptek');
  });

  it('should display recipe table', () => {
    expect(element(by.css('thead>tr>th:first-child')).getText()).toEqual('#');
  });

  it('should filter the recipe table by clicking on a category', () => {
    element(by.css('mat-button-toggle:nth-child(3)')).click();

    expect(element(by.css('tbody>tr:first-child>td:nth-child(4)')).getText()).toEqual('PIZZA');
  });
});