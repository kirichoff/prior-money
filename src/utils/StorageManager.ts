import { StorageItem } from './StorageItem';

export class StorageManager{

	getItem<T>(key:StorageItem):T{
		const data = localStorage.getItem(key.toString()) as string;
		const object = JSON.parse(data);
		return object as T;
	}

	setItem<T>(key:StorageItem,data:T):void{
		const stringData = JSON.stringify(data)
		localStorage.setItem(key.toString(),stringData)
	}

}
