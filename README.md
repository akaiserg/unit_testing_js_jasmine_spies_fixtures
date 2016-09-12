# Using Jasmine spies and fixtures

In order to  test JS modules which use  $ajax or  maybe  promises ($.Deferred()), you   can use   the following  features  of Jasmine  <b>spyOn</b>  and  <b>jasmine.Ajax.stubRequest</b>.  Besides ,   if you have a module  that  renders  some html   you can use <b>jasmine.getFixtures</b>  to test  it in your unit tests.


In this example  there are five js  modules:

.- App      :  Main module that dependes  of  ModuleA and ModuleB.

.- ModuleA  :  This renders  information on the webpage and  it depends of AjaxModule.

.- ModuleB  :  This renders  information on the webpage and  it depends of PromiseModule.

.-AjaxModule: Calls a json file  and uses $.ajax.

.-PromiseModule: Calls a json file and uses $.Deferred().


Each modules is completely tested by using  these  features named  before.

<br>

To  install  node dependencies

```javascript
npm install
```

To  install  needed libraries

```javascript
bower install
```


To  run the server

```
 node_modules/http-server/bin/http-server  -p 8889
```

To  see the example

```
 http://localhost:8889/src/
```

To see the tests

```
http://localhost:8889/tests/test.html
```
