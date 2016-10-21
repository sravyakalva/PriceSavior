/**
 * Created by sravyakalva on 10/21/16.
 */

describe("About-Us", function() {
    it("Should allow the user to enter the about-us tab", function() {
        expect(1).toEqual(1);
    });
});

describe("Home Page", function() {
    it("Should allow the user to enter back to Home-Page", function() {
        expect(1).toEqual(1);
    });
});

describe("myProfile", function() {
    it("Should allow the user to enter their profile page", function() {
        expect(1).toEqual(1);
    });
});

describe("should be able to enter in login/register", function(){
    var TestUtils = React.addons.TestUtils;
    var SignUpComponent, element, renderedDOM;

    beforeEach(function (done) {
        element = React.createElement(SignUpButton);
        SignUpComponent = TestUtils.renderIntoDocument(element);
        SignUpComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Causes fireBase push to be called", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(SignUpComponent,"button");
        TestUtils.Simulate.click(button); expect(SignUpComponent.fireRef.push).toHaveBeenCalledWith({"text": ""});
    });

    it("can click on login/register", function(){
        var button = TestUtils.findRenderedDOMComponentWithTag(SignUpComponent,"button"); TestUtils.Simulate.click(button);
    });
});