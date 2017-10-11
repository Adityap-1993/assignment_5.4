function printdetails()
{ 
   
  document.write("The name of employee : " +this.username + "<br>");
  document.write("The skills of employee : " +this.skills +"<br>");
  document.write("The salary of employee : " +this.basic_salary +"<br>");

}

function change_salary(amount)
{
   this.newsalary=amount;
   alert("The salary updated to amount : " + amount + '\n');
}

function final_details()
{ 
  document.write("Final details are :-" + "<br>");
  document.write("The name of employee : " +this.username + "<br>");
  document.write("The skills of employee : " +this.skills + "<br>");
  document.write("The salary of employee : " +this.newsalary );
}

function Employee(username,skills,basic_salary)                       //object constructor
{
      this.username=username;
      this.skills=skills;
      this.basic_salary=basic_salary;
      this.printdetails=printdetails;
      this.change_salary=change_salary;
      this.final_details=final_details;
}

