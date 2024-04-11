import BaseLayout from "@/components/BaseLayout"
import HomeScreen from "@/components/screens/HomeScreen"

export default function HomePage() {
	return (
		<BaseLayout withH withSB={false}>
			<HomeScreen />
		</BaseLayout>
	)
}
