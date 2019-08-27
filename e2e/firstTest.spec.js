describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display background text', async () => {
    await expect(element(by.id('bg-text'))).toBeVisible();
    await expect(element(by.id('bg-text'))).toHaveText('Currency Converter');
  });

  it('should display currency selector buttons with correct initial values', async () => {
    await expect(element(by.id('baseSelect'))).toBeVisible();
    await expect(element(by.id('targetSelect'))).toBeVisible();
    await expect(element(by.id('baseSelectText'))).toHaveText('USD');
    await expect(element(by.id('targetSelectText'))).toHaveText('GBP');
  });
  it('should render input fields correctly', async () => {
    await expect(element(by.id('baseValue'))).toBeVisible();
    await expect(element(by.id('targetValue'))).toBeVisible();
  });

  it('should show currency picker modal after currency selector tap', async () => {
    await expect(element(by.id('pickerModal'))).toBeNotVisible();
    await element(by.id('baseSelect')).tap();
    await expect(element(by.id('pickerModal'))).toBeVisible();
  });

  it('should should do conversion correctly convert button tap', async () => {
    await element(by.id('baseValue')).typeText('1');
    await element(by.id('convertButton')).tap();
    await expect(element(by.id('targetValue'))).toHaveText('0.82');
  });
});
