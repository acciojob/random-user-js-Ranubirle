function myage(){
	let p=document.getElementById('A')
 p=fetch("https://randomuser.me/api/");
p.then(data=>{
 
	return data.json();
})
.then(data=>{
	console.log(data);
	let info=data;
	document.getElementById('age1').innertext=info.results[0].dob[0].age;
	
	

	
		})
}
myage();


