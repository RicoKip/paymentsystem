//get form data
var myForm = document.getElementById('myform');

myForm.addEventListener('click', submitText);

//button submit to API function
function submitText(){
	 //console.log('button clicked');
	 var form = new FormData(this);

	 data.append("BillNumber", "LR1921-1000001");
	 data.append("PhoneNumber", 'phoneNumber');

	
	//fetch request
	fetch('http://biller.revenuesure.co.ke/testing/api/billing/MpesaPayment',{
		method: 'POST',
		headers: {
			"Access-Control-Allow-Origin": "http://biller.revenuesure.co.ke/testing/api/billing/MpesaPayment",
			"cache-control": "no-cache",
			"Content-Type": "text/plain;charset=UTF-8"
		},
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
	    console.error(error);
	  });

	
}