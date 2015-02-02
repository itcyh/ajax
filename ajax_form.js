function createXmlHttp() {
    var xmlHttp = null;
     
    try {
        //Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        //IE
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
     
    return xmlHttp;
}
 
function submitForm(formId, tipId) {
    var xmlHttp = createXmlHttp();
    if(!xmlHttp) {
        alert("您的浏览器不支持AJAX！");
        return 0;
    }
     
    var e = document.getElementById(formId);
    var tip = document.getElementById(tipId);
    var url = e.action;
    var inputs = e.elements;
    var postData = "";
    for(var i=0; i<inputs.length; i++) {
        switch(inputs[i].type) {
            case "text":
                postData += inputs[i].name + "=" + inputs[i].value + "&";
            break;
            case "password":
                postData += inputs[i].name + "=" + inputs[i].value + "&";
            break;
            case "radio":
                if(inputs[i].checked) {
                    postData += inputs[i].name + "=" + inputs[i].value + "&";
                }
            break;
            case "checkbox":
                if(inputs[i].checked) {
                    postData += inputs[i].name + "=" + inputs[i].value + "&";
                }
            break;
            case "textarea":
                if(inputs[i].checked) {
                    postData += inputs[i].name + "=" + inputs[i].value + "&";
                }
            break;
            default:
                continue;
        }
    }
     
    postData += "t=" + Math.random();
     
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            tip.innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.send(postData);
}
