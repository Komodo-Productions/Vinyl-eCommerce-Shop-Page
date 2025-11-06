import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
await expect(page).toHaveTitle('Komodo Productions');
    const heroHeading = page.locator('.hero-top h1');
    await expect(heroHeading).toBeVisible();

await expect(heroHeading).toContainText('Komodo');
    await expect(heroHeading).toContainText('Productions');
    
    const headingHTML = await heroHeading.innerHTML();
    expect(headingHTML).toContain('Komodo');
    expect(headingHTML).toContain('<br>'); // Playwright normalizes <br/> to <br>
    expect(headingHTML).toContain('Productions');
    expect(headingHTML).toContain('<sup>®</sup>');
});

