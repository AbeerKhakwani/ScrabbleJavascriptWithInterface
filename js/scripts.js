// var Scrabble = function(letter) {
//
//     letter = letter.toLowerCase();
//
//     //console.log("lettr= ", letter)
//     var letterArray = letter.split("");
//
//     //console.log("letterArray= ", letterArray)
//
//     var point = {
//         a: 1,e: 1,i: 1, o: 1, u: 1, l:1,n: 1,r: 1,s: 1,t: 1,d: 2,
//         g: 2,
//         b: 3,c: 3,m: 3,p: 3,
//         f: 4,h: 4,v: 4, w: 4,y: 4,
//         k: 5,j: 8,x: 8,
//         q: 10,z: 10
//     };
//     var returnNumber = 0;
//
//     //Foreach function loops through the letterArray and
//     letterArray.forEach(function(word, index) {
//         var number = point[word];
//
//         number = Math.floor(number);
//         //console.log("number= ", number)
//
//
//         returnNumber += number;
//     });
//
//
//     return returnNumber;
//
//
// }
var Scrabble = function(string) {



    string= string.toLowerCase();
      var stringArray= string.split(" ");
      var letter = stringArray.join("");

    //console.log("lettr= ", letter)
    var letterArray = letter.split("");

    //console.log("letterArray= ", letterArray)

    var point = {
        a: 1,e: 1,i: 1, o: 1, u: 1, l:1,n: 1,r: 1,s: 1,t: 1,d: 2,
        g: 2,
        b: 3,c: 3,m: 3,p: 3,
        f: 4,h: 4,v: 4, w: 4,y: 4,
        k: 5,j: 8,x: 8,
        q: 10,z: 10
    };
    var returnNumber = 0;

    //Foreach function loops through the letterArray and
    letterArray.forEach(function(word, index) {
        var number = point[word];

        number = Math.floor(number);
        //console.log("number= ", number)


        returnNumber += number;
    });


    return returnNumber;


}


$(function(){
    $("form#scrable_form").submit(function(event){
        var word = $("input#word").val();
        var result = Scrabble(word);
        // console.log("result "+ result);

        $(".point").text(word+" is equal to "+result+ " points");
        $("#result").show();
        event.preventDefault();
    });

});
