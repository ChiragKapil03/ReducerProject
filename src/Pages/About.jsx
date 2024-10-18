import React from 'react'
import Header from '../Components/Header'

export default function About() {
  return (
    <div>
        <Header />
      <h1>I am About section</h1>
      <p>Problem Statement
            Create a component with two boxes side by side as shown in the picture. The left box should show the list of all employees available in the company along with their age and an ADD button. The right box should show the list of employees added in the Team by pressing ADD button along with REMOVE button and the average age of all them team members.  
            The sample list of all employees is available at the end of the document.
            
            Points to be noted
            1. The Team Members box should be empty initially.
            2. ADD button will add the employee to the Team box and will be disabled from Employee's List. Disabled can be shown by greying the employee’s details and removing ADD button.
            3. REMOVE button in the Teams List will remove the employee from the Team and will be enabled in the Employee’s List. Enabled can be shown by changing back font color to black and showing ADD button against the employee.
            4. You have to calculate the average age of all the Team Members and show it in the view as shown.
            5. SORT BY AGE: on clicking this button the team members must be sorted in ascending order of their age.
            6. Use separate component for left and right boxes.
    </p>
    </div>
  )
}
