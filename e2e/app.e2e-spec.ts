import { AngularFormsReactivePage } from './app.po';

describe('angular-forms-reactive App', function() {
  let page: AngularFormsReactivePage;

  beforeEach(() => {
    page = new AngularFormsReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
