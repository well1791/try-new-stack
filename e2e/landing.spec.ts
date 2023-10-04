import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Landing page', () => {
  test('should have a proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Podcaster')
  })

  test('should have a proper heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Podcaster' });
    expect(heading).toBeVisible()
  })

//   test('should have a filter', async ({ page }) => {
//     const filter = page.getByPlaceholder('Filter podcasts...');
//     expect(filter).toBeVisible()
//   })

//   test('should count up to 100 podcasts', async ({ page }) => {
//     const podcasts = page.getByLabel(/^Podcast:/);
//     expect(podcasts).toHaveCount(100)
//   })
})
