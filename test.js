const rooms = [
    [{room: "Room 1", members: [{name: "Gray", status: "likes to cook their own food"}, {name: "Celo", status: "cooks with his brother, Gray"}, {name: "Doyjan", status: "busy with coding over a bottle of beer"}, {name: "Kobe", status: "our future pilot in the house YO!"}]}],
    [{room: "Room 2", members: [{name: "Rane", status: "Child"}, {name: "Ceianne", status: "Child"}, {name: "Princess", status: "Child"}, {name: "Gino", status: "Child"}]}],
    [{room: "Room 3", members: [{name: "Bashi", status: "the leader of the band"}, {name: "Ronen Joy", status: "she eats fashion for breakfast"}, {name: "Marianne", status: "just wanna have fun with Ronen Joy and the girls"}, {name: "Jarrie", status: "Jarrie Bee, bida ang saya!"}]}],
    [{room: "Room 4", members: [{name: "Amum", status: "just wants to have fun with Lola Cely"}, {name: "Lola Cely", status: "just wanna have fun with Amum"}, {name: "Adad", status: "shoots the ball like Steph Curry baby!"}, {name: "Pap Umz", status: "AKA Jack Sparrow"}]}]
  ];

  
  const container = document.querySelector(".container");
  const guestList = document.querySelector("li");
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  const show = document.querySelector(".show");
  const membersDiv = document.querySelector(".members");
  const p = document.querySelectorAll("p");
  const screenWidth = window.innerWidth;

  guestList.style.border = "none"
  guestList.style.backgroundColor = "transparent"

  modal.classList.toggle("hidden");

  
  
  rooms.forEach((test, index) => {

 


    const divGroup = document.createElement("div");
    divGroup.classList.add("group");
    divGroup.classList.add(`group${index + 1}`);
    container.appendChild(divGroup);
    const roomDiv = document.createElement("div");
    roomDiv.classList.add("rooms");
    divGroup.appendChild(roomDiv);
    roomDiv.innerHTML = test[0].room;
  
    divGroup.addEventListener("click", () => {
      modal.classList.toggle("show");
     modal.classList.remove("hidden");
      guestList.innerHTML = ""; // Clear
      test[0].members.forEach((member) => {
        modal.innerHTML = "There are " + test[0].members.length + " guests in " + "<strong>" + test[0].room + "</strong>";
        // console.log(member)
        const listItem = document.createElement("li");
        listItem.innerHTML = member.name;
        guestList.appendChild(listItem);

        const screenWidth = window.innerWidth;
    // console.log("Current viewport width: " + screenWidth);
       
          if(screenWidth < 400) {
            console.log("good")
            container.classList.add("containerMove")
          }
    


        for(let i = 0; i < p.length; i++) {
          p[i].style.display = "none";
        }
       
  
        // Add an event listener to the listItem for the mouseenter event
    listItem.addEventListener("click", () => {
    // modal.innerHTML = "<h3>" + member.name + "</h3>" + "<p>" + member.status + "</p>";
   
    // console.log(member); // Console log the corresponding member
  });


  listItem.addEventListener("mouseenter", () => {
    modal.innerHTML = "<h3>" + member.name + "</h3>" + "<p>" + member.status + "</p>";
   
    console.log(member); // Console log the corresponding member
  });
  // Add this event listener to clear the modal content when the mouse leaves the listItem
membersDiv.addEventListener("mouseleave", () => {
  modal.innerHTML = "There are " + test[0].members.length + " guests in " + "<strong>" + test[0].room + "</strong>";
    // modal.style.display = "none";
    
  });

      });
  
      console.log(test[0].room);
    //   console.log(test[0].members);
  
      document.querySelectorAll(".rooms").forEach((group) => {
        group.classList.remove("visited");
      });

      
  
      roomDiv.classList.add("visited");
    });
  });

  


membersDiv.addEventListener("mouseenter", () => {
  // Check if the guestList has any child elements
  if (guestList.children.length === 0) {
    console.log("Empty");
    modal.classList.add("hidden");
  
  } else {
    console.log("Available");
    modal.classList.add("show");
    modal.classList.remove("hidden");
  }
});


  
  body.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const isGroupOrRoomDiv = clickedElement.classList.contains("group") || clickedElement.classList.contains("rooms");
    const isInsideMembersDiv = membersDiv.contains(clickedElement);
    
    
  
    if (!isGroupOrRoomDiv && !isInsideMembersDiv) {
      document.querySelectorAll(".rooms").forEach((room) => {
        room.classList.remove("visited");
        guestList.innerHTML = "&nbsp;";
        guestList.style.border = "none";
        guestList.style.backgroundColor = "transparent";
        modal.classList.add("hidden");
        modal.classList.remove("show");
        const screenWidth = window.innerWidth;
      // console.log("Current viewport width: " + screenWidth);
       
          if(screenWidth < 400) {
            console.log("removed")
            container.classList.remove("containerMove")
          }


        for(let i = 0; i < p.length; i++) {
          p[i].style.display = "block";
        }
       
      });
    }
  });
  


// rooms.forEach(guest)()=>{
//     console.log()
// }



