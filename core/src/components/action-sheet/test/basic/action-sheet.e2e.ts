import { newTestPage } from '@stencil/core/testing';

it('action-sheet/basic', async () => {
  const page = await newTestPage({
    url: `/src/components/action-sheet/test/basic`
  });

  await page.e2eScreenshot('action-sheet/basic');
});
