import { AppPage } from './app.po';

describe('Recept TO-DO App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title of app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Recept TO-DO');
  });
});
