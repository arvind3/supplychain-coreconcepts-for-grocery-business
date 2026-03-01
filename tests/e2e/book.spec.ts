import {expect, test} from '@playwright/test';

const docSlugs = [
  'docs/book-overview',
  'docs/01-grocery-supply-chain-basics',
  'docs/02-master-data-and-product-flow',
  'docs/03-roles-and-responsibilities',
  'docs/04-demand-forecasting-and-planning',
  'docs/05-procurement-and-supplier-management',
  'docs/06-inbound-logistics-and-warehouse',
  'docs/07-replenishment-store-operations-and-fulfillment',
  'docs/08-core-systems-and-integrations',
  'docs/09-quality-engineering-test-scenarios',
  'docs/10-end-to-end-lifecycle-walkthrough',
  'docs/11-glossary-and-next-steps',
];

test('home page and top navigation are visible', async ({page}) => {
  await page.goto('');
  const h1 = page.getByRole('heading', {level: 1});
  await expect(h1).toContainText('Supply Chain Core Concepts for the Grocery Business');
  await expect(page.getByRole('link', {name: 'Start Reading'})).toBeVisible();
});

for (const slug of docSlugs) {
  test(`docs page renders correctly: ${slug}`, async ({page}) => {
    await page.goto(slug);
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).not.toHaveText('404');
  });
}

test('mobile UX keeps primary CTA visible', async ({page}) => {
  await page.goto('');
  await expect(page.getByRole('link', {name: 'Start Reading'})).toBeVisible();
});
