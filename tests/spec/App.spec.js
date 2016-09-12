describe('App', function() {

    var app;

    function getModuleA(){

        var fakeModuleA= function(){

            this.setId= function(name,lastName,error1){

                console.info("moduleA in setId");

            };

            this.setInfo= function(){

                console.info("moduleA in setInfo");

            };
        };

        return new fakeModuleA();

    }

    function getModuleB(){

        var fakeModuleB= function(){

            this.getInfo= function(){

                var dfd = new $.Deferred();
                dfd.resolve(data());
                return dfd.promise();

            };

            var data=function(){

                var data=[];
                data.push({id:0,value:"38976"});
                data.push({id:1,value:"38977"});
                data.push({id:2,value:"38978"});
                return data;

            }
        };
        return  new fakeModuleB();

    };


    function setUpHTMLFixture() {

        jasmine.getFixtures().set('  <table border="1">\
            <thead>\
                <tr>\
                    <th>Id</th>\
                    <th>Value</th>\
                </tr>\
            </thead>\
            <tfoot>\
            <tr>\
                <td id="count_id">Total</td>\
                <td id="sum_id">--</td>\
            </tr>\
            </tfoot>\
        <tbody id="tbody_id">\
        </tbody>\
        </table>\
        ');
    };



    beforeEach(function(){

        app= new App(getModuleA(),getModuleB());

    });

    afterEach(function() {
        // after each test
    });

    it('App should be created', function () {

        expect(app).toBeDefined();

    });

    it("should render a table with three  fields, the sum  should be 116931 and the first id should be 1",function(){

        setUpHTMLFixture();
        app.setId("sum_id","tbody_id");
        app.start();
        expect($('#tbody_id >tr').length).toEqual(3);
        expect($('#sum_id').html()).toEqual("116931");
        expect($('#tbody_id').find(' td:eq(0)').html()).toEqual("1");

    })

});
