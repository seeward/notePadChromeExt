$(document).ready(function() {

var currentNote = "defaultNoteName";

    function init() {
        $("#msg").hide();
        if (window.localStorage.getItem("saved")) {
            data = window.localStorage.getItem("saved");
            $("#txtBody").val(data.note);


        }

        getSaved();

    };


    function getSaved() {

        $("#noteList").html("");
        keys = Object.keys(localStorage);
        console.log(keys);
        $.each(keys, function(i, obj) {
            $("#noteList").append("<a class='noteRow btn btn-block btn-custom' id='" + obj + "'>" + obj + "</a>");
        });
        $("#noteList").show();
    };

    $("#noteList").on("click", "a", function(e){
        note = $(this).text();
        newNote = JSON.parse(window.localStorage.getItem(note));

        msgTxt = newNote.note;
        currentNote = note;
        $("#txtBody").val(msgTxt);

    });

    $("#remember").click(function() {
        $("#noteList").hide();
        data = {};
        savedTxt = document.getElementById("txtBody").value;
        data.note = savedTxt;
        data.key = prompt("Name this Note:");
        if (data.key != null) {
            window.localStorage.setItem(data.key, JSON.stringify(data));
        }

        $("#msg").show();
        $("#msg").html("Note contents saved.");
        setTimeout(function() {
            $("#msg").hide();

            getSaved();
        }, 1000);
    });









    $("#saver").click(function() {
        txtBody = document.getElementById("txtBody").value;
        //alert(txtBody);
        var blob = new Blob([txtBody], {
            type: "text/plain;charset=utf-8"
        });
        var name = prompt("Please enter filename");
        if (name != null) {
            saveAs(blob, name);
        }

    });

    $("#new").click(function(){
        $("#txtBody").val("");
        currentNote = "defaultNoteName";
    });



    $("#clear").click(function() {
        $("#txtBody").val("");

        if(currentNote != "defaultNoteName"){
            window.localStorage.removeItem(currentNote);
        }
        getSaved();
    });
    init();

});