import { JSDOM } from "jsdom";
import {sourceQueries} from "./middleware";

class WOtD {
	website = "";
	private document: Document | null = null;
	word: IWord = {
		word: "",
		wordUsage: "",
		wordDescription: "",
		// learnMore: "",
	};

	private normalizeText(text?: string | null) {
		if (!text) return "";

		const withoutBreaks = text.replaceAll("\n", "");
		const trimmed = withoutBreaks.trim();

		const normalizedText = trimmed; //the constant should be equal to the last change applied

		return normalizedText;
	}
	private queryNode(query: string, isLink = false) {
		if (this.document == null) return "";

		const node = this.document.querySelector(query);
		const result = isLink ? node?.getAttribute("href") : this.normalizeText(node?.textContent);

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
			word: this.queryNode(sourceQueries.word),
			wordUsage: this.queryNode(sourceQueries.wordUsage),
			wordDescription: this.queryNode(sourceQueries.wordDescription),
			// learnMore: this.queryNode(".lk-wod-more", true),
		};
	}

	public async init(website: string) {
		await this.initDocument(website);
		this.initWordData();
	}
}

export default WOtD;
