import SailingCard, { Sailing } from './SailingCard'

type SearchResultsProps = {
	filteredResults: Sailing[];
	totalResults: number;
	sortBy: (sortMethodString: string) => void;
};

const SearchResults = ({ filteredResults, totalResults, sortBy }: SearchResultsProps) => {
	return (
		<div>
			<div className="flex flex-col md:flex-row items-center">
				<div className="font-bold grow">{totalResults} trips found</div>
				<select className="rounded-md p-2" onChange={(event) => sortBy(event.target.value)}>
					<option value="price-asc">Price: Lowest first</option>
					<option value="price-desc">Price: Highest first</option>
					<option value="departure-asc">Departure date: Earliest first</option>
					<option value="departure-desc">Departure date: Latest first</option>
					<option value="duration-asc">Duration: Shortest first</option>
					<option value="duration-desc">Duration: Longest first</option>
				</select>
			</div>
			{filteredResults.map((result, i) => <SailingCard key={`result-${i}`} sailing={result} /> )}
		</div>
	)
}

export default SearchResults
