import { useState } from 'react'
import { Sailing } from '../components/SailingCard'
import Filter from './Filter'

type FiltersProps = {
	allResults: Sailing[];
	setFilteredResults: (filteredResults: Sailing[]) => void;
}

const Filters = ({ allResults, setFilteredResults }: FiltersProps) => {
	const [collapsed, setCollapsed] = useState(true)

	const [departurePortFilter, setPortFilter] = useState('')
	const [dateFilter, setDateFilter] = useState('')
	const [durationFilter, setDurationFilter] = useState('')
	const [cruiselineFilter, setCruiselineFilter] = useState('')

	let filterResults = () => {
		let filteredResults = allResults.slice()

		if (departurePortFilter !== '') {
			filteredResults = filteredResults.filter((sailing) => sailing.itinerary[0]?.toLowerCase().startsWith(departurePortFilter.toLowerCase()))
		}

		if (durationFilter !== '') {
			let durationNumber = parseInt(durationFilter)

			filteredResults = filteredResults.filter((sailing) => sailing.duration === durationNumber)
		}

		setFilteredResults(filteredResults);
	}

	return (
		<div className="text-sm md:text-md flex flex-col gap-8">
			<div className="self-center lg:self-end cursor-pointer p-2 bg-slate-600 hover:bg-slate-500 rounded-md" onClick={(event) => setCollapsed(!collapsed)}>
				<div className={`${collapsed ? '' : 'hidden'}`}>
					<span className="lg:hidden">⭣</span>
					<span className="hidden lg:inline">⭢</span>
				</div>
				<div className={`${collapsed ? 'hidden' : ''}`}>
					<span className="lg:hidden">⭡</span>
					<span className="hidden lg:inline">⭠</span>
				</div>
			</div>
			<div className={`flex flex-col gap-8 ${collapsed ? 'hidden' : ''}`}>
				<Filter title="Departure port" type="text" placeholder="Any port" handleChange={setPortFilter} />
				<Filter title="Dates" type="date" handleChange={setDateFilter} />
				<Filter title="Duration" type="text" placeholder="Any duration" handleChange={setDurationFilter} />
				<Filter title="Cruiseline" type="text" placeholder="Any ship" handleChange={setCruiselineFilter} />
				<button onClick={(event) => filterResults()}>Search</button>
			</div>
		</div>
	)
}

export default Filters
