# FNZ DVD Rental System - Developer Code Test

## Introduction
Welcome to the FNZ DVD Rental System code test, designed for candidates applying for the frontend React developer position at our company. This test involves a simple web application simulating the operations of a small DVD rental store. The application allows users to browse available DVDs, rent DVDs, and return DVDs.

## Objective
Your primary objective is to review and enhance the current system based on the provided business rules. Throughout this process, you are expected to identify and fix bugs, refactor the code for better maintainability, and possibly extend the system with new features as per the business requirements.

## Your Tasks
- **Understand and Implement Business Rules:** Ensure the system adheres to the business rules outlined below. Some parts of the system may already comply, while others might need adjustments or complete implementation.

- **Bug Identification and Resolution:** As you navigate through the code and business rules, identify any bugs that prevent the system from operating as intended. Once identified, you should aim to fix these bugs.

- **Code Refactoring:** Assess the current codebase for opportunities to refactor for clarity, efficiency, and maintainability. Refactoring is encouraged, especially if it enhances the readability or performance of the application.

- **Testing (Optional):** While not required, writing tests for your code is highly encouraged. We use Jest and React Testing Library for testing. You can run `npm test` to run the tests.

## Setup

### Prerequisites
- Node.js (v14.17.0 or higher)
- npm (v6.14.13 or higher)
- Git
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- A code editor (VSCode, Sublime Text, Atom, etc.)

### Installation
1. Clone the repository to your local machine: `git clone https://gitfront.io/r/amillard98/kc8Gwe8661QA/FNZ-DVD-Rental.git`
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.
6. Run `npm test` to run the tests.

## Business Rules
### Rentals Page
**Rentals Table**

The rentals table should display all rentals sorted by the "Rented At" date in descending order. The table should include the following columns:

- **Customer:** Display the customer's first name and last name.
- **DVD:** Display the DVD title.
- **Rented At:** Display the rental date in format dd/mm/yyyy, HH:MM:SS.
- **Status:** Display the rental status (RENTED or RETURNED).
- **Actions:** 
  - **Details: (NEW REQUIREMENT)** Display a "Details" button that, when clicked, shows the rental details card below the table.
  - **Return DVD:** Display a "Return DVD" button for rentals with a "RENTED" status. Clicking this button should update the rental status to "Returned".

**Rental Details Card (NEW REQUIREMENT)**

The rental details card should be hidden by default. When the user clicks on a "Details" button in the rentals table, the card should display the following information:

- **Customer:** Display the customer's first name, last name, date of birth, age (using the calculateAge helper function), and email.
- **Rented At:** Display the rental date in format dd/mm/yyyy, HH:MM:SS.
- **Status:** Display the rental status (RENTED or RETURNED).
- **Title:** Display the DVD title.
- **Genre:** Display the DVD genre.
- **Cast:** Display the DVD cast.
- **Director:** Display the DVD director.
- **Description:** Display the DVD description.
- **Actions:**
  - **Close:** Display a "Close" button that, when clicked, hides the rental details card.
  - **Return DVD:** Display a "Return DVD" button for rentals with a "RENTED" status. Clicking this button should update the rental status to "Returned".

### New Rental Page

The new rental page should allow users to rent a DVD to a customer. The page should include the following fields:

| Field         | Type     | Description                               | Validation                              |
|---------------|----------|-------------------------------------------|-----------------------------------------|
| DVD           | Dropdown | Select the DVD the customer wants to rent | Required                                |
| First name    | Text     | Enter the customer's first name           | Required, min length: 1, max length: 30 |
| Last name     | Text     | Enter the customer's last name            | Required, min length: 1, max length: 30 |
| Email address | Email    | Enter the customer's email address        | Required, valid email format            |
| Date of birth | Date     | Enter the customer's date of birth        | Required, must be 18 years or older     |

- **Create Rental Button:** Display a "Create Rental" button that, when clicked, creates a new rental record.
  - If the rental is successful, a success alert should display, and the input fields are reset. You should be able to see the new rental in the rentals table.
  - If the rental fails, an error alert should display with the appropriate error message.
- **Reset:** Display a "Reset" button that clears all input fields.