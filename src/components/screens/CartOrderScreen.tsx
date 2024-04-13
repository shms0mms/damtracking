"use client"
import BaseLayout from "@/components/BaseLayout"
import CustomerMap from "@/components/ui/CustomerMap"
import { useParams } from "next/navigation"
export default function CartOrderScreen() {
	const { companyId } = useParams()
	return (
		<BaseLayout withMH>
			<CustomerMap companyId={+companyId} />
		</BaseLayout>
	)
}
