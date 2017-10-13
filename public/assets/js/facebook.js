
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI(response);
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {

  FB.init({
    appId: '1440200726070603',
    cookie: true,// enable cookies to allow the server to access 
    // the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.10' // use graph api version 2.8
  });
  // 289087048261705
  FB.getLoginStatus(function (response) {
    if (response == "connected") {
      FB.logout();
    } else {
      statusChangeCallback(response);
    }
  });
};

// Logout Button
$("#fbLogOut").on("click", function () {
  fbLogout();

  window.location.href = "/";
});

function fbLogout() {
  FB.getLoginStatus(function (response) {
    if (response && response.status === 'connected') {
      FB.logout(function (response) {
        document.location.reload();
      });
    }
  });
}


(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI(response) {
  console.log('Welcome!  Fetching your information.... ');
  
    FB.api('/me', {
      fields: 'name,email,first_name,last_name,picture'
    }, function (response) {


  
    })
  // });
}


// $.ajax("/login", {
//   type: "POST",
//   data: {
//     email: response.email
//   }
// }).then(
//   function (data) {
//     console.log("data coming from backend", data);
//     // Reload the page to get the updated list
//     if (data.status === "donor") {
//       window.location.href = "/donor/dashboard/" + data.id;
//     } else if (data.status === "user") {
//       window.location.href = "/user/dashboard/" + data.id;
//     } else { // send to signup page
//       for (var i = 0; i < 1; i++) {
//         window.location.href = "/signup";
        
//       }
      
//     }
//   });

