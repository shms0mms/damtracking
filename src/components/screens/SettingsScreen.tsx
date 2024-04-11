"use client"
import BaseLayout from "../BaseLayout"
import SettingsForm from "../settings/SettingsForm"
import Container from "../ui/Container"

export default function SettingsScreen() {
	return (
		<BaseLayout>
			<Container>
				<SettingsForm />
			</Container>
		</BaseLayout>
	)
}
