import { JSDOM } from 'jsdom';

describe('test html', () => {
  it('test react', () => {
    const dom = new JSDOM(
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Document</title>
    <script src="http://localhost:5000/react.production.js"></script>
    <script src="http://localhost:5000/react-dom.production.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      (()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=ReactDOM,r=React;var a=e.n(r);const n=a().createElement((function(){return a().createElement("div",{className:"app"},a().createElement("div",null,"hello world"))}),null);(0,t.createRoot)(document.querySelector("#app")).render(n)})();
    </script>
  </body>
</html>
`,
      {
        resources: 'usable',
        runScripts: 'dangerously',
        url: 'https://test.com',
      }
    );
    const { window } = dom;
    const { document } = window;
    const app = document.querySelector('.app');

    console.log(app);
  });
});
