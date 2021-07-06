import { groupBy } from "lodash";
import { Operation } from "../Operation";

export default class Processor{

	constructor(private operations:Operation[]){

	}

	CategoriesTotal():any{
		const groups = groupBy(this.operations,'category');

		const prepared:any = [];

		for (let key in groups){

				let val = groups[key].reduce((a,b) => a + b.value,0)
				prepared.push(
					{
						name: key,
						value:Math.round(val*-1)
					}
				)

		}

		return prepared;
	}

}
