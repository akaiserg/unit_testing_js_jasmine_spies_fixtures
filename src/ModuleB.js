"use strict";
var ModuleB= function(promiseModule){

    var __promiseModule=promiseModule;
    var __url="http://localhost:8889/data/data2.json";

    this.getInfo= function(){

        var dfd = new $.Deferred();
        var promise=__promiseModule.getData(__url,"GET");
        promise.then(function(data){
            dfd.resolve(setData(data));
        });
        return dfd.promise();

    }

    var setData=function(rawData){

        var data=[];
        console.info(rawData);
        $.each( rawData.data,function( index, element ){
            //console.info(element.estId,index);
            data.push({id:index,value:element.estId});
        });
        //console.info(data);
        return data;
    }

}