let i = 0;

$(window).on("unload", function() {
    alert("call");
	console.log("this will be triggered");

	for (let q = 0; q < i; q++) {
		localStorage.setItem("contact" + q, $("#contact" + q).text());
	}
	
	
});

let addBtn = document.getElementById("add_btn");


addBtn.addEventListener("click", addFunc);

function addFunc() {
	let firstName = $("#first_name").val();
	let firstSurname = $("#first_surname").val();
	let phoneNumb = $("#phone_number").val();
	let address = $("#address").val();
	

	if (firstName != "" && firstSurname != "" && phoneNumb != "" && address != "") {
		$("<p id=\"contact" + i++ + "\">Имя: " + firstName + " |  Фамилия: " + firstSurname + " |  Номер: " + phoneNumb + " |  Адрес: " + address + "</p>").appendTo("#list");
		$('<input type="button" id="btn' + (i-1) + '" value="Remove">').appendTo("#contact" + (i-1));
		$("#btn" + (i-1)).css("margin-left", "20px");
		
		for (let k = 0; k < i; k++) {
			$("#btn" + k).click(function() {
				$("#contact" + k).remove();
			});
		}

		
	}
	else {alert("Something is empty! Check all fields");}
}

// function cookieFromCheckbox()
// 	{
// 		var ch = [];
// 		$("input:checkbox").each(function(){
// 			var $el = $(this);
// 			if($el.prop("checked"))
// 			ch.push($el.attr("id"));
// 		});

// 		$.cookie("checkboxCookie", ch.join(','));
// 	}