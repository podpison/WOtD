import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.API_URL || "",
	process.env.API_KEY || "",
);

class WordsAPI {
	private normalizeItems(data: IWordFull[] = []) {
		const result: IWord[] = data.map((i) => ({
			word: i.word,
			wordDescription: i.wordDescription,
			wordUsage: i.wordUsage,
		}));

		return result;
	}
	public async getAll(): Promise<IWord[]> {
		const { data } = await supabase.from("words").select();

		return this.normalizeItems(data as IWordFull[]);
	}
	public async doesExist(word: IWord): Promise<number> {
		const { status } = await supabase
			.from("words")
			.select("word")
			.eq("word", word.word);

		return status;
	}
	public async set(word: IWord) {
		const { status } = await supabase.from("words").insert<IWord>(word);

		return status;
	}
}

export default WordsAPI;
