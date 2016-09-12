describe('ModuleB', function() {

    var oSpy;

    function getSpyWithPromise(){

        var objectSpy= function(){

            this.getData= function(url,method){

                console.info("in the spy");
                var dfd = new $.Deferred();
                    dfd.resolve(data());
                return dfd.promise();

            };

            var data=function(){

                var data=[];
                data.push({esEsp:"1",estId:"38976"});
                data.push({esEsp:"2",estId:"38977"});
                data.push({esEsp:"3",estId:"38978"});
                return {
                  "data":data
                };

            }
        };
        oSpy=new objectSpy();
        spyOn(oSpy  , 'getData').and.callThrough();
        return oSpy;

    }

    var moduleB;


    beforeEach(function(){

        moduleB= new ModuleB(getSpyWithPromise());

    });

    afterEach(function() {
    });

    it('moduleA should be created', function () {

        expect(moduleB).toBeDefined();

    });

    it("The method getData should  be called  once",function(){

        moduleB.getInfo();

        expect(oSpy.getData).toHaveBeenCalled();

    });


    it("The promise  should return  the correct  list of objects",function(){

        var promise=moduleB.getInfo();

        promise.then(function(data){
            expect(data.length).toEqual(3);
            expect(data[0].value).toBeDefined();
            expect(data[0].id).toBeDefined();
        });


    });

});