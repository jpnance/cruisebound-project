import { useState } from 'react'
import { Sailing } from '../components/SailingCard'
import Filter from './Filter'

type FiltersProps = {
	allResults: Sailing[];
	setFilteredResults: (filteredResults: Sailing[]) => void;
	resetPagination: () => void;
}

const Filters = ({ allResults, setFilteredResults, resetPagination }: FiltersProps) => {
	const [collapsed, setCollapsed] = useState(true)

	const [departurePortFilter, setDeparturePortFilter] = useState('')
	const [dateFilter, setDateFilter] = useState('')
	const [durationFilter, setDurationFilter] = useState('')
	const [cruiselineFilter, setCruiselineFilter] = useState('')

	let filterResults = () => {
		let filteredResults = allResults.slice()

		if (departurePortFilter !== '') {
			filteredResults = filteredResults.filter((sailing) => sailing.itinerary[0]?.toLowerCase().startsWith(departurePortFilter.toLowerCase()))
		}

		if (dateFilter !== '') {
			let dateFilterObject = new Date(dateFilter)

			filteredResults = filteredResults.filter((sailing) => {
				let departureDateObject = new Date(sailing.departureDate)
				let returnDateObject = new Date(sailing.returnDate)

				return departureDateObject <= dateFilterObject && dateFilterObject <= returnDateObject
			})
		}

		if (durationFilter !== '') {
			let durationNumber = parseInt(durationFilter)

			filteredResults = filteredResults.filter((sailing) => sailing.duration === durationNumber)
		}

		if (cruiselineFilter !== '') {
			filteredResults = filteredResults.filter((sailing) => sailing.ship.line.name.toLowerCase().startsWith(cruiselineFilter.toLowerCase()))
		}

		setFilteredResults(filteredResults)
		resetPagination()
	}

	let resetFilters = () => {
		setDeparturePortFilter('')
		setDateFilter('')
		setDurationFilter('')
		setCruiselineFilter('')
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
				<Filter title="Departure port" type="text" placeholder="Any port" value={departurePortFilter} handleChange={setDeparturePortFilter} />
				<Filter title="Dates" type="date" value={dateFilter} handleChange={setDateFilter} />
				<Filter title="Duration" type="text" placeholder="Any duration" value={durationFilter} handleChange={setDurationFilter} />
				<Filter title="Cruiseline" type="text" placeholder="Any ship" value={cruiselineFilter} handleChange={setCruiselineFilter} />
				<button className="bg-slate-600 hover:bg-slate-500 rounded-md p-4" onClick={(event) => filterResults()}>Search</button>
				<button className="bg-slate-600 hover:bg-slate-500 rounded-md p-4" onClick={(event) => resetFilters()}>Reset Filters</button>
			</div>
		</div>
	)
}

export default Filters
