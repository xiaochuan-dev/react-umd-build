import { JSDOM, VirtualConsole } from 'jsdom';

describe('test html', () => {
  it('test react umd', async () => {
    const html = `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Document</title>
    <script src="http://127.0.0.1:5000/react.production.js"></script>
    <script src="http://127.0.0.1:5000/react-dom.production.js"></script>
    <script src="http://127.0.0.1:5000/main.js" defer></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
    `;

    const err = [];
    const warn = [];

    const virtualConsole = new VirtualConsole();
    virtualConsole.on('error', (message) => {
      err.push(message);
    });
    virtualConsole.on('warn', (message) => {
      warn.push(message);
    });

    const dom = new JSDOM(html, {
      resources: 'usable',
      runScripts: 'dangerously',
      url: 'http://127.0.0.1:5000',
      virtualConsole,
    });

    const { window } = dom;
    const { document } = window;

    await new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', () => {
        resolve();
      });
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      });
    });

    expect(document.body.innerHTML.includes('hello world')).toBe(true);

    expect(err.length).toBe(0);

  });
});
