[← Back to Course Index](../README.md)

# 📋 JSX List Rendering - Student Guide

## 📖 Core Concept
**"Use JavaScript's `.map()` method to transform arrays of data into arrays of JSX elements"**

---

## What is List Rendering?

List rendering means displaying multiple similar items from an array. Instead of writing the same JSX over and over, we use `.map()` to:
- Loop through an array
- Transform each item into JSX
- Display all items dynamically

---

## The `.map()` Method Refresher

### How `.map()` works in JavaScript:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
// Result: [2, 4, 6, 8, 10]
```

### `.map()` creates a NEW array:
- Takes each item from the original array
- Runs a function on each item
- Returns a new array with the results

---

## Basic List Rendering

### Simple Array of Strings:
```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

**Output:**
- Apple
- Banana
- Orange
- Mango

---

## The `key` Prop - VERY IMPORTANT! 🔑

### Why we need keys:
React uses `key` to identify which items have changed, been added, or removed. Without keys, React can't efficiently update the list.

### ❌ Without key (warning in console):
```jsx
{fruits.map((fruit) => (
  <li>{fruit}</li>
))}
```

### ✅ With key (correct):
```jsx
{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}
```

### ⭐ Best practice - Use unique IDs:
```jsx
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" }
];

{fruits.map((fruit) => (
  <li key={fruit.id}>{fruit.name}</li>
))}
```

**Key rules:**
- Keys must be **unique** among siblings
- Keys should be **stable** (don't change between renders)
- Use IDs from your data when possible
- Using `index` is okay for static lists, but avoid for dynamic lists (items can be added/removed)

---

## Rendering Arrays of Objects

### Product List Example:
```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

### Student Card Example:
```jsx
function ClassList() {
  const students = [
    { id: 1, name: "Alex", grade: 95, status: "Active" },
    { id: 2, name: "Sam", grade: 87, status: "Active" },
    { id: 3, name: "Jordan", grade: 92, status: "Inactive" }
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <h2>{student.name}</h2>
          <p>Grade: {student.grade}%</p>
          <p>Status: {student.status}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## Rendering with Components

### Creating Reusable Components:
```jsx
function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, name: "Alice", email: "alice@email.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@email.com", role: "User" },
    { id: 3, name: "Charlie", email: "charlie@email.com", role: "User" }
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

**Benefits:**
- Cleaner code
- Reusable components
- Easier to maintain

---

## Filtering Before Mapping

### Show Only Active Users:
```jsx
function ActiveUserList() {
  const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
  ];

  return (
    <div>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
    </div>
  );
}
```

### Show Products Under $50:
```jsx
function AffordableProducts() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 45 }
  ];

  return (
    <div>
      <h2>Products Under $50</h2>
      {products
        .filter((product) => product.price < 50)
        .map((product) => (
          <div key={product.id}>
            <span>{product.name}</span> - ${product.price}
          </div>
        ))}
    </div>
  );
}
```

---

## Conditional Rendering in Lists

### Show Different Icons Based on Status:
```jsx
function TaskList() {
  const tasks = [
    { id: 1, title: "Buy groceries", completed: true },
    { id: 2, title: "Study React", completed: false },
    { id: 3, title: "Exercise", completed: true }
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.completed ? "✅" : "⏳"} {task.title}
        </li>
      ))}
    </ul>
  );
}
```

### Conditional Styling:
```jsx
function ScoreList() {
  const scores = [
    { id: 1, student: "Alex", score: 95 },
    { id: 2, student: "Sam", score: 65 },
    { id: 3, student: "Jordan", score: 85 }
  ];

  return (
    <div>
      {scores.map((item) => (
        <div
          key={item.id}
          style={{
            color: item.score >= 80 ? "green" : "red",
            fontWeight: item.score >= 90 ? "bold" : "normal"
          }}
        >
          {item.student}: {item.score}%
        </div>
      ))}
    </div>
  );
}
```

---

## Nested Lists

### Categories with Items:
```jsx
function Menu() {
  const categories = [
    {
      id: 1,
      name: "Breakfast",
      items: ["Pancakes", "Eggs", "Toast"]
    },
    {
      id: 2,
      name: "Lunch",
      items: ["Burger", "Salad", "Soup"]
    },
    {
      id: 3,
      name: "Dinner",
      items: ["Steak", "Pasta", "Pizza"]
    }
  ];

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

---

## Empty List Handling

### Show Message When List is Empty:
```jsx
function MessageList() {
  const messages = [];

  return (
    <div>
      <h2>Your Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet. Start a conversation!</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Using Logical AND:
```jsx
function CartItems() {
  const items = [];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

## Common Mistakes to Avoid

### Mistake 1: Forgetting `key` Prop
```jsx
// ❌ Wrong - React will warn you
{fruits.map((fruit) => (
  <li>{fruit}</li>
))}

// ✅ Correct
{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}
```

---

### Mistake 2: Using `map()` Outside JSX
```jsx
// ❌ Wrong - map returns an array, not JSX directly
const items = data.map((item) => <li>{item}</li>);
return <ul>{items}</ul>;  // Works but unnecessary

// ✅ Better - map directly in JSX
return (
  <ul>
    {data.map((item) => <li key={item.id}>{item}</li>)}
  </ul>
);
```

---

### Mistake 3: Not Wrapping Multiple Elements
```jsx
// ❌ Wrong - each map item must return ONE parent element
{products.map((product) => (
  <h3>{product.name}</h3>
  <p>{product.price}</p>
))}

// ✅ Correct - wrap in a div
{products.map((product) => (
  <div key={product.id}>
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
))}
```

---

### Mistake 4: Modifying Original Array
```jsx
// ❌ Wrong - don't modify the original array
{products.sort().map((product) => (  // sort() mutates!
  <div key={product.id}>{product.name}</div>
))}

// ✅ Correct - create a copy first
{[...products].sort().map((product) => (
  <div key={product.id}>{product.name}</div>
))}
```

---

## Array Methods Cheat Sheet

### Useful array methods for list rendering:

**`.map()`** - Transform each item
```jsx
{items.map((item) => <div>{item}</div>)}
```

**`.filter()`** - Keep only items that match condition
```jsx
{items.filter((item) => item.active).map(...)}
```

**`.sort()`** - Order items (make a copy first!)
```jsx
{[...items].sort((a, b) => a.price - b.price).map(...)}
```

**`.slice()`** - Get a portion of array
```jsx
{items.slice(0, 5).map(...)}  // First 5 items
```

**Chaining methods:**
```jsx
{items
  .filter((item) => item.price < 100)
  .sort((a, b) => a.price - b.price)
  .map((item) => <ProductCard key={item.id} product={item} />)
}
```

---

## Real-World Example

### Complete E-Commerce Product Grid:
```jsx
function ProductGrid() {
  const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
    { id: 4, name: "Chair", price: 199, category: "Furniture", inStock: true },
    { id: 5, name: "Monitor", price: 349, category: "Electronics", inStock: true }
  ];

  // Filter to show only in-stock items
  const availableProducts = products.filter((product) => product.inStock);

  return (
    <div>
      <h1>Our Products</h1>

      {/* Show count */}
      <p>{availableProducts.length} items available</p>

      {/* Empty state */}
      {availableProducts.length === 0 && (
        <p>No products available right now. Check back soon!</p>
      )}

      {/* Product grid */}
      <div className="product-grid">
        {availableProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{
              border: "2px solid #ddd",
              padding: "20px",
              borderRadius: "8px"
            }}
          >
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price" style={{
              fontSize: "24px",
              color: product.price > 200 ? "#ff6b6b" : "#51cf66"
            }}>
              ${product.price}
            </p>

            {/* Conditional stock badge */}
            {product.inStock ? (
              <span style={{ color: "green" }}>✅ In Stock</span>
            ) : (
              <span style={{ color: "red" }}>❌ Out of Stock</span>
            )}

            <button
              disabled={!product.inStock}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: product.inStock ? "#4CAF50" : "#ccc"
              }}
            >
              {product.inStock ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 📝 What You'll Learn

By the end of this lesson, you'll be able to:
✅ Use `.map()` to render lists of items
✅ Add the `key` prop correctly
✅ Render arrays of objects
✅ Use components inside `.map()`
✅ Filter arrays before mapping
✅ Add conditional rendering in lists
✅ Handle empty lists gracefully
✅ Work with nested lists
✅ Avoid common list rendering mistakes

---

## 🤔 Think About It

- Why is the `key` prop important? What happens without it?
- When should you use `index` as a key vs a unique ID?
- Can you use `.forEach()` instead of `.map()` for rendering? Why or why not?
- How would you display only the first 3 items from a long list?

---

## 🎯 Practice Activities

### Try These on Your Own:
1. Create a todo list that renders tasks from an array
2. Build a contact list showing names, emails, and phone numbers
3. Make a leaderboard that displays scores in descending order
4. Create a recipe list where each recipe shows ingredients (nested list)
5. Build a movie gallery that filters by genre
6. Make a shopping cart that shows product name, quantity, and total price

---

## 🔄 What's Next?

### You've Now Completed:
- **[Section 1](01-jsx-expressions.md)**: JSX Expressions
- **[Section 2](02-conditional-rendering.md)**: Conditional Rendering
- **Section 3**: List Rendering

### Coming Up:
- **State Management** - Making components interactive with `useState`
- **Event Handling** - Responding to clicks, inputs, and user actions
- **Forms** - Handling user input and validation

---

## 📚 Additional Resources

### Official React Documentation:
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Keys in React](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

### Practice Platforms:
- [React.dev Learn](https://react.dev/learn)
- [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)

---

## ⚡ Quick Reference Cheat Sheet

```
LIST RENDERING CHEAT SHEET
══════════════════════════════

Basic Map:
  {items.map((item) => <li>{item}</li>)}

With Key:
  {items.map((item) => <li key={item.id}>{item.name}</li>)}

Objects:
  {users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  ))}

Filter + Map:
  {items
    .filter((item) => item.active)
    .map((item) => <div key={item.id}>{item.name}</div>)}

With Component:
  {users.map((user) => <UserCard key={user.id} user={user} />)}

Empty Check:
  {items.length === 0 ? <p>No items</p> : items.map(...)}

Nested Lists:
  {categories.map((cat) => (
    <div key={cat.id}>
      {cat.items.map((item) => <li key={item}>{item}</li>)}
    </div>
  ))}

Key Rules:
  ✅ Use unique IDs from data
  ✅ Must be unique among siblings
  ⚠️ Use index only for static lists
  ❌ Never use random numbers

Remember: .map() creates a NEW array!
```

---

[← Back to Course Index](../README.md)
