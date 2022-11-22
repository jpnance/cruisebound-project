type PaginationProps = {
	totalPages: number;
	currentPageIndex: number;
	changePageIndex: (newPageIndex: number) => void;
}

const Pagination = ({ totalPages, currentPageIndex, changePageIndex }: PaginationProps) => {
	const paginationBubble = 2;

	let pages = [];
	let ellipses = false;

	for (let i = 0; i < totalPages; i++) {
		if (i === 0 || i === totalPages - 1 || (i >= currentPageIndex - paginationBubble && i <= currentPageIndex + paginationBubble)) {
			pages.push({ index: i, number: i + 1 });
			ellipses = false;
		}
		else if (!ellipses) {
			pages.push(null);
			ellipses = true;
		}
	}

	return (
		<div className="text-xs md:text-md flex p-2 bg-slate-100 align-items-start rounded-md">
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === 0 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => changePageIndex(currentPageIndex - 1)}>❮</div>
			{pages.map((page, i) => {
				if (page !== null) {
					return (
						<div className={`text-center p-2 cursor-pointer font-bold ${page.index == currentPageIndex ? 'bg-white rounded-full' : ''}`} key={`pagination-${i}`} onClick={(event) => changePageIndex(page.index)}>
							{page.number}
						</div>
					)
				}
				else {
					return (
						<div className="text-center p-2 font-bold" key={`pagination-${i}`}>...</div>
					)
				}
			})}
			<div className={`text-center p-2 cursor-pointer font-bold ${currentPageIndex === totalPages - 1 ? 'text-gray-200' : 'text-blue-500'}`} onClick={(event) => changePageIndex(currentPageIndex + 1)}>❯</div>
		</div>
	)
}

export default Pagination
