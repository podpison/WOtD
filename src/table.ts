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

	constructor(data: IWord[]) {
		this._table.addRows(data);
	}

	private divideWords(text: string) {
		//splits word into multiple words + capitalize the first letter (e.g. wordDescription to Word description)

		return text.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleUpperCase();
	}

	private normalizeColumns(columns: string[]) {
		return columns.map((c) => {
			return {
				name: c,
				title: this.divideWords(c),
				alignment: "center",
			};
		});
	}

	print() {
		this._table.printTable();
	}
}

export default Table;
