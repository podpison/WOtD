import { Table as CTPTable } from "console-table-printer";

class Table {
	private _table: CTPTable = new CTPTable({
		columns: [
			{
				name: "word",
				title: "Word",
				alignment: "center",
			},
			{
				name: "wordUsage",
				title: "Word usage",
				alignment: "center",
				minLen: 40,
			},
			{
				name: "wordDescription",
				title: "Word description",
				alignment: "center",
				minLen: 50,
			},
			// {
			// 	name: "learnMore",
			// 	title: "Learn more",
			// },
		],
	});

	constructor(data: IWord[]) {
		this._table.addRows(this.normalizeSpaces(data));
	}
	private normalizeSpaces(data: IWord[]) {
		//removes unnessesary spaces (e.g. "   text text2")

		const normalizedData: IWord[] = data.map((d) => ({
			...d,
			// wordDescription: d.wordDescription.replace(/\s+/g, " ").trim(),
			// wordUsage: d.wordUsage.replace(/\s+/g, " ").trim(),
		}));

    return normalizedData;
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
