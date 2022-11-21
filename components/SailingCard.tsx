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
			<div className="m-2 flex rounded-clip-path">
				<div className="w-72">
					<img className="w-full h-full object-cover" src={sailing.ship.image} />
				</div>
				<div className="flex flex-col w-full bg-white">
					<div className="flex grow p-4">
						<div className="grow">
							<div className="text-lg font-bold">{sailing.name}</div>
							<div className="flex gap-2">
								<div>{sailing.region}</div>
								<div>{sailing.duration} nights</div>
								<div>{sailing.ship.rating} {sailing.ship.reviews} reviews</div>
							</div>
							<div className="flex flex-wrap gap-x-2">
								{sailing.itinerary.map((port, i) => {
									return <div key={`itinerary-${i}`}>{port.split(',')[0]}</div>
								})}
							</div>
						</div>
						<div className="flex flex-col items-end">
							<img className="max-h-8 max-w-[8rem]" src={sailing.ship.line.logo} />
							<div>{sailing.ship.name}</div>
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
