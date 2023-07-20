import Image  from "next/image"
import styles from '@/sty/register.module.css'
import logo   from '@/pub/img/dycode-logo2.png'

const FormLogin = () => {
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
              <h3>INICIO DE SESION</h3>
            </div>
            
            <form action="">
              <div className={ styles.email }>
                <input className={ styles.input } type="email" name="" id="input" placeholder="Correo" />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-envelope' ></i>
                </span>
              </div>
              <div className={ styles.password }>
                <input className={ styles.input } type="password" name="" id="input" placeholder="Clave" />
                <span className={ styles.focus }></span>
                <span className={ styles.icon }>
                  <i className='bx bxs-lock-alt'></i>
                </span>
              </div>
              <div className={ styles.button }>
                <button>INICIAR SESION</button>
              </div>
            </form>
            <div className={ styles.login }>
              <a href="/register/register">
                <p>¿No tienes una cuenta?</p> <span className="material-symbols-outlined"> trending_flat </span>	
              </a> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin