


const  requestUrl = "https://api.myjson.com/bins/a6da9";
const request = new XMLHttpRequest;

request.open('GET', requestUrl, true);
request.responseType = 'text';
request.send();

request.onload = function getjson () {
    var jsonText = request.response;
   var  jsonArray = JSON.parse(jsonText); 
    //var jsonStingify = JSON.stringify(jsonArray);
    let fiveQuestions = [];
   

     for (let i = 0; i < 5; i++) {
        fiveQuestions[i] = jsonArray.splice(20, 1);

        console.log(fiveQuestions[0][0].continent);
         console.log(fiveQuestions[0]);
 return jsonArray;
   }
}