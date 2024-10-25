declare global {
	interface IWord {
		word: string;
		wordUsage: string;
		wordDescription: string;
	}
	interface IWordFull extends IWord {
		id: string;
		created_at: string;
	}

	interface TableItem {

	}
}

export {};
