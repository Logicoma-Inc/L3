//DOCS: http://api.qunitjs.com/category/test/
module("data-steamer tests");
test("basic", function() {
    ok(true, "ok test is true");
    //DOCS: http://api.qunitjs.com/ok/ 
   equal(1, true, "equal test with 1");
   notEqual(0, true, "not equal test with 0");
});