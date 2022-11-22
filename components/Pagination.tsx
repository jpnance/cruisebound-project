type PaginationProps = {
	totalPages: number;
	currentPageIndex: number;
	changePageIndex: (newPageIndex: number) => void;
}

const Pagination = ({ totalPages, currentPageIndex, changePageIndex }: PaginationProps) => {
	let pageIndexes = [];

	for (let i = 0; i < totalPages; i++) {
		pageIndexes.push(i + 1);
	}

	return (
		<div className="flex p-2 bg-slate-100 align-items-start rounded-md">
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === 0 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => changePageIndex(currentPageIndex - 1)}>❮</div>
			{pageIndexes.map((pageNumber, i) => {
				return (
					<div className={`text-center p-2 cursor-pointer font-bold ${i == currentPageIndex ? 'bg-white rounded-full' : ''}`} key={`pagination-${i}`} onClick={(event) => changePageIndex(i)}>
						{pageNumber}
					</div>
				)
			})}
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === totalPages - 1 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => changePageIndex(currentPageIndex + 1)}>❯</div>
		</div>
	)
}

export default Pagination
