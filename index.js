function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function ANamedFunction(){};
    }

function returnsAnAnonymousFunction() {
    return function() {};
}








    // describe("returnsAnAnonymousFunction()", () => {var fn; before(() => {fn = returnsAnAnonymousFunction(); }); it("returns a function", () => {expect(fn).to.be.a("function");});it("returns an anonymous function", () => {expect(fn.name).toeql("");});});});