# Employee Management App

This is a simple Employee Management application built with **React**. It allows administrators to manage tasks for employees, while employees can view their assigned tasks. The app currently uses `localStorage` to persist data on the client-side.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Limitations](#limitations)

---

## Features

### Admin
- **Log In**: Admins can log in with a predefined email and password.
- **Task Management**: Admins can create tasks and assign them to specific employees.
- **View All Tasks**: Admins can see a list of all tasks assigned to employees with their status (New, Active, Completed, Failed).

### Employee
- **Log In**: Employees can log in using their email and password.
- **View Tasks**: Employees can view their assigned tasks, including status and details.
- **Task Status**: Employees can see the count of tasks categorized by status.

## Technologies

- **React**: Frontend library used for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling the components.
- **Context API**: For state management and passing user authentication state across components.
- **localStorage**: Used to store user and task data on the client side.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/employee-management-app.git
   ```
   ```bash
   cd employee-management-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the specified port) to view the app.


## Usage

1. **Admin Login**:
   - Email: `admin@me.com`
   - Password: `123`
   - After logging in, the admin can create tasks and assign them to employees.

2. **Employee Login**:
   - Employees log in using their own email and password.
   - Employees can view their task list and check the task status.

   ## Limitations

- **localStorage Usage**: Data persistence relies on `localStorage`, which is not suitable for large-scale applications or sensitive data.
- **Lack of Backend**: The app currently has no backend, so it’s limited to single-device usage.
- **Limited Role Management**: Only basic admin and employee roles are implemented, without any advanced permissions.



