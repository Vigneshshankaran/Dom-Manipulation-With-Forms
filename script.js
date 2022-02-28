function myFunction() {
   //value from checkbox to table 
    let foods=[]
    let Biriyani = document.getElementById("checkbox1")
    if(Biriyani.checked){
          foods.push(Biriyani.value);
   }
   let vegRice = document.getElementById("checkbox2")
    if(vegRice.checked){
          foods.push(vegRice.value);
   }
   let chapati = document.getElementById("checkbox3")
    if(chapati.checked){
          foods.push(chapati.value);
   }
   let vegMeal = document.getElementById("checkbox4")
   if(vegMeal.checked){
         foods.push(vegMeal.value);
  }
  let iceCream = document.getElementById("checkbox5")
  if(iceCream.checked){
        foods.push(iceCream.value);
 }

     if(foods.length>1){
      //value to table
      let table = document.getElementById("myTable");
      let row = table.insertRow(0);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);

      cell1.innerHTML = document.querySelector("#firstName").value
      cell2.innerHTML = document.querySelector("#lastName").value
      cell3.innerHTML = document.querySelector("#address").value
      cell4.innerHTML = document.querySelector("#pincode").value
      cell5.innerHTML = document.querySelector("#gender").value
      cell6.innerHTML = foods
      cell7.innerHTML = document.querySelector("#state").value
      cell8.innerHTML = document.querySelector("#country").value
      //clearing form
      let frm = document.getElementById('form');
      frm.reset()
     }
     else{
     alert("must choose at least 2 out of 5 options")
     }   
  }