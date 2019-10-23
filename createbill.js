//get form data
var myForm = document.getElementById('myform');

myForm.addEventListener('click', submitText);

//button submit to API function
function submitText(){
	 //console.log('button clicked');
	 var form = new FormData(this);

	 form.append("Customer", 'name');
	 form.append("Description", 'description');
	 form.append("Amount", 'amount');

	/*var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://biller.revenuesure.co.ke/testing/api/billing/CreateBill",
	  "method": "POST",
	  "headers": {
	  	"Access-Control-Allow-Origin": "http://biller.revenuesure.co.ke/testing/api/billing/CreateBill"
	    "cache-control": "no-cache",
	    //"Postman-Token": "3d39c971-57a4-4f7f-b236-1157027ad970"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});*/



	/*const request = new Request('http://biller.revenuesure.co.ke/testing/api/billing/CreateBill',
	 {method: 'POST', body: '{"foo": "bar"}', headers: '{"Access-Control-Allow-Origin": "http://biller.revenuesure.co.ke/testing/api/billing/CreateBill"}'});
 
	const URL = request.url;
	const method = request.method;
	const credentials = request.credentials;
	const bodyUsed = request.bodyUsed;*/

	//fetch request
	fetch("http://biller.revenuesure.co.ke/testing/api/billing/CreateBill",{
		async: true,
	    crossDomain: true,
		method: 'POST',
		headers: {
			"Access-Control-Allow-Origin": "http://biller.revenuesure.co.ke/testing/api/billing/CreateBill",
			"cache-control": "no-cache",
			"Content-Type": "text/plain;charset=UTF-8"
		},
		processData: false,
	    contentType: false,
	    mimeType: "multipart/form-data",
		body: form
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
	    console.log(error);
	  });

	 //XHR request to API
	 //var xhr = new XMLHttpRequest();
	 //xhr.open();
}