let employees = [
    { id: 101, name: "Ajay", sal: 45000 },
    { id : 102, name: "Banu",sal: 55000 },
    { id: 103, name: "Sanju", sal: 65000 },
    { id: 104, name: "Rahul", sal: 75000 },
    { id: 105, name: "Balaji", sal: 85000 },
    { id: 106, name: "Rijo", sal: 95000 },
    { id: 107, name: "Kiran", sal: 105000 },
    { id: 108, name: "Girish", sal: 115000 },
  ];

  function display(){
      console.log("Test");
      let rows = "";
      employees.forEach((employee)=>{
          if(sal>=50000)
          rows = rows + `<tr><td>${employee.id}</td>
                             <td>${employee.name}</td>
                             <td>${employee.sal}</td>
          </tr>`;
      });
      console.log(rows);
      document.getElementById("sanju").innerHTML = rows;
  }