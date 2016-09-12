describe('ModuleA', function() {


    function setUpHTMLFixture() {

        jasmine.getFixtures().set('  <div>\
                <p id="name_id"></p> \
                <p id="last_name_id"></p> \
                <p id="error1_id"></p>  \
            </div>  \
            <div class="post">---</div>\
        ');
    };

    var moduleA;

    beforeEach(function(){

        moduleA= new ModuleA(new AjaxModule());
        setUpHTMLFixture();
        jasmine.Ajax.install();

    });

    afterEach(function() {

        jasmine.Ajax.uninstall();

    });

    it('moduleA should be created', function () {

        expect(moduleA).toBeDefined();

    });

    it("should change the text for aaa ",function(){

        $( ".post" ).val("aaa");
        expect($( ".post").val()).toEqual("aaa");

    });

    it("should set the name and the last name into the html",function(){

        jasmine.Ajax.stubRequest('http://localhost:8889/data/data.json').andReturn({
            status: 200,
            dataType: "json",
            responseText:'{"data":{"name":"the name", "lastName":"The last name" }}'
        });
        moduleA.setId("name_id","last_name_id",null);

        moduleA.setInfo();

        expect($("#name_id").html()).toEqual("the name");
        //other way
        expect($("#name_id")).toHaveText("the name");

    });


    it("should set the error status and message into the html",function(){

        jasmine.Ajax.stubRequest('http://localhost:8889/data/data.json').andReturn({
            status: 500
        });
        moduleA.setId(null,null,"error1_id");


        moduleA.setInfo();

        expect($("#error1_id").html()).toEqual("500-- error");


    });


});