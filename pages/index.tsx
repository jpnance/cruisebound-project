import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import SearchResults from '../components/SearchResults'
import Pagination from '../components/Pagination'
import { Sailing } from '../components/SailingCard'

const Home: NextPage = () => {
	const resultsPerPage = 10

	const [results, setResults] = useState([])
	const [pageIndex, setPageIndex] = useState(0)

	useEffect(() => {
		fetch('https://sandbox.cruisebound-qa.com/sailings')
			.then((response) => response.json())
			.then((response) => setResults(response.results.sort((a: Sailing, b: Sailing) => a.price - b.price)))

		return () => {}
	}, [])

	let changePageIndex = (newPageIndex: number) => {
		if (newPageIndex < 0 || newPageIndex >= Math.ceil(results.length / resultsPerPage)) {
			return;
		}
		else {
			setPageIndex(newPageIndex);
		}
	}

	return (
		<div className="flex flex-col lg:flex-row min-h-screen justify-center">
			<div className="p-4 mx-2 my-2 bg-slate-800 text-white">
				<Filters />
			</div>
			<div className="flex m-2 flex-col items-start justify-center max-w-4xl">
				<SearchResults results={results.slice(pageIndex * resultsPerPage, pageIndex * resultsPerPage + resultsPerPage)} />
				<Pagination totalPages={Math.ceil(results.length / resultsPerPage)} currentPageIndex={pageIndex} changePageIndex={changePageIndex} />
			</div>
		</div>
   )
}

export default Home
