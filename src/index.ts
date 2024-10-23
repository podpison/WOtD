import "dotenv/config";
import WOtD from "./core.ts";
import Table from "./table.ts";
// import { WordsAPI } from "./api";

const vocabularyWOtD = new WOtD();
await vocabularyWOtD.init("https://www.vocabulary.com/word-of-the-day/");

// const wordsAPI = new WordsAPI();

// const existanceCode = await wordsAPI.doesExist(vocabularyWOtD.word);

// if (existanceCode !== 200) {
// 	const result = await wordsAPI.set(vocabularyWOtD.word);
	
// 	if (result !== 200) {
// 		//TODO: to helpers
// 		console.log("Something went wrong");
// 	}
// }

//TODO: move offset login to a seprate file
// const words = await wordsAPI.getAll();

const vocabularyTable = new Table([vocabularyWOtD.word]);

vocabularyTable.print();
