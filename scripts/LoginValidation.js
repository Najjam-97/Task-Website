$(document).ready(function() {
    $("#loginbutton").click(function () {
        var userName = $('#userName').val();
        var password = $('#password').val();
        authenticte(userName,password);
    });
});
function authenticte(userName,password){
    $.ajax({
        type: "POST",
        url: "https://api-stg.martcart.pk/api/v1/user/login",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        // The key needs to match your method's input parameter (case-sensitive).
        data:JSON.stringify({
            "userName": userName,
            "password": password
        }),
    }).success(function(data){
        window.location='http://localhost:63342/website/ProductListing.html?_ijt=7q6tu01gprubs9chhfjcl5rnfq';
    }).error(function(errMsg){
        alert(errMsg);
    })
}
