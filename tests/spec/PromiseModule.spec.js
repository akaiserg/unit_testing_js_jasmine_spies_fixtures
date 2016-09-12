describe('Promise Module', function() {

    var promiseModule;

    beforeEach(function(){

        promiseModule= new PromiseModule();

        jasmine.Ajax.install();


    });

    afterEach(function() {

        jasmine.Ajax.uninstall();

    });

    it('promiseModule should be created', function () {

        expect(promiseModule).toBeDefined();

    });

    it("should make a call to getData ",function(){

        spyOn(promiseModule, "getData").and.callThrough();;

        promiseModule.getData("url","get");

        expect(promiseModule.getData).toHaveBeenCalled();

    });

    it("When the ajax request responses with a 200  the promiseModule should  return a promise with the info",function(){

        jasmine.Ajax.stubRequest('http://localhost:8889/data/data2.json').andReturn({
            status: 200,
            dataType: "json",
            responseText:'{"data":"ok"}'
        });

        var promise=promiseModule.getData("http://localhost:8889/data/data2.json","GET");

        promise.then(function(data){
            expect(data.data).toEqual("ok");
        });

    });

});