import { Company } from "@/types/auth.types"
import { FC } from "react"

const CompanyDetail: FC<Company> = ({ company_name }) => {
	return <>{company_name}</>
}

export default CompanyDetail
