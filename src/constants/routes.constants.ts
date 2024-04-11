export const routes = {
	register: "/auth/register",
	select: "/companies/select",
	companies: "/companies/all",
	company: (companyId: number) => `/companies/${companyId}`,
	home: "/",
	login: "/auth/login",
	"add-address": "/companies/add-address",
	cart: "/cart",
}
