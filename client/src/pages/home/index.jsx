import Component     from "@/com/Components"
import MyHead        from "@/com/MyHead"
import styles        from "@/sty/nav.module.css"
import Nav           from "@/com/Navbar/Navbar"
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

export default function Home({ email }) {
  return (
    <>
      <MyHead />
      <div className={styles.flex}>
        <div className="Nav">
				  <Nav email={ email } />
			  </div>
			  <Component />
		  </div>
    </>
  )
}

