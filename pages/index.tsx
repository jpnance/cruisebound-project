import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import SearchResults from '../components/SearchResults'
import Pagination from '../components/Pagination'
import { Sailing } from '../components/SailingCard'

const Home: NextPage = () => {
	const resultsPerPage = 10

	const [allResults, setAllResults] = useState([])
	const [filteredResults, setFilteredResults] = useState([] as Sailing[])
	const [pageIndex, setPageIndex] = useState(0)
	const [sortMethod, setSortMethod] = useState({ field: 'price', ascending: true })

	useEffect(() => {
		fetch('https://sandbox.cruisebound-qa.com/sailings')
			.then((response) => response.json())
			.then((response) => {
				let results = response.results
				results.sort(resultsSort)

				setAllResults(response.results)
				setFilteredResults(response.results)
			})

		return () => {}
	}, [])

	let changePageIndex = (newPageIndex: number) => {
		if (newPageIndex < 0 || newPageIndex >= Math.ceil(filteredResults.length / resultsPerPage)) {
			return;
		}
		else {
			setPageIndex(newPageIndex);
		}
	}

	let resultsSort = (a: Sailing, b: Sailing) => {
		if (sortMethod.field === 'price') {
			if (sortMethod.ascending) {
				return a.price - b.price
			}
			else {
				return b.price - a.price
			}
		}
		else if (sortMethod.field === 'departure') {
			if (sortMethod.ascending) {
				return a.departureDate < b.departureDate ? 1 : -1
			}
			else {
				return a.departureDate > b.departureDate ? 1 : -1
			}
		}
		else if (sortMethod.field === 'duration') {
			if (sortMethod.ascending) {
				return a.duration - b.duration
			}
			else {
				return b.duration - a.duration
			}
		}

		return 0
	}

	let sortBy = (sortMethodString: string) => {
		let [field, ascending] = sortMethodString.split('-')

		setSortMethod({ field: field, ascending: ascending === 'asc' })
	}

	useEffect(() => {
		let newFilteredResults = filteredResults.slice()

		newFilteredResults.sort(resultsSort)
		setFilteredResults(newFilteredResults)

	}, [sortMethod])

	return (
		<div className="flex flex-col lg:flex-row min-h-screen justify-center">
			<div className="p-4 mx-2 my-2 bg-slate-800 text-white">
				<Filters allResults={allResults} setFilteredResults={setFilteredResults} resetPagination={changePageIndex.bind(null, 0)} />
			</div>
			<div className="flex m-2 flex-col items-start justify-center max-w-4xl">
				<SearchResults
					filteredResults={filteredResults.slice(pageIndex * resultsPerPage, pageIndex * resultsPerPage + resultsPerPage)}
					totalResults={filteredResults.length}
					sortBy={sortBy}
				/>
				<Pagination totalPages={Math.ceil(filteredResults.length / resultsPerPage)} currentPageIndex={pageIndex} changePageIndex={changePageIndex} />
			</div>
		</div>
   )
}

export default Home
