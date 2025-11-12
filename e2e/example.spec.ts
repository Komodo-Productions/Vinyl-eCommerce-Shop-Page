import { test, expect } from '@playwright/test';

test.describe('Flujo E2E del e-commerce', () => {

  test('El usuario puede iniciar sesión, comprar un vinilo y ver su historial', async ({ page }) => {
    // 1️Ir al homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/Komodo Productions/i);

    // Ir a la página de login
    await page.click('[data-testid="login-link"]'); 
    await page.waitForSelector('[data-testid="login-form"]');

    // Llenar credenciales e iniciar sesión
    await page.fill('[data-testid="email-input"]', 'sarita@email.com');
    await page.fill('[data-testid="password-input"]', '123');
    // Evitar que el alert bloquee la redirección
    //page.once("dialog", (dialog) => dialog.dismiss());

    // Enviar el formulario y esperar redirección al home
    await Promise.all([
      page.waitForURL("**/", { waitUntil: "load" }),
      page.click('[data-testid="login-button"]'),
    ]);

    // Verificar que estamos en el home
    await expect(page).toHaveURL("http://localhost:3000/");

    // Navegar a la tienda
    await page.click('text=Tienda'); // o usa data-testid="nav-shop"
    await page.waitForURL('/shop');

    // Esperar que cargue la lista
    await page.waitForSelector('[data-testid="product-list"]');

    // Contar cuántos productos se renderizan
    const products = await page.locator('[data-testid^="product-card-"]').count();
    expect(products).toBeGreaterThan(0);

    // Clickear el primer producto
    await page.click('[data-testid^="product-link"]');

    // Verificar redirección
    await expect(page).toHaveURL(/\/products\/\d+/);

    // Esperar que el producto cargue
    await page.waitForSelector('[data-testid="product-detail-container"]');

    // Verificar que el nombre y el precio se muestran
    await expect(page.locator('[data-testid="product-name"]')).toContainText('Vinilo');
    await expect(page.locator('[data-testid="product-price"]')).toBeVisible();


    // Cambiar la cantidad
    await page.fill('[data-testid="quantity-selector"] input', '2');

    // Hacer clic en el botón de compra
    await page.click('[data-testid="buy-button"]');

    // Esperar la apertura del componente Checkout (modal o popup)
    await expect(page.locator('[data-testid="checkout-overlay"]')).toBeVisible();

    // Llenar los datos del pago simulado
    await page.fill('[data-testid="card-number-input"]', '4111111111111111');
    await page.fill('[data-testid="expiry-input"]', '12/26');
    await page.fill('[data-testid="cvv-input"]', '123');

    // Confirmar la compra
    await page.click('[data-testid="confirm-purchase-button"]');

   // Esperar que cargue la página de agradecimiento
    await page.waitForSelector('[data-testid="thankyou-container"]');

    // Verificar mensaje principal
    await expect(page.locator('[data-testid="thankyou-heading"]')).toContainText('Thank you for your purchase');

    // Verificar datos del producto
    await expect(page.locator('[data-testid="thankyou-product-name"]')).toContainText('Vinyl');
    await expect(page.locator('[data-testid="thankyou-product-price"]')).toBeVisible();

    // Verificar total pagado
    await expect(page.locator('[data-testid="thankyou-order-summary"]')).toContainText('Paid');

    // Probar los botones de navegación
    await page.click('[data-testid="thankyou-orders-link"]');
    await expect(page).toHaveURL(/\/history/);
  });
});

