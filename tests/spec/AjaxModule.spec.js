describe('Ajax Module', function() {

    var ajaxModule;

    beforeEach(function(){

        ajaxModule= new AjaxModule();

        jasmine.Ajax.install();


    });

    afterEach(function() {

        jasmine.Ajax.uninstall();

    });

    it('ajaxModule should be created', function () {

        expect(ajaxModule).toBeDefined();

    });

    it("should make a call to execute ",function(){

        spyOn(ajaxModule, "execute").and.callThrough();;

        ajaxModule.execute(null,null,null,null);

        expect(ajaxModule.execute).toHaveBeenCalled();

    })

    it("When the ajax request responses with a 200  the ajaxModule should  use the correct function",function(){

        jasmine.Ajax.stubRequest('http://localhost:8889/data/data.json').andReturn({
            status: 200,
            dataType: "json",
            responseText:'{"data":{"name":"the name", "lastName":"The last name" }}'
        });
        var objectSpy= function(){
            this.okMethod= function(){
                console.info("ok");
                return function(status,data){};
            };
        };
        var oSpy=new objectSpy();
        spyOn(oSpy, 'okMethod');
        ajaxModule.execute("http://localhost:8889/data/data.json","GET",oSpy.okMethod(),null);
        //var response = jasmine.Ajax.requests.mostRecent();
        //console.info(response);
        expect(oSpy.okMethod).toHaveBeenCalled();

    })

    it("When the ajax request responses with a 500  the ajaxModule should  use the correct function",function(){

        jasmine.Ajax.stubRequest('http://localhost:8889/data/data.json').andReturn({
            status: 500
        });
        var objectSpy= function(){
            this.errorMethod= function(){
                console.info("error");
                return function(status,data){};
            };
        };
        var oSpy=new objectSpy();
        spyOn(oSpy  , 'errorMethod');

        ajaxModule.execute("http://localhost:8889/data/data.json","GET",null,oSpy.errorMethod());
        //var response = jasmine.Ajax.requests.mostRecent();
        //console.info(response);
        expect(oSpy.errorMethod).toHaveBeenCalled();

    })

});
