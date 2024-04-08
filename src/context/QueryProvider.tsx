"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const QueryProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</>
	)
}

export default QueryProvider
