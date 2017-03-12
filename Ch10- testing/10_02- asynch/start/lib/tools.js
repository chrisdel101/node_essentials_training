var https = require("https");


module.exports = {

	printName(person) {
		return `${person.last}, ${person.first}`;
	},
  loadWiki(person, callback) {
// to change time waited
    // this.timeout(5000);

     var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;

     https.get(url, function(res){

       var body = "";

       res.setEncoding("UTF-8")

       res.on("data", function(chunk){
         body += chunk
       })
       res.on("end", function(){
         callback(body);
       })
     });
  }

};

// https://en.wikipedia.org/wiki/Abraham_Lincoln
