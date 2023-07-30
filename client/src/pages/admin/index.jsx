import MyHead from "@/com/MyHead"
import Nav    from "@/com/Navbar/Navbar"
import Footer from "@/com/Footer"
import Admin  from "@/com/Admin/admin"
import styles from "@/sty/nav.module.css"

const AdminCom = () => {
  return(
    <>
      <MyHead />
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