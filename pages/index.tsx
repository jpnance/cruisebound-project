import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import SearchResults from '../components/SearchResults'
import Pagination from '../components/Pagination'

const Home: NextPage = () => {
	const [results, setResults] = useState([])
	const [pageIndex, setPageIndex] = useState(0)

	useEffect(() => {
		fetch('https://sandbox.cruisebound-qa.com/sailings')
			.then((response) => response.json())
			.then((response) => setResults(response.results))

		return () => {}
	}, [])

	return (
		<div className="flex min-h-screen flex-col items-start justify-center py-2">
			<SearchResults results={results.slice(pageIndex * 10, pageIndex * 10 + 10)} />
			<Pagination totalPages={Math.ceil(results.length / 10)} currentPageIndex={pageIndex} setPageIndex={setPageIndex} />
		</div>
   )
}

export default Home
