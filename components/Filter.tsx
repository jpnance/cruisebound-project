type FilterProps = {
	title: string;
	type: string;
	placeholder?: string;
}

const Filter = ({ title, type, placeholder }: FilterProps) => {
	let inputElement;

	if (type === 'text') {
		inputElement = <input className="rounded-md p-2 mt-1 text-black w-full" type="text" placeholder={placeholder} />
	}
	else if (type === 'date') {
		inputElement = <input className="rounded-md p-2 mt-1 text-black w-full" type="date" />
	}

	return (
		<div>
			<div className="text-gray-300">{title}</div>
			{inputElement}
		</div>
	)
			
}

export default Filter
