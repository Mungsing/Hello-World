(function displayName() {
    let name = prompt("Enter your Name");
    if(name && name !== null) {
       alert("Hello! " +name);
    }else {
      alert("Please try again");
      displayName();
    }
})();
