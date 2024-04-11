import BaseLayout from "../BaseLayout"
import LoginForm from "../login/LoginForm"
import Container from "../ui/Container"

export default function LoginScreen() {
	return (
		<>
			<BaseLayout>
				<Container>
					<div className="flex items-center justify-center w-full h-full">
						<LoginForm />
					</div>
				</Container>
			</BaseLayout>
		</>
	)
}
