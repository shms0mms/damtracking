"use client"
import BaseLayout from "../BaseLayout"
import Title from "../ui/Title"
import CompanyCard from "../companies/CompanyCard"
import { useEffect, useState } from "react"
import useCompany from "@/hooks/useCompany"
import { Company, CompanyDB } from "@/types/auth.types"
import Loader from "../ui/Loader"

export default function CompaniesScreen() {
	const [companies, setCompanies] = useState<CompanyDB[]>([])
	const { getAllCompanies } = useCompany()
	const updateCompanies = async () => {
		const cmpns = await getAllCompanies()

		setCompanies(cmpns)
	}

	useEffect(() => {
		updateCompanies()
	}, [])
	return (
		<BaseLayout>
			<div className="p-4 h-full w-full">
				<Title className="mb-2">Список компаний</Title>

				{companies && companies.length ? (
					<div className="flex flex-col gap-14">
						{companies.map(c => (
							<CompanyCard {...c} key={c.id} />
						))}{" "}
					</div>
				) : (
					<Loader size={32} />
				)}
			</div>
		</BaseLayout>
	)
}
