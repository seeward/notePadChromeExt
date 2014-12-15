$(document).ready(function() {

        function init() {
        	$("#msg").hide();
        	if(window.localStorage.getItem("saved")){
        		data = window.localStorage.getItem("saved");
                $("#txtBody").val(data);

               
        	}
            
            };

            $("#remember").click(function(){
            	savedTxt = document.getElementById("txtBody").value;
                        window.localStorage.setItem("saved", savedTxt);
                        $("#msg").show();
                        $("#msg").html("Note contents saved.");
                        setTimeout(function(){
                        	$("#msg").hide();
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

            $("#clear").click(function(){
            	$("#txtBody").val("");
            	window.localStorage.removeItem("saved");
            });
init();
          
        });