function myage(){
let p=fetch("https://randomuser.me/api/");
p.then(data=>{
 console.log(data);
	return data.json();
})
.then(data=>{
	console.log(data);
	let info=data;
	document.getElementById('age').innertext=info.results[0].dob[0].age;
	

	
		})
}
myage();

