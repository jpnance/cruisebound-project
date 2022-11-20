import type { NextPage } from 'next'
import sailings from '../data/sailings.json'

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			{sailings.results.map((sailing, i) => {
				return <h1 key={i}>{sailing.name}</h1>
			})}
		</div>
   )
}

export default Home
