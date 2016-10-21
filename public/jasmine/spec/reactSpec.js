//JASMINE TESTING
describe('TimerExample', function () {
    var TestUtils = React.addons.TestUtils;
    var TimerExampleComponent, element, renderedDOM;
    beforeEach(function(){
        element = React.createElement(TimerExample);
        TimerExampleComponent=TestUtils.renderIntoDocument(element);
        TimerExampleComponent.setState({elipse: 0});
    });
    it("Should be keeping track of time", function(){
        expect(element).toBeGreaterThan(0);
    });
});

describe('FashionButton', function(){
    var TestUtils = React.addons.TestUtils;
    var ButtonComponent, element, renderedDOM;
    beforeEach(function(){
       element = React.createElement(Advice);
        ButtonComponent=TestUtils.renderIntoDocument(element);
    });
    it("Should pop up an alert", function(){
        let button=TestUtils.findRenderedDOMComponentWithTag(component,"button");
        expect(element).not.toBeUndefined();
    });

});

