# Customer Complaint Form

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive Design](https://img.shields.io/badge/Responsive-Mobile--First-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

A responsive customer complaint form that validates user input, provides instant visual feedback, and ensures data quality before submission.

## 🚀 Live Demo

🔗 **Live Site:**  
https://yamkelamazwi.github.io/Customer-Complaint-Form/

🔗 **Source Code:**  
https://github.com/yamkelamazwi/Customer-Complaint-Form

---

## 📖 Overview

This project simulates a real-world customer complaint submission form where users can:

- Submit complaint details
- Validate personal and product information
- Choose complaint reasons
- Select desired solutions
- Receive real-time validation feedback
- Experience a mobile-first responsive interface

The application utilizes JavaScript validation, regular expressions, conditional logic, and DOM manipulation to provide a structured user experience.

---

## ✨ Features

### Form Validation

- Full Name validation
- Email address validation
- Order number validation
- Product code validation
- Positive quantity validation

### Dynamic Validation Feedback

- Green border for valid fields
- Red border for invalid fields
- Real-time validation on change events

### Conditional Validation

The form includes conditional fields that are only required when:

- "Other" is selected as a complaint reason
- "Other" is selected as a desired solution

### Responsive Design

- Mobile-first layout
- Tablet optimization
- Desktop enhancements
- Flexible form structure

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📋 Validation Rules

### Order Number

Must:

- Start with `2024`
- Be exactly 10 digits

Example:

```text
2024123456
```

### Product Code

Must follow the pattern:

```text
XX##-X###-XX#
```

Example:

```text
AB12-C345-DE6
```

### Quantity

Must:

- Be a positive integer
- Be greater than zero

### Complaint Description

Required only when:

```text
Other Complaint
```

is selected.

Must contain:

```text
20 or more characters
```

### Solution Description

Required only when:

```text
Other Solution
```

is selected.

Must contain:

```text
20 or more characters
```

---

## 📱 Mobile First Approach

The project was built with a mobile-first mindset by:

- Designing for smaller screens first
- Expanding layouts using media queries
- Maintaining readability across devices
- Improving usability on touch devices

---

## Challenges & What I Learned

This project was more challenging than it first appeared.

One of the biggest challenges was organizing validation logic without creating repetitive code. Early versions relied heavily on large submit handlers containing multiple validation checks. As the project grew, maintaining those checks became difficult.

Another challenge was learning how to work with:

- Regular expressions for pattern matching
- Conditional validation
- `Array.from()`
- `.some()`
- `Object.values()`
- `.every()`
- Change events
- Dynamic styling through JavaScript

The checkbox and radio button validation logic was particularly difficult because groups must be validated differently from standard input fields.

Through this project I strengthened my understanding of:

- DOM manipulation
- Event listeners
- Form validation
- JavaScript arrays and methods
- User experience considerations
- Responsive design principles

---

## Future Improvements

Potential future enhancements include:

- Form submission with backend integration
- Local storage support
- Dark mode
- Validation summary panel
- Success animations
- Complaint category analytics dashboard

---

## Author

### Yamkela Mazwi

Aspiring Front-End Developer focused on building responsive and accessible web applications while continuing to strengthen JavaScript fundamentals through practical projects.

GitHub:
https://github.com/yamkelamazwi

LinkedIn:
(Add your LinkedIn profile URL here)

---

## 📸 Screenshot

_Add a screenshot of the completed project here._

```
assets/images/customer-complaint-form.png
```

---

Built by **Yamkela Mazwi**
