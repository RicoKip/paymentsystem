//generate receipt
document.getElementById('button').addEventListener('click', loadReceipt);

//load receipt details
function loadReceipt(){
	var data = new FormData();
	data.append("BillNumber", "LR1916-1000010");

	/*var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});

	xhr.open("POST", "http://biller.revenuesure.co.ke/testing/api/billing/GetReceipt", true);
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.setRequestHeader("Postman-Token", "374d0538-7e66-45d1-8249-513dec995fe3");

	xhr.send(data);*/

	//fetch request
	fetch('http://biller.revenuesure.co.ke/testing/api/billing/GetReceipt',{
		method: 'POST',
		headers: {
			"Access-Control-Allow-Origin": "http://biller.revenuesure.co.ke/testing/api/billing/GetReceipt",
			"cache-control": "no-cache",
			"Content-Type": "text/plain;charset=UTF-8"
		}
	})
	  .then(response => {
	    if (response.status === 200) {
	      return response.json();
	    } else {
	      throw new Error('Something went wrong on api server!');
	    }
	  })
	  .then(response => {
	    console.debug(response);
	    // ...
	  }).catch(error => {
	    console.error(error);
	  });
}