import styles                  from '@/sty/nav.module.css'
import { useEffect, useState } from 'react'
import { createHtml }          from './createHtml'
import { Button } from '@nextui-org/react'

const Flex = () => {
  const [html, setHtml]   = useState('')
  const [css, setCss]     = useState('')
  const [js, setJs]       = useState('')
  const [lang, setLang]   = useState('en')
  const [paper, setPaper] = useState(createHtml(html, css, js, lang))

  const handleInput = (e) => {
    let id  = null
    let val = null
    if (e.target) {
      id  = e.target.attributes.id.value 
      val = e.target.value
    }
    
    if      (id === 'html') setHtml(val)
    else if (id === 'css')  setCss(val)
    else setJs(document.querySelector('#js').value)

  /* const {pathname} = window.location
  const[rawHtml, rawCss, rawJs] = pathname.slice(1).split('%7C')
  
  const html = window.atob(rawHtml)
  const css  = window.atob(rawCss)
  const js   = window.atob(rawJs)

  const hashedCode = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`
  window.history.replaceState(null, null, `${hashedCode}`) */
}

  useEffect(() => {
    setPaper(createHtml({html, css, js, lang}))
  }, [html, css, js, lang])
  
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.col}>
          <label    className={styles.html}>Html</label>
          <textarea className={styles.text} placeholder='Your html goes here' id='html' onInput={ handleInput }/>
          <label    className={styles.css}>Css</label>
          <textarea className={styles.text} placeholder='Your css goes here'  id='css'  onInput={ handleInput }/>
          <label    className={styles.js}>Js</label>
          <textarea className={styles.text} placeholder='Your js goes here'   id='js'    />
          <Button shadow color="warning" size='sm' css={{width: '50px'}} onPress={handleInput} id='btn'>
            Run your JS
          </Button>
        </div>
        
        <div className={styles.flo}>
          <iframe className={styles.if} srcDoc={paper}/>
        </div>
      </div>
    </>
  )
}

export default Flex