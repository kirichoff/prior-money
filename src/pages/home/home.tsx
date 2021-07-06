import { Button } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { AsyncFileReader } from '../../utils/AsyncFileReader';
import { OperationsHistory } from '../../utils/OperationsHistory';
import { CsvParser } from '../../utils/parsers/CsvParser';
import ActiveShapePie from '../../components/ActiveShapePie';
import Processor from '../../utils/Calculator/Processor';

function Home(_props: any) {
	const [operations, setOperations] = useState<OperationsHistory>(new OperationsHistory());
	let reader = new AsyncFileReader();

	let onChange = async (ev: ChangeEvent<HTMLInputElement>) => {
		let file = ev.target?.files?.item(0) as File;

		let dataTxt = await reader.readAsText(file);

		let operationsData = new CsvParser(dataTxt).parse();

		operations.add(operationsData);

		setOperations(operations);
	};

	const proc = new Processor(operations.operations);
	const groups = proc.CategoriesTotal();

	return (
		<div>
			<ActiveShapePie style={{ margin: 'auto' }} data={groups} />
			<Button variant="outlined" color="primary" style={{
					display: 'block',
					margin: 'auto'
				}}>
					<input
					onChange={onChange}
					type="file"
					style={{
						opacity: 0,
						position:'absolute',
						width: '100%',
						height: '100%',
						cursor: 'pointer'
					}}
				/>
				Import
			</Button>
		</div>
	);
}

export default Home;
