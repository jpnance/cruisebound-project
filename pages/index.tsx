import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
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

	return (
		<div className="flex min-h-screen">
			<div className="p-2 mx-2 my-2 bg-slate-800 text-white">
				Here's where some filter stuff will go.
			</div>
			<div className="flex m-2 flex-col items-start justify-center">
				<SearchResults results={results.slice(pageIndex * resultsPerPage, pageIndex * resultsPerPage + resultsPerPage)} />
				<Pagination totalPages={Math.ceil(results.length / resultsPerPage)} currentPageIndex={pageIndex} setPageIndex={setPageIndex} />
			</div>
		</div>
   )
}

export default Home
