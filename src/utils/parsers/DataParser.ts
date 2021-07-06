import { Operation } from "../Operation";


export abstract class DataParser {

	protected operationRowRegex:RegExp = new RegExp('');
	protected columnSplitChar:string = '';
	protected rowSplitChar:string = '';

	constructor(private text:string){
	}

	parse(): Operation[] {

		const rows = this.text.split(this.rowSplitChar);

		let filtered = rows.filter(r=> r.match(this.operationRowRegex));

		return filtered.map(r => this.createOperation(r.split(this.columnSplitChar)));
	}

	createOperation(str:string[]):Operation{
		return {
			date:this.dateParser(str[0]),
			name:str[1],
			value:+str[6].replace(',','.'),
			category:str[8],
		} as Operation
	}

	dateParser(str:string):Date{
		let [date,time] = str.split(' ')
		let dateString = date.split('.').reverse().join('-');
		return new Date(`${dateString}T${time}`)
	}

}


