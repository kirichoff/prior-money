import { StorageItem } from './StorageItem';
import { Operation } from './Operation';
import { StorageManager } from './StorageManager';
export class OperationsHistory {

	private _operations:Operation[];
	private storage = new StorageManager();

	get operations():Operation[]{
		return this._operations
	}

	constructor(){
		this._operations = this.storage.getItem<Operation[]>(StorageItem.Data) || [];
	}

	add(operations:Operation[]):void{

		operations.forEach( newOp =>{
			const opIndex = this._operations.findIndex(baseOp => this.operationComparer(baseOp,newOp));
			if(opIndex !== -1){
				this._operations[opIndex] = newOp;
			}
			else {
				this.operations.push(newOp)
			}
		}
		);

		this._operations = this._operations.filter(o=> o.date);

		this.storage.setItem<Operation[]>(StorageItem.Data,this._operations)
	}

	operationComparer(baseOp:Operation,newOp:Operation):boolean{
		return baseOp.date === newOp.date && baseOp.name === newOp.name
	}

	remove():void{

	}
}



