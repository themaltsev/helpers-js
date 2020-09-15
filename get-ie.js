export function getIE() {
    let rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        let ua = navigator.userAgent;
        let re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    } else if (navigator.appName == 'Netscape') {
        let ua = navigator.userAgent;
        let re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

if(getIE() !== -1) {
//усли браузер ИЕ запускаем то что нужно
}
