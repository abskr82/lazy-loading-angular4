import { Lazy1Page } from './app.po';

describe('lazy1 App', () => {
  let page: Lazy1Page;

  beforeEach(() => {
    page = new Lazy1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
