var http = require('http');
var fs = require('fs');
console.log(__dirname);

function handleRequest(req, res) {

        fs.readFile(__dirname + '/index.html', function(err, data) {
            if (err) throw err;
        })
}

var PORT = 8080;
function handleRequest(request,response) {

switch (request.url) {
    case '/':
    resizeBy.end('Homepage');
    break;

    case '/about' :
    resizeBy.end('About Page');
    break;
    case '/contact' :
    res.end('Contact Page');
    break;
    default:
    res.end('Homepage');

}


}

var server = http.createServer(handleRequest); 

server.listen(PORT, function () {
    console.log('server has started on port' + PORT)
   
});

// function postAuction() {
//     // prompt for info about the item being put up for auction
//     inquirer
//       .prompt([
//         {
//           name: "item",
//           type: "input",
//           message: "What is the item you would like to submit?"
//         },
//         {
//           name: "category",
//           type: "input",
//           message: "What category would you like to place your auction in?"
//         },
//         {
//           name: "startingBid",
//           type: "input",
//           message: "What would you like your starting bid to be?",
//           validate: function(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           }
//         }
//       ])
//       .then(function(answer) {
//         // when finished prompting, insert a new item into the db with that info
//         connection.query(
//           "INSERT INTO auctions SET ?",
//           {
//             item_name: answer.item,
//             category: answer.category,
//             starting_bid: answer.startingBid || 0,
//             highest_bid: answer.startingBid || 0
//           },
//           function(err) {
//             if (err) throw err;
//             console.log("Your auction was created successfully!");
//             // re-prompt the user for if they want to bid or post
//             start();
//           }
//         );
//       });
//   }

  
