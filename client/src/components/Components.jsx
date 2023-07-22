import Footer from "./Footer"
import Barra from "./Navbar/Navbar"
import Flex from "./Flex"

const Component = (props) => {
	return (
		<div>
			<div className="Nav">
				<Barra />
			</div>
			<div>
				{ props.children }
				<Flex />
			</div>
			<Footer />
		</div>
	)
}

export default Component