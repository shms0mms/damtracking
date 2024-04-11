import { routes } from "@/constants/routes.constants"
import { usePathname, useRouter } from "next/navigation"

const useAuthRedirect = () => {
	const { push } = useRouter()
	const pathname = usePathname()
	const redirect = (isAuth: boolean) => {
		if (!isAuth && pathname !== routes.register) push(routes.login)
	}
	return { redirect }
}

export default useAuthRedirect
