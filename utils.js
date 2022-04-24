const { customAlphabet } = require('nanoid/non-secure');

/**
 * This function generates a short string from a longer string
 * @param {string} string
 */
function generateUrl(link){
  link = link.replaceAll(/(\s|-|_|[.]|#|\/|%|@|:)/gi, '');
  const nanoid = customAlphabet(link + link.toUpperCase(), 10);
  return nanoid();
}

module.exports = {
  generateUrl
}