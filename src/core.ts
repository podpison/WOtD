import { JSDOM } from "jsdom";

class WOtD {
	website = "";
	private document: Document | null = null;
	word: IWord = {
		word: "",
		wordUsage: "",
		wordDescription: "",
		// learnMore: "",
	};

	private queryNode(query: string, isLink = false) {
		if (this.document == null) return "";

		const node = this.document.querySelector(query);
		const result = isLink ? node?.getAttribute("href") : node?.textContent;

		return result || "";
	}
	private async initDocument(website: string) {
		const websiteRequest = await fetch(website);
		const websiteText = await websiteRequest.text();

		const dom = new JSDOM(websiteText);
		const document = dom.window.document;

		this.document = document;
	}
	private initWordData() {
		this.word = {
			word: this.queryNode(".word-of-the-day"),
			wordUsage: this.queryNode(".txt-wod-usage"),
			wordDescription: this.queryNode(".txt-wod-desc"),
			// learnMore: this.queryNode(".lk-wod-more", true),
		};
	}

	async init(website: string) {
		await this.initDocument(website);
		this.initWordData();
	}
}

export default WOtD;
