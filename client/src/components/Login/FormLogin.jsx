import { useState, useEffect } from "react"
import { redirect }            from 'next/navigation'
import toast, { Toaster }      from 'react-hot-toast'
import Image                   from "next/image"
import Link                    from "next/link"
import styles                  from '@/sty/register.module.css'
import instance                from "@/src/conn/axios.js"
import logo                    from '@/pub/img/dycode-logo2.png'
import { setCookie }           from "../cookies.tsx"

const FormLogin = () => {
  const [redir, setRedir] = useState(false)

  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const handleButton = () => {
    let email    = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let user = {
      email, 
      password
    }

    instance.post('/dycode/login/', user)
    .then((result) => {
      notifySucces(result.data.msg)

      setCookie('email', email)
      window.location.assign('/home')
    })
    .catch((err) => {
      if (err.code === 'ERR_BAD_RESPONSE') {
        notifyError('Ha ocurrido un error')
      }

      notifyError(err.response.data.non_field_errors)
    })
  }
  
  //useEffect(() => { if (redir)  }, [redir])

  return(
    <>
      <div className={ styles.body }>
        <Toaster position="top-right" reverseOrder={true} duration={5000}/>
        <div className={ styles.general }>
          <div className={ styles.card }>
            <div className={ styles.img } id="animacion">
              <Image src={ logo } className={ styles.logo } alt="Logo DyCode" priority={ true } />
            </div>
            <div className={ styles.light }></div>
          </div>
          
          <div className={ styles.form }>
            <div className={ styles.title }>
              <h3>INICIO DE SESION</h3>
            </div>
            
            <form action="">
              <div className={ styles.email }>
                <input className={ styles.input } type="email" name="" id="email" placeholder="Correo" />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-envelope' ></i>
                </span>
              </div>
              <div className={ styles.password }>
                <input className={ styles.input } type="password" name="" id="password" placeholder="Clave" />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-lock-alt'></i>
                </span>
              </div>
              <div className={ styles.button }>
                <button type="button" onClick={ handleButton } >INICIAR SESION</button>
              </div>
            </form>
            <div className={ styles.login }>
              <Link href="/">
                <p>¿No tienes una cuenta?</p> <span className="material-symbols-outlined"> trending_flat </span>	
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin