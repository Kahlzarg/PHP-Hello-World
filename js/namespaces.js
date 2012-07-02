// Used to register a namespace
// registerNS("Michael.Ajax.Utilities");
function RegisterNS(ns) {
    var nsParts = ns.split(".");
    var root = window;

    for (var i = 0; i < nsParts.length; i++) {
        if (typeof root[nsParts[i]] == "undefined")
            root[nsParts[i]] = new Object();

        root = root[nsParts[i]];
    }
}
RegisterNS("js");
RegisterNS("js.Exception");
RegisterNS("js.Ajax");
RegisterNS("js.Mask");
RegisterNS("js.Progress");
RegisterNS("js.TimeOut");
RegisterNS("js.Pages.Index");
RegisterNS("js.Pages.Mobile");