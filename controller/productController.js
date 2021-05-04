
$(function(){
    var operation = "A"; //"A"=Adding; "E"=Editing
    var selected_index = -1; //Index of the selected list item
    var products = localStorage.getItem("ProductList");//Retrieve the stored data
    products = JSON.parse(products); //Converts string to object
    document.getElementById("form").style.display = "none";
    if(products == null) //If there is no data, initialize an empty array
        products = [];
    List();
    function Add(){
        var index=1;
        var Prod = JSON.stringify({
            ID    : index+1,
            ProductsName  : $("#txtpName").val(),
            ProductsDescription : $("#txtPdesc").val(),
            Price: $("#price").val(),
            Currency : $("#currency").val()
        });
        products.push(Prod);
        index=index+ 1;
        localStorage.setItem("Products_List", JSON.stringify(products));
        alert("The data was saved.");
        return true;
    }

    function Edit(){
        products[selected_index] = JSON.stringify({
            id    : $("#txtID").val(),
            ProductsName  : $("#txtpName").val(),
            ProductsDescription : $("#txtPdesc").val(),
            Price : $("#price").val(),
            Currency : $("#currency").val()
        });//Alter the selected item on the table
        localStorage.setItem("ProductList", JSON.stringify(products));
        alert("The data was edited.")
        operation = "A"; //Return to default value
        return true;
    }

    function Delete(){
        products.splice(selected_index, 1);
        localStorage.setItem("ProductList", JSON.stringify(products));
        alert("Product deleted.");
    }
    function List(){
        $("#tblList").html("");
        $("#tblList").html(
            "<thead>"+
            "	<tr>"+
            "	<th>ID</th>"+
            "	<th>Product Name</th>"+
            "	<th>Product Description</th>"+
            "	<th>Price</th>"+
            "	<th>Currency</th>"+
            "	<th></th>"+
            "	</tr>"+
            "</thead>"+
            "<tbody>"+
            "</tbody>"
        );
        for(var i in products){
            var prod = JSON.parse(products[i]);
            $("#tblList tbody").append("<tr>"+
                "	<td>"+prod.id+"</td>" +
                "	<td>"+prod.ProductsName+"</td>" +
                "	<td>"+prod.ProductsDescription+"</td>" +
                "	<td>"+prod.Price+"</td>" +
                "	<td>"+prod.Currency+"</td>" +
                "	<td><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='cross.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
                "</tr>");
        }
    }
    $("#form").bind("submit",function(){
        if(operation == "A")
            return Add();
        else
            return Edit();
    });
    $(".btnEdit").bind("click", function(){
        operation = "E";
        document.getElementById("form").style.display = "block";
        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
        var prod = JSON.parse(products[selected_index]);
        $("#txtID").val(prod.id);
        $("#txtpName").val(prod.ProductsName);
        $("#txtPdesc").val(prod.ProductsDescription);
        $("#price").val(prod.Price);
        $("#currency").val(prod.Currency);
        $("#txtID").attr("readonly","readonly");
        $("#txtpName").focus();
    });
    $(".btnDelete").bind("click", function(){
        selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
        Delete();
        List();
    });

});
