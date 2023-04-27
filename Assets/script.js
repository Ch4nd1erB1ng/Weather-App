






















































































// fetch ("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2668e2b50c607d1932332bf121913aff}");




// function saveNewFriend(){
//     // get name user enters
//    var friendName = $("#newFriend").val();

//    if(!friendName){
//     alert("please type a name");
//     return;
//    }

//    var savedFriends = JSON.parse(localStorage.getItem("friends")) || [];

//    if(savedFriends.includes(friendName)){
//     alert(`You are already friends with ${friendName}`);
//     return;
//    }

//    savedFriends.push(friendName);

//    localStorage.setItem("friends", JSON.stringify(savedFriends));

//    showAllFriends();
// }

// function showAllFriends(){
//     //empty friend-list
//     $("#friend-list").empty();

//     // get friends from local storage
//     var savedFriends = JSON.parse(localStorage.getItem("friends")) || [];

//     //loop through all friends
//     for (let i = 0; i < savedFriends.length; i++) {
//         const friendName = savedFriends[i];
//         //add a button for each friend
//         $("#friend-list").append(`<button class="btn btn-primary">${friendName}</button>`)
//     }
// }

// showAllFriends();

// $("#add-friend").on("click", saveNewFriend)

// weather API
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2668e2b50c607d1932332bf121913aff}