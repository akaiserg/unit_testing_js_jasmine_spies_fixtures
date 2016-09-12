
// testing
describe('Ajax spy spec', function() {

  var app;

  beforeEach(function(){

    app= new App();
    jasmine.Ajax.install();


  });

    afterEach(function() {

        jasmine.Ajax.uninstall();

    });

  it('App should be created', function () {

    expect(app).toBeDefined();

  });

  it("Ajax should respond wiht an error when the url wasn't reached ",function(){

      jasmine.Ajax.stubRequest('http://localhost:8889/data/data.json').andReturn({
          status: 200,
          statusText: 'HTTP/1.1 200 OK',
          contentType: 'text/xml;charset=UTF-8',
          responseText: 'aaa'
      });
      app.init();
      var request = jasmine.Ajax.requests.mostRecent();
      expect(request.responseText).toEqual("aaa");

  })

});
