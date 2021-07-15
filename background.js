console.log("I am backgroung.js")
$.ajax({
    url:"http://localhost:80/",
    data:{test:"test data"},
    type:'POST',
    success: function(res){
        console.log('response:',res);
    },
    error: function(res){
        console.log('response:',res)
    }
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    console.log(message);  
});