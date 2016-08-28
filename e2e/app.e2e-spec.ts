import { EmojiSearchPage } from './app.po';

describe('emoji-search App', function() {
  let page: EmojiSearchPage;

  beforeEach(() => {
    page = new EmojiSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
