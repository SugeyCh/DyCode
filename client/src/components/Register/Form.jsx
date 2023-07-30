import Image       from "next/image"
import Link        from "next/link"
import { useForm } from "react-hook-form"
import instance    from "@/src/conn/axios"
import styles      from '@/sty/register.module.css'
import logo        from '@/pub/img/dycode-logo2.png'
import toast, { Toaster } from 'react-hot-toast'

const FormRegister = () => {
  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit((data) => { 
    instance.post('/dycode/register/', data)
    .then((result) => {
      notifySucces(result.data.message)

      window.location.assign('/login')
    })
    .catch((err) => {
      notifyError(err.response.data.email[0])
    })
  })

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
              <h3>CREA UNA CUENTA</h3>
            </div>
            
            <form onSubmit={ onSubmit }>
              <div className={ styles.user }>
                <input 
                  className={ styles.input } 
                  type="text" 
                  name="name" 
                  id="input"  
                  placeholder="Nombre" 
                  { ...register("name") }
                />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-user' aria-hidden="true"></i>
                </span>
              </div>
              <div className={ styles.email }>
                <input 
                  className={ styles.input } 
                  type="email" 
                  name="email" 
                  id="input" 
                  placeholder="Correo" 
                  { ...register("email") }
                />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-envelope' ></i>
                </span>
              </div>
              <div className={ styles.password }>
                <input 
                  className={ styles.input } 
                  type="password" 
                  name="password" 
                  id="input" 
                  placeholder="Clave" 
                  { ...register("password") }
                />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-lock-alt'></i>
                </span>
              </div>
              <div className={ styles.button }>
                <button>CREAR CUENTA</button>
              </div>
            </form>
            <div className={ styles.login }>
              <Link href="/login">
                <p>¿Ya tienes una cuenta?</p> <span className="material-symbols-outlined"> trending_flat </span>	
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormRegister