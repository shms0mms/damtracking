"use client"
import BaseLayout from "../BaseLayout"
import RegisterForm from "../register/RegisterForm"

export default function RegisterScreen() {
	return (
		<>
			<BaseLayout>
				<div className="flex items-center justify-center w-full h-full">
					<RegisterForm />
				</div>
			</BaseLayout>
		</>
	)
}
