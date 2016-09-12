"use strict";
var App=function(moduleA,moduleB){

    var __moduleA=moduleA;
    var __moduleB=moduleB;
    var __sum;
    var __table;

    this.setId=function(sum,table){

        __sum=sum;
        __table=table;

    }

    this.start=function(){

        __moduleA.setInfo();
        var promise=__moduleB.getInfo();
        promise.then(function(data){
            console.info(data);
            renderTable(data);
        });

    }

    var renderTable= function(data){

        var table=$("#"+__table);
        var sum=0;
        $.each( data,function( index, element ){
            table.append("<tr><td>"+(element.id+1)+"</td><td>"+element.value+"</td></tr>")
            sum+=parseInt(element.value);
        });
        $("#"+__sum).html(sum);

    }

};