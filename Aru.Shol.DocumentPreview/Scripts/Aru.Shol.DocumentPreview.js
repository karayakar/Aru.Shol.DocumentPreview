
$(document).ready(function () {

    var list = getCurrentList()

});

function getCurrentList(success, error) {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var listId = _spPageContextInfo.pageListId;
    
    var list = web.get_lists().getById(listId);
    context.load(list);

    context.executeQueryAsync(
     function () {
         alert("list Url" + list.URL);
         success(list);
     },
     error
    );
}

function PreviewDocument(urlsite, urlrelativelib, iddivpreviewdoc)
{

    var strDocNameEncoded = encodeURI($('input[id^="FileLeafRef"]').val());
    var strDocExt = $('input[id^="FileLeafRef"] + span').html();

    switch (strDocExt) {
        case ".doc":
        case ".docx":
        case ".xls":
        case ".xlsx":
        case "ppt":
        case "pptx":
            var strDocUrl = urlsite + "/_layouts/15/WopiFrame.aspx?sourcedoc=" + urlsite + "/" + urlrelativelib + "/" + strDocNameEncoded + strDocExt + "&action=default";
            break;
        default:
            var strDocUrl = urlsite + "/" + urlrelativelib + "/" + strDocNameEncoded + strDocExt;
            break;
    }

    var iddivpreview = "#" + iddivpreviewdoc;
    $(iddivpreview).prop('src', strDocUrl);
}
