declare global {
	interface IWord {
		word: string;
		wordUsage: string;
		wordDescription: string;
		// learnMore: string;
	}
	interface IWordFull extends IWord {
		id: string;
		created_at: string;
	}

	interface TableItem {

	}
}

export {};
