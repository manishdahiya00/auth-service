import { calculateDiscount } from "./src/utils";

describe.skip("App", () => {
    it("It should return correct discount amount", () => {
        const dis = calculateDiscount(100, 10);
        expect(dis).toBe(10);
    });
});
