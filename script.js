var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send()
request.onload =function(){
    var data = JSON.parse(request.response)
    console.log(data.common);
    
    //name of country, flag ,region,population,subregion //
   for(var obj of data){
    console.log(obj.name.common);

     console.log(obj.subregion);
  
    console.log(obj.region);

    console.log(obj.population);

    console.log(obj.flag)
}
}
//compar two josn//
var obj1 = {name: "Person 1", age:5}; 
var obj2 = {age5, name : "Person 1"};
