type FilterProps = {
	title: string;
	type: string;
	placeholder?: string;
	value: string;
	handleChange: (newValue: string) => void;
}

const Filter = ({ title, type, placeholder, value, handleChange }: FilterProps) => {
	let inputElement;

	return (
		<div>
			<div className="text-gray-300">{title}</div>
			<input className="rounded-md p-2 mt-1 text-black w-full" type={type} placeholder={placeholder} value={value} onChange={(event) => handleChange(event.target.value)} />
		</div>
	)
			
}

export default Filter
