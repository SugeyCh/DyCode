const createHtml = ({html, css, js, lang}) => {
  let p = "Here you can see your Code Live"

  return `
    <!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        <p placeholder=${p}></p>
        ${html}
      </body>
      <script>
        ${js}
      </script>
    </html>
  `
}

export { createHtml }