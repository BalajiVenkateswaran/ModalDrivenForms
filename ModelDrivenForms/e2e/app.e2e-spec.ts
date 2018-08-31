import { TempletDrivenPage } from './app.po';

describe('templet-driven App', () => {
  let page: TempletDrivenPage;

  beforeEach(() => {
    page = new TempletDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
