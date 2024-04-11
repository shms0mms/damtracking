"use client"
import BaseLayout from "../BaseLayout"
import RegisterForm from "../register/RegisterForm"
import Container from "../ui/Container"

export default function RegisterScreen() {
	return (
		<>
			<BaseLayout>
				<Container>
					<RegisterForm />
				</Container>
			</BaseLayout>
		</>
	)
}
