const SailingCard = (props) => {
	return (
		<div className="m-2 flex">
			<div>
				<img className="w-48" src={props.sailing.ship.image} />
			</div>
			<div className="flex flex-col">
				<div className="flex">
					<div>
						<div className="text-lg font-bold">{props.sailing.name}</div>
						<div className="flex gap-2">
							<div>{props.sailing.region}</div>
							<div>{props.sailing.duration} nights</div>
							<div>{props.sailing.ship.rating} {props.sailing.ship.reviews} reviews</div>
						</div>
						<div className="flex flex-wrap gap-x-2">
							{props.sailing.itinerary.map((port, i) => {
								return <div key={`itinerary-${i}`}>{port.split(',')[0]}</div>
							})}
						</div>
					</div>
					<div className="text-right">
						<img className="max-h-8" src={props.sailing.ship.line.logo} />
						<div>{props.sailing.ship.name}</div>
					</div>
				</div>
				<div>
					<div className="text-right bg-slate-200">{props.sailing.price}</div>
				</div>
			</div>
		</div>
	)
}

export default SailingCard
