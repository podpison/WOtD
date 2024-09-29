import { Table as CTPTable } from "console-table-printer";

class Table {
	private readonly _table: CTPTable = new CTPTable({
		columns: [
			{
				name: "word",
				title: "Word",
				alignment: "left",
			},
			{
				name: "wordUsage",
				title: "Word usage",
				alignment: "left",
				minLen: 60,
				maxLen: 60,
			},
			{
				name: "wordDescription",
				title: "Word description",
				alignment: "left",
				minLen: 70,
				maxLen: 70,
			},
			// {
			// 	name: "learnMore",
			// 	title: "Learn more",
			// },
		],
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
