import BaseLayout from "../BaseLayout"
import LoginForm from "../login/LoginForm"
import Container from "../ui/Container"

export default function LoginScreen() {
	return (
		<>
			<BaseLayout>
				<Container>
					<LoginForm />
				</Container>
			</BaseLayout>
		</>
	)
}
