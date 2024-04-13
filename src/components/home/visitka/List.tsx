import { FC } from "react"

export interface IList {
	items: string[]
}

const List: FC<IList> = ({ items }) => {
	return (
		<ul className="flex flex-col gap-5">
			{items.map((i, pk) => (
				<li
					className="font-medium text-base before:content-[''] relative before:top-1/2 before:-translate-y-1/2 pl-[16px] before:left-[0px] before:w-2 before:h-2 before:rounded-[50%] before:bg-dark-purple before:absolute"
					key={pk}
				>
					{i}
				</li>
			))}
		</ul>
	)
}

export default List
