import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="https://tiger-dan.de.aista.com/magic/system/openai/include-javascript?markdown=true&speech=true&search=false&chat=true&css=chess&file=default&type=firefly_vercel_app&header=Ask%20about%20our%20services%20or%20products&button=" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KF77RNW');</script>`}} />
      </Head>
      <body className='dark:bg-black dark:text-white bg-pink-200 text-black programme'>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KF77RNW"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
