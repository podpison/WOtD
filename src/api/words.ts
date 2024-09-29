import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.SUPABASE_URL || "",
	process.env.SUPABASE_KEY || "",
);

class WordsAPI {
	public async getAll(): Promise<IWord[] | null> {
		const { data } = await supabase.from("words").select();

		return data;
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
