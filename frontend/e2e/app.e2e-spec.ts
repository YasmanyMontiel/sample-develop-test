import { SampleFrontendPage } from './app.po';

describe('sample-frontend App', function() {
  let page: SampleFrontendPage;

  beforeEach(() => {
    page = new SampleFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
