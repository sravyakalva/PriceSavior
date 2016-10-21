/**
 * Created by kikovinh on 10/21/2016.
 */
describe("Search Button", function() {
    it("Should allow user to enter data", function() {
        expect(UserInput).not.toBeNull();
    });

    it("Should allow users to search for data", function() {
        expect(UserInput).toBe(APIdata);
    });

    it("Should feed back users an image of product searched", function() {
        expect(SearchedImage).toBeDefined();
    });

    it("Should feed back users a description of product searched", function() {
        expect(SearchedDes).toBeDefined();
    });
});