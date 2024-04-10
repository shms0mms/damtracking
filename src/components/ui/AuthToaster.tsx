import { FC } from "react"
import { Toaster } from "sonner"
import { colors } from "../../../tailwind.config"

const AuthToaster: FC = ({}) => {
	return (
		<>
			<Toaster
				expand
				style={{
					color: colors["dark-purple"],
				}}
				toastOptions={{ className: "auth-toast" }}
			/>
		</>
	)
}

export default AuthToaster
