import SailingCard from './SailingCard'

const SearchResults = (props) => {
	return (
		<div>
			{props.results.map((result, i) => <SailingCard key={`result-${i}`} sailing={result} /> )}
		</div>
	)
}

export default SearchResults
