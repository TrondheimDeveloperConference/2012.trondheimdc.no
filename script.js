$(function () {
    $(".mailBtn").bind("click", function () {
        var Content = $(this).parent().siblings(".content.hidden");
        toggleShow($(Content));
    });

    $("#Innsalg .ingress:nth-child(2)").click(function () {
        $("#Innsalg .hidden").removeClass("hidden");
    });

    $("form button").click(function () {
        // Add the iframe with a unique name
        var iframe = document.createElement("iframe");
        var uniqueString = "iframe_" +  new Date().getTime();
        document.body.appendChild(iframe);
        iframe.style.display = "none";
        iframe.contentWindow.name = uniqueString;

        // construct a form with hidden inputs, targeting the iframe
        var form = document.createElement("form");
        form.target = uniqueString;
        form.action = $("form").attr("action");;
        form.method = "POST";

        // repeat for each parameter
        form.appendChild(createInput("fbans_17_96393_0", $("#name").val()));
        form.appendChild(createInput("fbans_18_96396_0", $("#company").val()));
        form.appendChild(createInput("fbans_26_96404_0", $("#address").val()));
        form.appendChild(createInput("fbans_27_96406_0", $("#postnum").val()));
        form.appendChild(createInput("fbans_28_96407_0", $("#city").val()));
        form.appendChild(createInput("fbans_3_96408_0", $("#alternateaddress").val()));
        form.appendChild(createInput("fbans_20_96395_0", $("#phone").val()));
        form.appendChild(createInput("fbans_19_96394_0", $("#email").val()));

        document.body.appendChild(form);
        form.submit();
    });

    function createInput(name, value) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        return input;
    }
    
});

function crossDomainPost() {
    
}

function toggleShow($elm) {
	if ($elm.is(":visible"))
		$elm.hide();
	else
		$elm.show();
}
