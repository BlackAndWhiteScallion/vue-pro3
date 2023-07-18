var data1 = {message:'Hello Vue'};
var app = new Vue({ 
    el: '#app',
    data: data1,
    created:function(){
        console.log('hi');
    },
    mounted:function(){
        console.log('mounted');
    },
    updated:function(){
        console.log('updated');
    },
});

