import { Table as CTPTable } from "console-table-printer";
import tableConfig from "./../tableconfig.json";

class Table {
	private readonly _table: CTPTable = new CTPTable({
		columns: [
			{
				name: "word",
				...tableConfig.columns.word,
			},
			{
				name: "wordUsage",
				...tableConfig.columns.wordUsage,
			},
			{
				name: "wordDescription",
				...tableConfig.columns.wordDescription,
			},
		],
		rowSeparator: true,
	});

	constructor(data: IWord) {
		this._table.addRows([data]);
	}

	print() {
		this._table.printTable();
	}
}

export default Table;
