Prince.registerPostLayoutFunc(function() {

    function getText(e) {
        var text = "";
        for (var x = e.firstChild; x != null; x = x.nextSibling) {
                if (x.nodeType == x.TEXT_NODE) {
                    text += x.data;
                }
            else if (x.nodeType == x.ELEMENT_NODE) {
                text += getText(x);
            }
        }
        return text;
    }

    function maketoc() {
        var hs = document.getElementsByClassName("chapter-head");
        var toc = document.getElementById('toc');
        for(var i=0; i<hs.length; i++) {
            var text = document.createTextNode(getText(hs[i]));
            hs[i].setAttribute("id", "ch"+i);
            var link = document.createElement("a");
            link.setAttribute("href", "#ch"+i);
            link.appendChild(text);
            var li = document.createElement("li");
            li.appendChild(link);
            toc.appendChild(li); 
        }
    }

    maketoc()
})
