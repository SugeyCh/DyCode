import Footer        from "./Footer"
import Flex          from "./Flex"

const Component = (props) => {
	return (
		<>
			<div>
				{ props.children }
				<Flex />
			</div>
			<Footer />
		</>
	)
}

export default Component