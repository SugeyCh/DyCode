import Image from "next/image"
import logo from '@/pub/images/light-logo.png'
import styles from '@/sty/nav.module.css'

const Footer = () => {
	return (
		<div>
			<footer className={styles.footer}>
				<span className={styles.span}>
					Powered by TIDV Tech
				</span>
				<Image src={logo} className={styles.logo} alt="TIDV Tech Logo"/>
			</footer>
		</div>
	)
}

export default Footer