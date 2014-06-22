if (confirm('LogiBot now recognizes you on Connect And Sell!'))
    chrome.runtime.sendMessage({type:'request_password'});
