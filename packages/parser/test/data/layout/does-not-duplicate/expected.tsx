import Script from 'next/script';

export default function Document() {
  return (
    <html>
            <head>
                <title>Test</title>
                <Script type="module" src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" strategy="beforeInteractive" type="module" id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" />
            </head>
            <body>
                <main />
                <Script
          type="module"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" strategy="beforeInteractive" type="module" id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          id="onlook-preload-script"
          strategy="beforeInteractive" />

            </body>
        </html>);

}