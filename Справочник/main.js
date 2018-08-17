let i = 0;

let addBtn = document.getElementById("add_btn");
let clearBtn = document.getElementById("clear");
//let searchBtn = document.getElementById("search_btn");
let searchField = document.getElementById("search");


//searchBtn.addEventListener("click", search);
searchField.addEventListener("keyup", search);
addBtn.addEventListener("click", addFunc);
clearBtn.addEventListener("click", clearLS);

$(document).ready(function() {
	for (let k = 0; k < 1000; k++) {
		try {
			let data = JSON.parse(localStorage.getItem("contact" + k));
			$("<p id=\"contact" + data.id + "\">ФИО: " + data.name + " |  Номер: " + data.phone + "</p>").appendTo("#list");
		} catch (e) {
			break;
		}
	}
});

function addFunc() {
	let firstName = $("#name").val();
	let phoneNumb = $("#phone_number").val();
	

	if (firstName != "" && phoneNumb != "") {
		let userData = {
			name: firstName,
			phone: phoneNumb,
			id: i
		};
				
		let serial = JSON.stringify(userData); //сериализация объекта
		try {
			localStorage.setItem("contact" + i, serial);
		} catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				alert("Превышен лимит контактов!");
			}
		}
		let returnObj = JSON.parse(localStorage.getItem("contact" + i));
		console.log(returnObj);
		$("<p id=\"contact" + i + "\">ФИО: " + returnObj.name + " |  Номер: " + returnObj.phone + "</p>").appendTo("#list");
		i += 1;


		// clear input fields
		$("#name").val("");
		$("#phone_number").val("");
	}
	else {alert("Something is empty! Check all fields");}
}


function clearLS() {
	localStorage.clear();
	$("#list").empty();
	alert("Contacts were cleared!");
}

function search() {
	let searchInfo = $("#search").val();

	
		
	for (let k = 0; k < 1000; k++) {
		try {
			let data = JSON.parse(localStorage.getItem("contact" + k));

			if (!data.name.includes(searchInfo) && !data.phone.includes(searchInfo)) {
				$("#contact" + k).hide();
			} else {
				$("#contact" + k).show();	
			}
		} catch (e) {
			break;
		}
	}
} 