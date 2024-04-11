import { media } from "@/constants/media.constants"
import { FC, PropsWithChildren } from "react"
import {
	FieldsValues,
	HandleSubmit,
	OnSubmitHandler,
	useMediaQuery,
} from "react-pcp-form"
interface IAdaptivForm<FormData extends FieldsValues = object> {
	handleSubmit: HandleSubmit<FormData>
	onSubmitHandler: OnSubmitHandler<FormData>
}
const AdaptivForm = <FormData extends FieldsValues = object>({
	children,
	handleSubmit,
	onSubmitHandler,
}: PropsWithChildren<IAdaptivForm<FormData>>) => {
	const { matches: isMobile } = useMediaQuery(media.mobile)
	return (
		<form
			method="POST"
			className={`min-w-full flex items-center justify-center min-h-full ${
				isMobile ? "p-2" : "p-8"
			}`}
			onSubmit={e => handleSubmit(e, onSubmitHandler)}
		>
			<div
				className={`flex flex-col gap-4 ${
					!isMobile ? "min-w-[479px]" : "min-w-full"
				}`}
			>
				{children}
			</div>
		</form>
	)
}

export default AdaptivForm
