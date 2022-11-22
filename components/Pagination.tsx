type PaginationProps = {
	totalPages: number;
	currentPageIndex: number;
	setPageIndex: (newPageIndex: number) => void;
}

const Pagination = ({ totalPages, currentPageIndex, setPageIndex }: PaginationProps) => {
	let pageIndexes = [];

	for (let i = 0; i < totalPages; i++) {
		pageIndexes.push(i + 1);
	}

	let validateNewPageIndex = (newPageIndex: number) => {
		if (newPageIndex < 0 || newPageIndex >= totalPages) {
			return;
		}
		else {
			setPageIndex(newPageIndex);
		}
	}

	return (
		<div className="flex p-2 bg-slate-100 align-items-start rounded-md">
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === 0 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => validateNewPageIndex(currentPageIndex - 1)}>❮</div>
			{pageIndexes.map((pageNumber, i) => {
				return (
					<div className={`text-center p-2 cursor-pointer font-bold ${i == currentPageIndex ? 'bg-white rounded-full' : ''}`} key={`pagination-${i}`} onClick={(event) => validateNewPageIndex(i)}>
						{pageNumber}
					</div>
				)
			})}
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === totalPages - 1 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => validateNewPageIndex(currentPageIndex + 1)}>❯</div>
		</div>
	)
}

export default Pagination
