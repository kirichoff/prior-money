import { DataParser } from "./DataParser";


export class CsvParser extends DataParser {
	constructor(text:string){
		super(text)
		this.operationRowRegex = /^\d+.\d+.\d+ \d+:\d+:\d+;/;
		this.columnSplitChar = ';';
		this.rowSplitChar = '\n';
	}
}
