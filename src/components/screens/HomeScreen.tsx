"use client"

import Advantages from "../home/advantages/Advantages"
import Creators from "../home/creators/Creators"
import Visitka from "../home/visitka/Visitka"

export default function HomeScreen() {
	return (
		<div className="mt-20 flex flex-col gap-20">
			<Visitka />
			<Creators />
			<Advantages />
			<div></div>
		</div>
	)
}
