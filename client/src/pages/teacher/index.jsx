import MyHead        from "@/com/MyHead"
import Nav           from "@/com/Navbar/Navbar"
import styles        from "@/sty/nav.module.css"
import Footer        from "@/com/Footer"
import View          from "@/com/Teacher/view"
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

export default function MyPage({ email }) {
  return( 
    <>
      <MyHead />
      <div className={styles.flex}>
        <div className="Nav">
				  <Nav email={email} />
			  </div>
        <View />
        <Footer />
		  </div>
    </>
  )
}