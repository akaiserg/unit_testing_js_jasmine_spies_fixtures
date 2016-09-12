"use strict";
var PromiseModule=function(){

    this.getData= function(url,method){

        var dfd = new $.Deferred();
        $.ajax({
            url : url,
            async : true,
            type : method,
            //data : JSON.stringify(data),
            contentType : "application/json",
            beforeSend : function(request) {

            },
            success : dfd.resolve
        });
        return dfd.promise();

    }

};