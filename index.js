const { Router } = require('itty-router');
const { page } = require('./page.js');
const { getLink, searchLink, saveLink } = require('./db.js');
const { generateUrl } = require('./utils.js');

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


/**
 * This route receives a request containing a full link, creates and returns a json Response containing the short link
 * @param {Request} {params}
 * @returns {Response}
*/
router.post("/shorten", async request => {
  let response = {}, link = "";
  
  if (request.headers.get("Content-Type") === "application/json") {
    let res = await request.json();
    link = res.link;
  }
  let exists = await searchLink(link);

  if(exists.state === "success"){
    response = { 
      link: exists.body
    };
    
    return new Response(JSON.stringify(response, null, 2), {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  let short = generateUrl(link);
  let { state, body} = await saveLink(link, short);
  if(state === "error"){
    return new Response({error: body.description}, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  
  return new Response(JSON.stringify({link: body}, null, 2), {
    headers: {
      "Content-Type": "application/json"
    }
  })
})
addEventListener('fetch', (event) => {
  const { request } = event;
  return event.respondWith(router.handle(request));
})
