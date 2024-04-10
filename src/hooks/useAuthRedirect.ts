import { routes } from "@/constants/routes.constants"
import { UserRole } from "@/types/auth.types"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const useAuthRedirect = (isAuth: boolean, role?: UserRole) => {
	const { push } = useRouter()
	const pathname = usePathname()
	useEffect(() => {
		!isAuth && pathname !== routes.login && push(routes.register)
		isAuth && role === "company"
			? push(routes.select)
			: role === "customer" && push(routes.companies)
	}, [isAuth, pathname, push, role])
	return {}
}

export default useAuthRedirect
