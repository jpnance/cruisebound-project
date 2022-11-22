import { useState } from 'react'
import Filter from './Filter'

const Filters = () => {
	const [collapsed, setCollapsed] = useState(true)

	return (
		<div className="flex flex-col gap-8">
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
				<Filter title="Departure port" type="text" placeholder="Any port" />
				<Filter title="Dates" type="date" />
				<Filter title="Duration" type="text" placeholder="Any duration" />
				<Filter title="Cruiseline" type="text" placeholder="Any ship" />
			</div>
		</div>
	)
}

export default Filters
