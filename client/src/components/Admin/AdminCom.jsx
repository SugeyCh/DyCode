import Nav    from "@/com/Navbar/Navbar"
import Footer from "../Footer"
import Admin  from "./admin"
import styles from "@/sty/nav.module.css"

const AdminCom = () => {
  return(
    <>
      <div className={styles.flex}>
        <div className="Nav">
				  <Nav />
			  </div>
        <Admin/>
        <Footer />
		  </div>
    </>
  )
}

export default AdminCom