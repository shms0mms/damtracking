import { Company } from "@/types/auth.types"
import { Truck } from "lucide-react"
import { FC } from "react"
import Title from "../ui/Title"
import Button from "../ui/Button"
import Link from "../ui/Link"
import { routes } from "@/constants/routes.constants"

const CompanyCard: FC<Company> = ({
	company_name,
	email,
	first_name,
	id,
	second_name,
	third_name,
	username,
}) => {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex items-center justify-between w-[50%]">
				<div className="font-semibold flex items-center gap-2 text-xl">
					<Truck /> {company_name}
				</div>
				<div className="opacity-50 text-sm font-bold">{username}</div>
			</div>
			<div className="flex flex-col gap-4">
				<div>
					<Title className="text-sm">
						Список недавно добавленных продуктов
					</Title>
					<div className="flex flex-col gap-3 mb-3"># Продукты</div>

					<Link href={routes.company(id)} className="text-dark-purple">
						Смотреть больше продуктов &rarr;{" "}
					</Link>
				</div>
				<div className="flex flex-col gap-1 text-right w-[50%]">
					<div className="font-semibold">Владелец компании:</div>
					<div className="text-dark-purple">
						{first_name} {second_name} {third_name}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CompanyCard
