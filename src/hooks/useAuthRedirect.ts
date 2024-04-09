import { routes } from "@/constants/routes.constants"
import { UserRole } from "@/types/auth.types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useAuthRedirect = (isAuth: boolean, role?: UserRole) => {
	const { push } = useRouter()
	useEffect(() => {
		!isAuth && push(routes.register)
		isAuth && role === "company"
			? push(routes.select)
			: role === "customer" && push(routes.companies)
	}, [isAuth, push, role])
	return {}
}

export default useAuthRedirect
