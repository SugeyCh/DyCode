import Image       from "next/image"
import { useForm } from "react-hook-form"
import instance    from "@/src/conn/axios"
import styles      from '@/sty/register.module.css'
import logo        from '@/pub/img/dycode-logo2.png'

const FormRegister = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit(async (data) => { 
    await instance.post('/estudiante/', data)
  })

  return(
    <>
      <div className={ styles.body }>
        <div className={ styles.general }>
          <div className={ styles.card }>
            <div className={ styles.img } id="animacion">
              <Image src={ logo } className={ styles.logo } alt="Logo DyCode"/>
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
              <a href="/login/login">
                <p>¿Ya tienes una cuenta?</p> <span className="material-symbols-outlined"> trending_flat </span>	
              </a> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormRegister