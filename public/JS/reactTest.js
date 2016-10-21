//JASMINE TESTING
describe('About-Me Page Test', function () {
    var TestUtils = React.addons.TestUtils;
    var TimerExampleComponent, element, renderedDOM;

        element = React.createElement(TimerExample);


    it("Should be keeping track of time", function(){
        expect(TimerExampleComponent).toBeGreaterThan(0);
    });
});
