import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import SearchResults from '../components/SearchResults'

const Home: NextPage = () => {
	const [results, setResults] = useState([])

	useEffect(() => {
		fetch('https://sandbox.cruisebound-qa.com/sailings')
			.then((response) => response.json())
			.then((response) => setResults(response.results))

		return () => {}
	}, [])

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<SearchResults results={results} />
		</div>
   )
}

export default Home
