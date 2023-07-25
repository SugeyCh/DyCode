import Nav    from "@/com/Navbar/Navbar"
import Footer from "../Footer"
import View   from "./view"
import styles from "@/sty/nav.module.css"

const ViewCom = () => {
  return(
    <>
      <div className={styles.flex}>
        <div className="Nav">
				  <Nav />
			  </div>
        <View/>
        <Footer />
		  </div>
    </>
  )
}

export default ViewCom