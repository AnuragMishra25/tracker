import { AttributionAppPage } from './app.po';

describe('attribution-app App', function() {
  let page: AttributionAppPage;

  beforeEach(() => {
    page = new AttributionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
