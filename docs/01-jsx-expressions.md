[← Back to Course Index](../README.md)

# 🎓 JSX Expressions - Student Guide

## 📖 Core Concept
**"JSX looks like HTML, but you can escape into JavaScript using curly braces `{}`"**

---

## What are JSX Expressions?

### Key Points:
1. **JSX is not HTML** - It's JavaScript that *looks* like HTML
2. **Curly braces `{}` = JavaScript mode** - Anything inside is evaluated as JS
3. **One-way street** - You can't use JSX inside `{}`, only JavaScript

### Examples:
```jsx
// ❌ This is just text
<h1>Hello, userName</h1>

// ✅ This evaluates the variable
<h1>Hello, {userName}</h1>

// ✅ You can do ANY JavaScript expression
<p>{2 + 2}</p>  // Shows: 4
<p>{userName.toUpperCase()}</p>  // Shows: ALEX
<p>{getGreeting()}</p>  // Shows whatever the function returns
```

### Important Rule:
- Inside `{}` must be an **expression** (something that returns a value)
- Not statements like `if`, `for`, `while` - we'll learn alternatives for those later

---

## Types of Expressions You Can Use

### 1. Variables
```jsx
const name = "Alex";
return <h1>Hello, {name}</h1>;
```
Any variable in scope can be used inside `{}`.

---

### 2. Math Operations
```jsx
const price = 20;
const quantity = 3;
return <p>Total: ${price * quantity}</p>;
```
All JavaScript operators work: `+`, `-`, `*`, `/`, `%`

---

### 3. String Concatenation (Two Ways)

**Old Way: Using + operator**
```jsx
const first = "Jane";
const last = "Doe";
return <p>{"Hello, " + first + " " + last}</p>;
```

**Better Way: Template Literals**
```jsx
const first = "Jane";
const last = "Doe";
return <p>{`Hello, ${first} ${last}`}</p>;
```
Template literals (backticks) are cleaner for combining strings.

---

### 4. Function Calls
```jsx
function getDate() {
  return new Date().toLocaleDateString();
}

return <p>Today is: {getDate()}</p>;
```
**Remember:**
- Functions must be called with `()`
- The return value is what gets displayed
- Functions can live outside or inside the component

---

### 5. Object Properties
```jsx
const user = {
  name: "Sam",
  age: 25,
  role: "Student"
};

return (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>Role: {user.role}</p>
  </div>
);
```
**Remember:**
- Use dot notation: `object.property`
- Common pattern for displaying data from APIs/databases

---

### 6. Array Properties
```jsx
const colors = ["red", "blue", "green"];

return <p>We have {colors.length} colors</p>;
```
**Remember:**
- `.length` gives you the count
- We'll learn to display all items with `.map()` in [Section 3](03-list-rendering.md)

---

### 7. String/Array Methods
```jsx
const message = "hello world";
return <p>{message.toUpperCase()}</p>;  // HELLO WORLD

const items = ["Apple", "Banana"];
return <p>{items.join(", ")}</p>;  // Apple, Banana
```
Any JavaScript method that returns a value can be used.

---

## Common Mistakes to Avoid

### Mistake 1: Forgetting Curly Braces
```jsx
// ❌ Wrong - displays literal text "userName"
<h1>Hello, userName</h1>

// ✅ Correct
<h1>Hello, {userName}</h1>
```

---

### Mistake 2: Using Statements Instead of Expressions
```jsx
// ❌ Wrong - if is a statement, not an expression
<p>{if (age > 18) { "Adult" }}</p>

// ✅ Correct - use ternary operator (we'll cover this in [Section 2](02-conditional-rendering.md))
<p>{age > 18 ? "Adult" : "Minor"}</p>
```

---

### Mistake 3: Trying to Display Objects Directly
```jsx
const user = { name: "Alex", age: 25 };

// ❌ Wrong - can't render objects
<p>{user}</p>

// ✅ Correct - display specific properties
<p>{user.name}</p>
```

---

## When to Use Curly Braces

### You CAN use `{}` in two places:

**1. As children (content inside tags)**
```jsx
<h1>{userName}</h1>
<p>{2 + 2}</p>
```

**2. As prop values**
```jsx
<img src={imageUrl} />
<div className={isActive ? "active" : "inactive"} />
<UserProfile name={userName} age={userAge} />
```

### You DON'T need `{}` for:
- Static text: `<p>Hello</p>`
- Static strings in props: `<img src="photo.jpg" />`

---

## Real-World Example

Here's a complete component that combines multiple concepts:

```jsx
function StudentCard() {
  const student = {
    name: "Alex Johnson",
    grade: 95,
    course: "React Fundamentals",
    email: "alex@school.com"
  };

  const passingGrade = 60;

  function getStatus(grade) {
    return grade >= passingGrade ? "Passing" : "Needs Help";
  }

  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}%</p>
      <p>Status: {getStatus(student.grade)}</p>
      <p>Email: {student.email.toLowerCase()}</p>
    </div>
  );
}
```

**This example uses:**
- Object properties
- Function calls
- Ternary operator
- String methods

---

## 📝 What You'll Learn

By the end of this lesson, you'll be able to:
✅ Explain what `{}` does in JSX
✅ Use variables inside JSX
✅ Perform calculations in JSX
✅ Call functions in JSX
✅ Access object properties
✅ Use string/array methods
✅ Know when to use `{}` vs plain text
✅ Identify common mistakes

---

## 🤔 Think About It

- Why do we need curly braces? Why not just write JavaScript directly?
- What's the difference between `{userName}` and `"userName"`?
- Can you put an `if` statement inside `{}`? Why or why not?
- What happens if you try to display `{user}` where user is an object?

---

## 🎯 Practice Activities

### Try These on Your Own:
1. Create a component that displays your personal info (name, age, city) using variables
2. Build a calculator component that shows the result of different math operations
3. Make a greeting card that uses template literals to combine multiple pieces of text
4. Create a product card using an object with multiple properties
5. Display information from an array (like a list of your favorite movies)

---

## 🔄 What's Next?

### You've Already Learned:
- Basic component structure (from ClassList/UserProfile)
- Props (name, role, display_pic)
- JSX basics (tags, attributes)

### Coming Up Next:
- **[Section 2](02-conditional-rendering.md)**: Conditional Rendering (showing/hiding elements)
- **[Section 3](03-list-rendering.md)**: List Rendering (displaying arrays with `.map()`)
- State management (making components interactive)

---

## 📚 Additional Resources

### Official React Documentation:
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

### Practice Platforms:
- [React.dev Learn](https://react.dev/learn)
- [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)
- [Scrimba React Course](https://scrimba.com/learn/learnreact)

---

## ⚡ Quick Reference Cheat Sheet

```
JSX EXPRESSION CHEAT SHEET
═══════════════════════════

Display Variable:        <p>{name}</p>
Math:                    <p>{5 + 3}</p>
Function:                <p>{getName()}</p>
Object Property:         <p>{user.name}</p>
Array Length:            <p>{items.length}</p>
String Method:           <p>{text.toUpperCase()}</p>
Template Literal:        <p>{`Hello ${name}`}</p>

Where to use {}:
  ✓ Inside tags:         <h1>{value}</h1>
  ✓ In props:            <img src={url} />
  ✗ NOT for static text: <p>Hello</p>

Remember: {} = JavaScript mode!
```

---

[← Back to Course Index](../README.md)
