import Footer        from "./Footer"
import Flex          from "./Flex"


const Component = (props) => {
	return (
		<div>
			
			<div>
				{ props.children }
				<Flex />
			</div>
			<Footer />
		</div>
	)
}

export default Component