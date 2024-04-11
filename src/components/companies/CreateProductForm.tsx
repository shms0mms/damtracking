"use client"
import { ProductWithoutID } from "@/types/auth.types"
import { FC, useState } from "react"
import { OnSubmitHandler, useForm } from "react-pcp-form"
import InputField from "../ui/InputField"
import TextareaField from "../ui/TextareaField"
import Button from "../ui/Button"
import Title from "../ui/Title"
import useCompany from "@/hooks/useCompany"
import Error from "../ui/Error"
import AdaptivForm from "../ui/AdaptivForm"
import { routes } from "@/constants/routes.constants"
import { useRouter } from "next/navigation"

const CreateProductForm: FC = ({}) => {
	const { push } = useRouter()
	const [formError, setFormError] = useState("")
	const {
		handleSubmit,
		register,
		formState: { errors },
		fields,
	} = useForm<ProductWithoutID>({ mode: "onSubmit" })
	const { createProduct } = useCompany()
	const onSubmit: OnSubmitHandler<ProductWithoutID> = async data => {
		if (isNaN(+data.price)) {
			setFormError("Поле с ценой должно быть числом")
		} else {
			setFormError("")
			const product = await createProduct({ ...data, price: +data.price })
			if (product) push(routes["my-products"])
		}
	}
	return (
		<>
			<AdaptivForm onSubmitHandler={onSubmit} handleSubmit={handleSubmit}>
				<Title>Создание товара для вашей компании</Title>

				<InputField
					register={register}
					name="title"
					isFocus={fields}
					placeholder="Заголовок для товара"
					error={errors && errors.title}
					params={{
						required: {
							value: true,
							message: "Это поле обязательно",
						},
					}}
				/>
				<TextareaField
					className="min-h-10"
					register={register}
					name="desc"
					isFocus={fields}
					placeholder="Описание для товара"
					params={{
						required: {
							value: true,
							message: "Это поле обязательно",
						},
					}}
					error={errors && errors.desc}
				/>
				<InputField
					register={register}
					name="price"
					isFocus={fields}
					placeholder="Цена для товара"
					error={errors && errors.price}
					params={{
						min: { value: 0, message: "Это поле должно быть числом" },
					}}
				/>
				<Error error={formError} />
				<Button type="submit">Создать товар</Button>
			</AdaptivForm>
		</>
	)
}

export default CreateProductForm
