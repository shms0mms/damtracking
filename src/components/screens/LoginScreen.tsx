import BaseLayout from "../BaseLayout"
import LoginForm from "../login/LoginForm"

export default function LoginScreen() {
	return (
		<>
			<BaseLayout>
				<div className="flex items-center justify-center w-full h-full">
					<LoginForm />
				</div>
			</BaseLayout>
		</>
	)
}
