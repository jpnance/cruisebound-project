import SailingCard, { Sailing } from './SailingCard'

type SearchResultsProps = {
	results: Sailing[];
};

const SearchResults = ({ results }: SearchResultsProps) => {
	return (
		<div>
			{results.map((result, i) => <SailingCard key={`result-${i}`} sailing={result} /> )}
		</div>
	)
}

export default SearchResults
