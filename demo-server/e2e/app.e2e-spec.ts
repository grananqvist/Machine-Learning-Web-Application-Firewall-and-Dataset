import { ServerPage } from './app.po';

describe('server App', () => {
  let page: ServerPage;

  beforeEach(() => {
    page = new ServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
