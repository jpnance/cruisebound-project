export type Sailing = {
	price: number;
	name: string;
	ship: {
		name: string;
		rating: number;
		reviews: number;
		image: string | undefined;
		line: {
			logo: string;
			name: string;
		}
	}
	itinerary: string[];
	region: string;
	departureDate: string;
	returnDate: string;
	duration: number;
}

export type SailingCardProps = {
	sailing: Sailing;
}

const SailingCard = ({ sailing }: SailingCardProps) => {
	return (
		<div className="drop-shadow-md">
			<div className="my-4 flex flex-col md:flex-row rounded-clip-path">
				<div className="h-32 md:h-auto md:w-72">
					<img className="w-full h-full object-cover" src={sailing.ship.image} />
				</div>
				<div className="flex flex-col w-full bg-white">
					<div className="flex grow p-4">
						<div className="grow">
							<div className="text-sm md:text-xl font-bold">{sailing.name}</div>
							<div className="text-xs md:text-sm flex flex-col gap-2 md:flex-row md:gap-4">
								<div className="text-gray-700">{sailing.region}</div>
								<div className="text-gray-700">{sailing.duration} nights</div>
								<div className="flex gap-2 items-center">
									<div className="md:text-md">
										<span className="text-yellow-400">★</span>
										<span className="font-bold">{sailing.ship.rating}</span>
									</div>
									<div className="text-xs text-gray-500">{sailing.ship.reviews} reviews</div>
								</div>
							</div>
							<div className="flex flex-wrap my-2 gap-x-2 items-center">
								{sailing.itinerary.map((port, i) => {
									return (
										<>
											<div className="text-xs md:text-sm text-gray-700" key={`itinerary-${i}`}>{port.split(',')[0]}</div>
											{i < sailing.itinerary.length - 1 ? <div className="text-blue-500">⭢</div> : null}
										</>
									)
								})}
							</div>
						</div>
						<div className="flex flex-col items-end">
							<img className="max-h-8 max-w-[4rem] md:max-w-[8rem]" src={sailing.ship.line.logo} />
							<div className="text-right text-gray-500 text-xs my-1">{sailing.ship.name}</div>
						</div>
					</div>
					<div className="flex justify-end p-4 bg-slate-100">
						<div className="text-right">
							<div className="text-sm text-slate-500">Interior from</div>
							<div className="text-2xl"><sup>$</sup>{sailing.price}</div>
						</div>
						<div className="place-self-center">
							<button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md ml-4">See sailings</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SailingCard
