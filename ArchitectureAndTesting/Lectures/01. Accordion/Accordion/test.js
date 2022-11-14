const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables


describe('E2E tests', async function() {
    this.timeout(5000);

  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 


  it('loads article titles', async() => {
      await page.goto('http://localhost:62294');
      await page.screenshot({path: 'page.png'})
  });
});

