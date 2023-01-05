// alert("Coffee pee le");
document.getElementById("ranbir").innerText = "Dil se re ";
document.getElementsByName("textBox")[0].addEventListener("input", (e) => {
  console.log(e.target.value);
});
// let lent = ;
for (let i = 0; i < document.getElementsByName("textBox").length; i++) {
  document.getElementsByName("textBox")[i].addEventListener("input", (e) => {
    let data = e.target.value;
    if (data.length > 0) {
      document.getElementById("jesus").disabled = false;
    } else {
      document.getElementById("jesus").disabled = true;
    }
  });
}
//Code for radio button
