const { Router } = require('itty-router');
const { page } = require('./page.js');
// Create a new router
const router = Router();

/**
 * rawHtmlResponse returns HTML inputted directly
 * into the worker script
 * @param {string} html
 */
function rawHtmlResponse(html) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  };
  return new Response(html, init);
}

/**
 * Index route, returns the home-page html.
 * @returns {Response}
*/
router.get("/", () => {
  return rawHtmlResponse(page);
})

addEventListener('fetch', (event) => {
  const { request } = event;
  return event.respondWith(router.handle(request));
})
