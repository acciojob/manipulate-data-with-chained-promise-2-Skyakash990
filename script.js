//your JS code here. If required.

function getNumbers() {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	}) 
}
getNumbers()
	.then((numbers)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let evenNum=numbers.filter(num=>num%2 === 0);
			document.getElementById("output").textContent=JSON.stringify(evenNum);
			resolve(evenNum);
		},1000)
	})
	}).then((evenNum)=>{
		return new Promise((resolve)=>{
		setTimeout(()=>{
			let multiply=evenNum.map(num=>num*2);
			document.getElementById("output").textContent=JSON.stringify(multiply);
			resolve(multiply);
		},2000);
		})
		
	})