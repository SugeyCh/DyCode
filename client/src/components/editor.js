// const Editor = () => {

// const $ = selector => document.querySelector(selector)

// Split({
//   columnGutters: [{
//     track: 1,
//     element: document.querySelector('.vertical-gutter')
//   }],
//   rowGutters: [{
//     track: 1,
//     element: document.querySelector('.horizontal-gutter')
//   }]
// })

// console.log("hola")

// const $html = $('#html')
// const $css  = $('#css')
// const $js   = $('#js')

// $html.addEventListener('input', update)
// $css.addEventListener('input', update)
// $js.addEventListener('input', update)

// function init() {
//   const {pathname} = window.location
//   const[rawHtml, rawCss, rawJs] = pathname.slice(1).split('%7C') 
  
//   const html = window.atob(rawHtml)
//   const css  = window.atob(rawCss)
//   const js   = window.atob(rawJs)

//   $html.value = html
//   $css.value  = css
//   $js.value   = js

//   const htmlPreview = createHtml({html, css, js})
//   $('iframe').setAttribute('srcdoc', htmlPreview)
// }

// function update () {
//   const html = $html.value
//   const css  = $css.value
//   const js   = $js.value

//   const hashedCode = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`
//   window.history.replaceState(null, null, `${hashedCode}`)

//   const htmlPreview = createHtml({html, css, js})
//   $('iframe').setAttribute('srcdoc', htmlPreview)
// }

// const createHtml = ({html, css, js}) => {
//   return `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <style>
//       ${css}
//     </style>
//   </head>
//   <body>
//     ${html}
//   </body>
//   <script>
//     ${js}
//   </script>
// </html>
//   `
// }

// init()

// return(
// 	console.log('hola2')
// )
// }