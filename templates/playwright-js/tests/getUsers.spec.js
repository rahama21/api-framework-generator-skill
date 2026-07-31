const { test, expect } = require('@playwright/test');

test('GET Users API', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
});