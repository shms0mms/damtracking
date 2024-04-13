import Image from "next/image"
import Text from "../../ui/Text"
import Title from "../../ui/Title"
import Block from "../Block"
import List from "./List"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"

export default function Visitka() {
	const { matches: isMobile } = useMediaQuery(media.mobile)
	const block = `${!isMobile && "flex-[0_1_50%]"} flex flex-col gap-5`
	return (
		<Block id="visitka" title="Сервис - Damtracking">
			<div className="w-full flex items-center justify-center">
				<Image width={200} height={200} src={"/bg.png"} alt="background" />
			</div>
			<Text>
				Сервис <span className="text-purple decor">Damtracking</span> - это
				отличный вариант - если вы владеете компанией, которая нуждается в
				онлайн-продаже товаров с помощью пунктов выдачи. А также если вам нужно
				приобрести тот или иной товар, учитывая стоимость доставки и время
				доставки.
			</Text>
			<div>
				<Title className="text-center mb-2"> Роли </Title>
				<Text className="text-center mb-5">
					На нашем сайте присутствует две{" "}
					<span className="text-purple decor">роли</span>
				</Text>
				<div className={`flex gap-8 ${isMobile && "flex-col"}`}>
					<div className={`${block}`}>
						<Title>Компания</Title>
						<List
							items={[
								"Компания может расставлять свои пункты выдачи на карте мира",
								"Создавать свои товары",
								"Просматривать свои товары, и удалять ненужные",
							]}
						/>
					</div>
					<div className={`${block}`}>
						<Title>Покупатель</Title>
						<List
							items={[
								"Покупатель может просматривать список компаний, их товары",
								"У покупателя есть корзина, он может удалять из нее товары и добавлять",
								"Покупатель может оформить заказ и в будущем сможет выполнить оплату",
							]}
						/>
					</div>
				</div>
			</div>
		</Block>
	)
}
