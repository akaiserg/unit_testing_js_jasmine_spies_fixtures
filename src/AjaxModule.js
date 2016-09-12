"use strict";
var AjaxModule=function(){

    this.execute= function(url,method,successMethod,errorMethod){

        ajaxCall(url,method,successMethod,errorMethod);
    }

    var ajaxCall=function(url,method,successMethod,errorMethod){

        $.ajax({
            //url: "http://localhost:8889/data/data.json",
            url:url,
            dataType: "json",
            method:method,
            success: function(data,state,raw) {
                console.info(raw);
                successMethod(raw.status,raw.responseJSON);
            },
            error: function(raw) {
                console.info(raw);
                errorMethod(raw.status,raw.statusText);
            }

        });

    }

};