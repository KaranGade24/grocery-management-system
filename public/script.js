const URL = "";

const allproductstablebody = document.querySelector("#all-products-table-body");
const revenueTBody = document.querySelector("#revenue-t-body");

// 1. FOR ADD PRODUCT
const addProductButton = document.querySelector("#add-product");
const addProductBox = document.querySelector(".add-product-input");
// 2. FOR UPDATE PRODUCT
const updateProductButton = document.getElementById("update-product");
const updateProductBox = document.querySelector(".update-product-input");
// 3. FOR REMOVE PRODUCT
const removeProductButton = document.querySelector("#remove-product");
const removeProductBox = document.querySelector(".remove-product-input");
// 4. FOR TODAY REVENUE
const revenueProductButton = document.querySelector("#today-revenue");
const revenueProductBox = document.querySelector("#total-revenue");
// 5. ALL PRODUCT TABLE
const allProductButton = document.querySelector("#all-product");
const allProductBox = document.querySelector(".all-product-list");

//6. SELL PRODUCT

const sellProductBtn = document.querySelector("#sell-product");
const sellBox = document.querySelector(".sell-box");
const sellPId = document.querySelector("#pro-id");
const sellPQuantity = document.querySelector("#sell-quntity");
const sellBtn = document.querySelector("#sell-btn");

//ADD PRODUCT INPUT

const productName = document.querySelector("#product-name");
const productId = document.querySelector("#product-id");
const productQuantity = document.querySelector("#product-quantity");
const productPrice = document.querySelector("#product-price");
const addProductBtn = document.querySelector("#add-product-button");

//UPDATE PRODUCT

const updateProduct = document.querySelector(".update-product");
const updateBtn = document.querySelector("#update-button");
const cancelBtn = document.querySelector("#cancel-button");
const updatedName = document.querySelector("#product-update-name");
const updatedPrice = document.querySelector("#product-update-price");
const updatedQuantity = document.querySelector("#product-update-quantity");


const deleteSoldBtn = document.querySelector("#del-revenue")


// 1. FOR ADD PRODUCT

// addProductBox.style.display = "none";
addProductBox.style.display = "none";

addProductButton.addEventListener("click", () => {
  if (addProductBox.style.display == "none") {
    addProductBox.style.display = "block";
    updateProductBox.style.display = "none";
    removeProductBox.style.display = "none";
    revenueProductBox.style.display = "none";
    sellBox.style.display = "none";
    //   sellProductBox.style.display = "none";
    allProductBox.style.display = "none";
  } else {
    addProductBox.style.display = "none";
  }
});

// 2. FOR UPDATE PRODUCT

// updateProductBox.style.display = "none";

// updateProductButton.addEventListener("click", () => {
//   console.log("ok");
//   if (updateProductBox.style.display == "none") {
//     updateProductBox.style.display = "block";
//     removeProductBox.style.display = "none";
//     revenueProductBox.style.display = "none";
//     allProductBox.style.display = "none";
//     addProductBox.style.display = "none";
//     sellBox.style.display = "none";
//   } else {
//     updateProductBox.style.display = "none";
//   }
// });

// 3. FOR REMOVE PRODUCT

// removeProductBox.style.display = "none";

// removeProductButton.addEventListener("click", () => {
//   if (removeProductBox.style.display == "none") {
//     removeProductBox.style.display = "block";
//     updateProductBox.style.display = "none";
//     allProductBox.style.display = "none";
//     addProductBox.style.display = "none";
//     revenueProductBox.style.display = "none";
//     sellBox.style.display = "none";
//   } else {
//     removeProductBox.style.display = "none";
//   }
// });

// 4. FOR TODAY REVENUE
revenueProductBox.style.display = "none";

revenueProductButton.addEventListener("click", () => {
  if (revenueProductBox.style.display == "none") {
    revenueProductBox.style.display = "block";
    updateProductBox.style.display = "none";
    removeProductBox.style.display = "none";
    allProductBox.style.display = "none";
    addProductBox.style.display = "none";
    sellBox.style.display = "none";
  } else {
    revenueProductBox.style.display = "none";
  }
});

// 5. ALL PRODUCT TABLE
allProductBox.style.display = "none";
allProductButton.addEventListener("click", () => {
  if (allProductBox.style.display === "none") {
    allProductBox.style.display = "block";
    addProductBox.style.display = "none";
    updateProductBox.style.display = "none";
    removeProductBox.style.display = "none";
    revenueProductBox.style.display = "none";
    sellBox.style.display = "none";
  } else {
    allProductBox.style.display = "none";
  }
});

// 6. for sell table
sellBox.style.display = "none";

sellProductBtn.addEventListener("click", () => {
  if (sellBox.style.display == "none") {
    sellBox.style.display = "block";
    updateProductBox.style.display = "none";
    allProductBox.style.display = "none";
    addProductBox.style.display = "none";
    revenueProductBox.style.display = "none";
    removeProductBox.style.display = "none";
  } else {
    sellBox.style.display = "none";
  }
});

//ADD PRODUCT INTO MAIN TABLE

const a = (ID, NAME, QUANTITY, PRICE, index) => {
  const srno = document.createElement("td");
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  const tdQuantity = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdTotalPrice = document.createElement("td");
  const tdDel = document.createElement("td");
  const tdUpdate = document.createElement("td");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  btn1.innerText = "Delete";
  tdDel.appendChild(btn1);
  btn2.innerText = "Update";
  tdUpdate.appendChild(btn2);

  tdDel.addEventListener("click", () => {
    deleteData(ID);
  });

  //
  //
  updateProduct.style.display = "none";

  //
  //
  tdUpdate.addEventListener("click", () => {
    updateProduct.style.display = "block";
    updatedName.value = NAME;
    updatedPrice.value = PRICE;
    updatedQuantity.value = QUANTITY;
    updateBtn.addEventListener("click", () => {
      var updatedData = {
        NAME: updatedName.value,
        QUANTITY: updatedQuantity.value,
        PRICE: updatedPrice.value,
        ID: ID,
      };
      updateProduct1(updatedData);
      updateProduct.style.display = "none";
    });
    cancelBtn.addEventListener("click", () => {
      updateProduct.style.display = "none";
    });
  });
  //
  //
  srno.innerText = index;
  tdName.innerText = NAME;
  tdId.innerText = ID;
  tdQuantity.innerText = QUANTITY;
  tdPrice.innerText = PRICE;
  tdTotalPrice.innerText = eval(tdQuantity.innerText * tdPrice.innerText);

  const tableRow = document.createElement("tr");
  tableRow.appendChild(srno);
  tableRow.appendChild(tdId);
  tableRow.appendChild(tdName);
  tableRow.appendChild(tdQuantity);
  tableRow.appendChild(tdPrice);
  tableRow.appendChild(tdTotalPrice);
  tableRow.appendChild(tdDel);
  tableRow.appendChild(tdUpdate);

  allproductstablebody.appendChild(tableRow);
};
//
//

//
//
var grandTotal = 0;
function createRevenueTable(index, name, quantity, price) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${index}</td>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${price * quantity}</td>`;
  grandTotal += price * quantity;
  revenueTBody.appendChild(tr);
}
//
//

sellBtn.addEventListener("click", () => {
  var soldProductData = {
    ID: sellPId.value,
    QUANTITY: sellPQuantity.value,
  };
  sendSoldData(soldProductData);
});

//
//
async function getData() {
  const res = await fetch(URL + "/products");
  const data = await res.json();
  //   console.log(data.length, res);
  // return data;
  allproductstablebody.innerHTML = "";
  data.map((ele, index) => {
    a(ele.ID, ele.NAME, ele.QUANTITY, ele.PRICE, ++index);
  });
}

async function deleteData(id) {
  const res = await fetch(URL + "/product/delete/" + id, {
    method: "DELETE",
  });
  data = await res.json();
  // console.log(data);
  alert(data);

  getData();
}

async function addData(productData) {
  const res = await fetch(URL + "/product/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productData }),
  });
  const msg = await res.json();
  //   console.log(msg);
  alert(msg);
  getData();
}

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var productData = {
    NAME: productName.value,
    ID: productId.value,
    QUANTITY: productQuantity.value,
    PRICE: productPrice.value,
  };
  productName.value = "";
  productId.value = "";
  productQuantity.value = "";
  productPrice.value = "";

  addData(productData);
  getData();
});

async function updateProduct1(updatedData) {
  const res = await fetch(URL + "/product/update", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updatedData }),
  });
  const msg = await res.json();
  //   console.log(msg);
  alert(msg);
  getData();
  getSoldData();
}

getData();

async function sendSoldData(soldProductData) {
  const res = await fetch(URL + "/sold-product/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ soldProductData }),
  });
  const msg = await res.json();
  alert(msg);
  getData();
  getSoldData();
}

// sendSoldData(soldProductData);

//
//

//
//

async function getSoldData() {
  revenueTBody.innerHTML = "";
  const res = await fetch(URL + "/sold-products");
  const data = await res.json();
  //   console.log(data);
  var count = 0;
  var totalQ = 0;
  var totalP = 0;
  data.map((ele, index) => {
    createRevenueTable(index + 1, ele.NAME, ele.QUANTITY, ele.PRICE);
    count++;
    totalQ += ele.QUANTITY;
    totalP += ele.PRICE;
  });

  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>Total Count</td>
        <td>${count}</td>
        <td>${totalQ}</td>
        <td>${totalP}</td>
        <td>${grandTotal}</td>
        `;

  revenueTBody.appendChild(tr);
}

getSoldData();

// updateProduct1(updatedData);

// deleteData(10);

// getData();

const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("userPassword");
function login() {
  if (
    window.location.pathname == "/" &&
    userName == "user" &&
    userPassword == 123
  ) {
    window.location.href = "/";
  } else {
    window.location.href = "/login";
  }
}

if (!(userName == "user" && userPassword == 123)) {
  login();
}

const logOut = document.getElementById("log-out");
console.log(logOut);

logOut.addEventListener("click", () => {
  var conf = confirm("Are you sure");
  if (conf) {
    localStorage.clear();
    login();
    // location.reload();
  }
});



deleteSoldBtn.addEventListener("click",()=>{
  var conf= confirm("Are you sure");
  if(conf)
  {
    soldDel();
  revenueTBody.innerHTML = "";
    getSoldData();
  }
})

async function soldDel() {
  const res = await fetch("/sold-products/delete",{
    method:"DELETE",
  })
  const msg = await res.json();
  alert(msg);
}
