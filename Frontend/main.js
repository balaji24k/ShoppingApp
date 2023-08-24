const url = "http://localhost:3000/onlineShop";

function addItem(event) {
  event.preventDefault();
  const itemName = document.getElementById("Item").value;
  const itemDescription = document.getElementById("Description").value;
  const itemPrice = document.getElementById("Price").value;
  const itemQuantity = document.getElementById("Quantity").value;
  
  const obj = {itemName,itemDescription,itemPrice,itemQuantity};
	console.log(obj,"before post")

  axios
    .post(url, obj)
    .then((response) => {
      console.log(response.data,"after post");
      showOnTheScreen(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(url)
    .then((response) => {
      console.log(response, "after refresh");
      response.data.forEach(item => showOnTheScreen(item));
    })
    .catch((err) => {
      console.log(err);
    });
});

function showOnTheScreen(item) {
  const parentNode = document.getElementById("menuItems");
  const childElement = 
    `<li id=${item.id}> ${item.itemName} - ${item.itemDescription} - ${item.itemPrice} - ${item.itemQuantity}
			<button onclick= buyHandler(${1},'${item.id}','${item.itemName}','${item.itemDescription}','${item.itemPrice}',${item.itemQuantity})>BUY 1 </button>
			<button onclick= buyHandler(${2},'${item.id}','${item.itemName}','${item.itemDescription}','${item.itemPrice}',${item.itemQuantity})>BUY 2 </button>
			<button onclick= buyHandler(${3},'${item.id}','${item.itemName}','${item.itemDescription}','${item.itemPrice}',${item.itemQuantity})>BUY 3 </button>
		</li>`;

  parentNode.innerHTML = parentNode.innerHTML + childElement;
  document.getElementById("Item").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Quantity").value = "";
}

function buyHandler(removeQuantity,itemId, name, description, price, avlQuantity) {
  // console.log("rem:",typeof removeQuantity,"avl:",typeof avlQuantity,"buyhandler")
  if (avlQuantity < removeQuantity) {
    alert("selected quantity not available!")
    return;
  }
	// console.log(removeQuantity,itemId, name, description, price, avlQuantity)
  avlQuantity -= removeQuantity;
  const element = document.getElementById(itemId);
  const parent = document.getElementById("menuItems");
  parent.removeChild(element);

  axios
    .put(`${url}/${itemId}`, {
      itemName: name,
      itemDescription: description,
      itemPrice: price,
      itemQuantity: avlQuantity,
    })
    .then((response) => {
			console.log(response.data,"after put")
      showOnTheScreen(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}