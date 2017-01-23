import { FormThingPage } from './app.po';

describe('form-thing App', function() {
  let page: FormThingPage;

  beforeEach(() => {
    page = new FormThingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
