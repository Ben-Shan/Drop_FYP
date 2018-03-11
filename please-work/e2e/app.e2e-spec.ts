import { PleaseWorkPage } from './app.po';

describe('please-work App', function() {
  let page: PleaseWorkPage;

  beforeEach(() => {
    page = new PleaseWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
