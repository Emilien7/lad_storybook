describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Тестовый тест', async () => {
    await expect(element(by.label('auth'))).toBeVisible();
    await element(by.id('login')).typeText('Pepega');
    await element(by.id('password')).typeText('123456');
    await element(by.id('enter')).tap();
    await element(by.id('pressHere')).multiTap(3);
    await expect(element(by.label('counter'))).toHaveText('3');
    await element(by.id('list')).scroll(500, 'down');
    await element(by.id('list')).scroll(500, 'up');
    await element(by.id('search')).typeText('Женщина');
    await element(by.id('Женщина орет на кота')).multiTap(2);
    await element(by.id('#Женщина орет на кота')).swipe('right');
  });
});
