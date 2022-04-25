const page = `
<!DOCTYPE html>
<html>
  <head>
    <title>
      RLS - Reliable Short Links
    </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
  
    <main class="flex h-[100vh] w-full p-4 select-none flex-col justify-center text-center">
      <div class="flex flex-1 flex-grow flex-col justify-center">
        <h1 class="text-5xl font-thin">RLS</h1>
        <h2 class="m-1 text-lg opacity-50">Reliable short links.</h2>
        <div class="mx-auto text-lg font-thin opacity-50">
          <form id="shorten">
            <div class="flex flex-col md:flex-row w-full max-w-3xl flex-row p-2">
              <div>
                <input name="link" class="p-2 text-black outline-none border-2 border-gray-400 focus:ring-1 focus:border-black" id="link" placeholder="Feed me a link" required />
              </div>
              <div class="mt-4 md:mt-0">
                <button class="hover:bg-blue border-2 border-black bg-black p-2 text-white">Shorten</button>
              </div>
            </div>
            <div class="flex w-full max-w-3xl flex-row p-2">
              <div id="loading" class="my-2 py-2 pr-2 hidden flex-col justify-center flex-grow-0">
                <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"/></svg>
              </div>
              <div class="py-2 flex-grow flex-1">
                <input id="short-link" class="border-b-2 text-indigo-800 focus:border-b-0 border-gray-300 focus:border-gray-500 w-full p-2 outline-none focus:ring-1 focus:ring-black" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="h-10 flex-grow-0 text-center font-thin opacity-60">reliable · instant</div>
    </main>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
      (async function() {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const setting = localStorage.getItem('color-schema') || 'auto'
        if (setting === 'dark' || (prefersDark && setting !== 'light'))
          document.documentElement.classList.toggle('dark', true)
      })();

      let form = document.getElementById('shorten'),
        shortLink = document.getElementById('short-link'),
        loading = document.getElementById('loading');

      form.addEventListener("submit", async function(e) {
        e.preventDefault();
        loading.className = loading.className.replace("hidden", "flex");
        shortLink.parentElement.className = shortLink.parentElement.className + " hidden";
        loading.parentElement.className = loading.parentElement.className + " justify-center";
        const link = document.querySelector('#link').value;
        const params = {
          link
        }
        const { data } = await axios.post('/shorten', params);
        loading.className = loading.className.replace("flex", "hidden")
        shortLink.parentElement.className = shortLink.parentElement.className.replace("hidden", "");
        loading.parentElement.className = loading.parentElement.className.replace("justify-center", "");
        shortLink.value = window.location.origin + '/r/' + data.link;
      })
    </script>
  </body>
</html>
`;

module.exports = { page }
