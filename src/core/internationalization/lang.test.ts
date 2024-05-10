import { text, translate } from "@core";
import { setting } from "@modules";
describe("@core: internationalization", () => {
	it("English as the default", () => {
		expect(translate.loadedCode).toBe("en");
	});
	it("Setting another language", async (done) => {
		setting!.setSetting("lang", "bn");
		setTimeout(() => {
			expect(translate.loadedCode).toBe("bn");
			done();
		}, 500);
	});
	it("getting a registered term", () => {
		expect(text("search")).not.toBe("search");
	});
	it("getting a non registered term", () => {
		expect(text("SOMETHING-ELSE" as any)).toBe("SOMETHING-ELSE");
	});
});
