import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="https://chatgpt-coderfy.sg.aista.com/magic/system/openai/include-javascript?markdown=true&speech=false&search=false&chat=true&css=coderfy&file=default&type=firefly_vercel_app&header=%3Cdiv%20style=%22color:pink%22%3Etest%3C/div%3E&button=%3Ca%20herf=%22https://google.com%22%3Etest%3C/a%3E" defer></script>
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
