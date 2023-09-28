const RECENT_ORDERS = [
  {
    id: 1,
    name: "IPhone",
    number: "007",
    paymentStatus: "Pending",
    delivereyStatus: "Not Delivered",
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    number: "007",
    paymentStatus: "Done",
    delivereyStatus: "Delivered",
  },
  {
    id: 3,
    name: "One Plus 10T",
    number: "007",
    paymentStatus: "Done",
    delivereyStatus: "Shipped",
  },
  {
    id: 4,
    name: "One Plus Monitor (23inch)",
    number: "007",
    paymentStatus: "Not Paid",
    delivereyStatus: "Not Delivered",
  },
  {
    id: 5,
    name: "Apple ICloth",
    number: "007",
    paymentStatus: "Done",
    delivereyStatus: "Delivered",
  },
];

function getAllProducts() {
  RECENT_ORDERS.forEach((item) => {
    showUI(item);
  });
}

function showUI(item) {
  const tr = document.createElement("tr");

  // id
  const id = document.createElement("td");
  id.innerText = item.id;

  // name
  const name = document.createElement("td");
  name.innerText = item.name;

  // number
  const number = document.createElement("td");
  number.innerText = item.number;

  // paymentStatus
  const paymentStatus = document.createElement("td");
  paymentStatus.innerText = item.paymentStatus;

  // deliveryStatus
  const delivereyStatus = document.createElement("td");
  delivereyStatus.innerText = item.delivereyStatus;

  tr.append(id);
  tr.append(name);
  tr.append(number);
  tr.append(paymentStatus);
  tr.append(delivereyStatus);

  // Append Table Row into Table
  document.querySelector("tbody").append(tr);
}

document.body.onload = getAllProducts();
