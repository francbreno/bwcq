import { BwcqPage } from './app.po';

describe('bwcq App', function() {
  let page: BwcqPage;

  beforeEach(() => {
    page = new BwcqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
