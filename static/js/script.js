// Example POST method implementation:
async function postData(url = "", data = {}) { 
    const response = await fetch(url, {
      method: "POST", headers: {
        "Content-Type": "application/json", 
      }, body: JSON.stringify(data),  
    });
    return response.json(); 
  }

const sendButton = document.getElementById("sendButton");

// Add an event listener to the button
sendButton.addEventListener("click", () => {
    alert("Hey you clicked!");
    question = document.getElementById("question").value;
    document.getElementById("question").value = ""
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"

    question1.innerHTML = question.Input;
    question2.innerHTML = question.Input;
});
