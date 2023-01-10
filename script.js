//your code here
const p=fetch("https://randomuser.me/api/");
p.then(data=>{
 console.log(data);
	return data.json();
})
.then(data=>{
	console.log(data);
})
const ans=data;
