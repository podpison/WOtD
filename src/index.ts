import "dotenv/config";
import WOtD from "./core.ts";
import Table from "./table.ts";

const vocabularyWOtD = new WOtD();
await vocabularyWOtD.init("https://www.vocabulary.com/word-of-the-day/");

const vocabularyTable = new Table(vocabularyWOtD.word);

vocabularyTable.print();
