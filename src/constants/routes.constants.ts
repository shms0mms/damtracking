export const routes = {
	register: "/auth/register",
	select: "/companies/select",
	"create-address": "/companies/address/create",
	companies: "/companies/all",
	company: (companyId: number) => `/companies/${companyId}`,
	"company-products": (companyId: number) =>
		`/companies/${companyId}/products/all`,
	home: "/",
	login: "/auth/login",

	cart: "/cart",
	settings: "/auth/settings",
	vk: "https://vk.com/pizdscc",
	order: "/cart/order",
	product: (productId: number) => `/companies/products/${productId}`,
	"create-product": "/companies/products/create",
}
