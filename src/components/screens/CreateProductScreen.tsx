import BaseLayout from "../BaseLayout"
import CreateProductForm from "../companies/CreateProductForm"
import Container from "../ui/Container"

export default function CreateProductScreen() {
	return (
		<BaseLayout>
			<Container>
				<CreateProductForm />
			</Container>
		</BaseLayout>
	)
}
