const RECENT_UPDATES = [
  {
    id: 1,
    name: "manoj",
    msg: "has Purchased his Order for Apple IPhone",
  },
  {
    id: 2,
    name: "Roshan Gupta",
    msg: "has Purchased his Order for Apple Macbook Pro",
  },
  {
    id: 3,
    name: "Job Orijoke",
    msg: "has Purchased his Order for Apple ICloth",
  },
  {
    id: 4,
    name: "Tanu S",
    msg: "has Purchased his Order for Samsung S23 Ultra",
  },
  {
    id: 5,
    name: "Rahul Yadav",
    msg: "has Purchased his Order for Samsung S22",
  },
];

function getAllRecentUpdates() {
  RECENT_UPDATES.forEach((item) => {
    showUI(item);
  });
}

function showUI(item) {
  // <div class="updates">
  //   <div class="profile-photo">
  //     <img src="./assets/pofile.png" alt="" />
  //   </div>
  //   <div class="message">
  //     <p>
  //       <b>Ajay Sharma</b> has Purchased his Order for Apple IPhone
  //     </p>
  //     <small class="text-muted">5 Minutes Ago</small>
  //   </div>
  // </div>;
  const updateDiv = document.createElement("div");
  updateDiv.className = "updates";

  // Profile Photo Div
  const profilePhotoDiv = document.createElement("div");
  profilePhotoDiv.className = "profile-photo";
  const profilePhotoImg = document.createElement("img");
  profilePhotoImg.src = "../assets/profile.png";
  profilePhotoDiv.append(profilePhotoImg);

  //   Messages Div
  const messageDiv = document.createElement("div");
  const infoP = document.createElement("p");
  infoP.innerHTML = `<b>${item.name}</b> ${item.msg}`;

  //   Time
  const smallTag = document.createElement("small");
  smallTag.className = "text-muted";
  smallTag.innerText = "5 Minutes age";

  messageDiv.append(infoP);
  messageDiv.append(smallTag);

  updateDiv.append(profilePhotoDiv);
  updateDiv.append(messageDiv);

  document.querySelector(".recent-updates").append(updateDiv);
}

document.body.onload = getAllRecentUpdates();
