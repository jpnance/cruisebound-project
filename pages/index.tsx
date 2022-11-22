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
		<div className="flex mx-2 min-h-screen flex-col items-start justify-center py-2">
			<SearchResults results={results.slice(pageIndex * resultsPerPage, pageIndex * resultsPerPage + resultsPerPage)} />
			<Pagination totalPages={Math.ceil(results.length / resultsPerPage)} currentPageIndex={pageIndex} setPageIndex={setPageIndex} />
		</div>
   )
}

export default Home
