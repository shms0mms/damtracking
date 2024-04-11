import companies from "@/assets/companies.assets"
import BaseLayout from "../BaseLayout"
import Title from "../ui/Title"
import CompanyCard from "../companies/CompanyCard"

export default function CompaniesScreen() {
	return (
		<BaseLayout>
			<div className="p-4 h-full w-full">
				<Title className="mb-2">Список ближайщих к вам компаний</Title>
				<div className="flex flex-col gap-14">
					{companies.map(c => (
						<CompanyCard {...c} key={c.id} />
					))}
				</div>
			</div>
		</BaseLayout>
	)
}
