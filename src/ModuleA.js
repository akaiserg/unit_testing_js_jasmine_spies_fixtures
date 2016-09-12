"use strict";
var ModuleA= function(ajaxModule){

    var __ajaxModule=ajaxModule;
    var __url="http://localhost:8889/data/data.json";
    var __name="";
    var __lastName="";
    var __error1="";

    this.setId=function(name,lastName,error1){

        __name=name;
        __lastName= lastName;
        __error1=error1;

    }

    this.setInfo= function(){

        __ajaxModule.execute(__url,"GET",getSuccessHandler(),getErrorHandler());
    }

    var getErrorHandler=function(){

        return  function(status,data){
            console.info("error",status,data);
            $("#"+__error1).html(status+"-- "+data);
        }

    }

    var getSuccessHandler=function(){

        return  function(status,data){
            console.info("ok",status,data);
            $("#"+__name).html(data.data.name);
            $("#"+__lastName).html(data.data.lastName);
        }

    }

}