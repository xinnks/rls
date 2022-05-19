const page = `
<!DOCTYPE html>
<html>
  <head>
    <title>
      RLS - Reliable Link Shortener
    </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
  </head>
  <body>
  
    <main class="flex h-[100vh] w-full p-4 select-none flex-col justify-center text-center">
      <div class="flex flex-1 flex-grow flex-col justify-center">
        <div class="mx-auto py-8">
          <svg
           width="120"
           height="120"
           viewBox="0 0 512 512"
           version="1.1"
           id="svg5"
           inkscape:version="1.1.1 (3bf5ae0, 2021-09-20)"
           sodipodi:docname="rls-1.svg"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview
               id="namedview7"
               pagecolor="#ffffff"
               bordercolor="#666666"
               borderopacity="1.0"
               inkscape:pageshadow="2"
               inkscape:pageopacity="0.0"
               inkscape:pagecheckerboard="0"
               inkscape:document-units="px"
               showgrid="false"
               inkscape:zoom="0.33056641"
               inkscape:cx="-408.38996"
               inkscape:cy="347.88774"
               inkscape:window-width="1888"
               inkscape:window-height="1044"
               inkscape:window-x="32"
               inkscape:window-y="0"
               inkscape:window-maximized="1"
               inkscape:current-layer="layer1" />
            <defs
               id="defs2">
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1515"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="1.5093734"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1513"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="1.5093734"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1511"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="0.9"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect2138"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="12"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect2134"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="24"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1746"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="24"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1709"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="10"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1571"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="12"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1283"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="10"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
              <inkscape:path-effect
                 effect="offset"
                 id="path-effect1608"
                 is_visible="true"
                 lpeversion="1"
                 linejoin_type="miter"
                 unit="mm"
                 offset="20"
                 miter_limit="4"
                 attempt_force_join="false"
                 update_on_knot_move="true" />
            </defs>
            <g
               inkscape:label="1"
               inkscape:groupmode="layer"
               id="layer1">
              <path
                 id="rect950"
                 style="fill:#999999;stroke-width:0.997669;stop-color:#000000"
                 d="M 48.529297 0 C 21.644563 0 3.7895613e-14 21.644563 0 48.529297 L 0 463.4707 C 0 490.35544 21.644563 512 48.529297 512 L 463.4707 512 C 490.35544 512 512 490.35544 512 463.4707 L 512 48.529297 C 512 21.644563 490.35544 3.7895613e-14 463.4707 0 L 48.529297 0 z M 198.00977 31.455078 C 244.00725 32.688774 287.79894 58.459146 310.16602 102.49219 L 348.52539 178.00586 L 297.66211 203.84375 L 259.30273 128.32812 C 241.0725 92.439118 197.44548 78.203473 161.55664 96.433594 C 125.66787 114.66369 111.43394 158.29086 129.66406 194.17969 L 168.02539 269.69336 L 117.16211 295.5293 L 78.802734 220.01172 C 46.268846 155.96375 71.674572 78.104263 135.72266 45.570312 C 155.7377 35.403453 177.10182 30.894307 198.00977 31.455078 z M 417.48047 133.92773 L 429.02148 151.41406 L 392.48633 175.52344 L 380.94727 158.03711 L 417.48047 133.92773 z M 202.20312 145.02539 C 216.22129 144.89239 229.57185 153.01907 235.50781 166.73242 L 302.02344 320.39648 C 309.93805 338.68094 301.58719 359.77679 283.30273 367.69141 C 265.01825 375.60603 243.92057 367.25735 236.00586 348.97266 L 169.49023 195.30859 C 161.57552 177.02389 169.92818 155.92449 188.21289 148.00977 C 192.78406 146.03109 197.53041 145.06972 202.20312 145.02539 z M 441.48828 173.19727 L 445.82422 193.69531 L 403 202.75586 L 398.66406 182.25781 L 441.48828 173.19727 z M 361.92188 213.68945 L 390.16992 293.54102 C 412.62992 357.03362 383.0578 425.94159 323.41602 454.07422 C 319.44394 455.94782 315.34288 457.638 311.11719 459.13281 C 243.39846 483.08776 169.4807 447.80734 145.52344 380.08203 L 117.27734 300.22852 L 171.06055 281.20508 L 199.30664 361.05664 C 212.73069 399.00535 254.14781 418.77268 292.09375 405.34961 C 330.03969 391.92654 349.81279 350.5153 336.38867 312.56641 L 308.14062 232.71289 L 361.92188 213.68945 z " />
            </g>
            <g
               inkscape:groupmode="layer"
               id="layer2"
               inkscape:label="2" />
          </svg>
        </div>
        <h1 class="py-4 text-2xl opacity-50">Reliable Link Shortener.</h1>
        <div class="mx-auto text-xl font-thin opacity-50">
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
