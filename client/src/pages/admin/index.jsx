import MyHead from "@/com/MyHead"
import Nav    from "@/com/Navbar/Navbar"
import Footer from "@/com/Footer"
import Admin  from "@/com/Admin/admin"
import styles from "@/sty/nav.module.css"
import { getCookie } from "@/com/cookies.tsx"

export async function getServerSideProps ({ req }) {
  const email    = getCookie('email', req)
  if (email == 'undefined' || email == 'null') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      email: email,
    }
  }
}

const AdminCom = ({ email }) => {
  return(
    <>
      <MyHead />
      <div className={styles.flex}>
        <div className="Nav">
				  <Nav email={email} />
			  </div>
        <Admin/>
        <Footer />
		  </div>
    </>
  )
}

export default AdminCom