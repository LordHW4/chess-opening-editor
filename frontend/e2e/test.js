import {Selector} from 'testcafe';
fixture`Example page`
  .page`http://localhost:8081`;

test('should have title "Home"', async t => {
  const title = Selector('h1').withText('Home');
  await t.expect(title.textContent).eql('Home');
});
