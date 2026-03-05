[← Back to Course Index](../README.md)

# 🎯 JSX Conditional Rendering - Student Guide

## 📖 Core Concept
**"In React, you control what gets displayed using JavaScript conditionals - not HTML attributes"**

---

## What is Conditional Rendering?

Conditional rendering means showing or hiding elements based on conditions. In React, components can decide what to render using:
- `if/else` statements
- Ternary operators `? :`
- Logical AND operator `&&`
- Early returns

---

## Method 1: If/Else Statements

### Basic Pattern:
```jsx
function Greeting() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in</h1>;
  }
}
```

### With Variables:
```jsx
function Message() {
  const isLoggedIn = true;
  let message;

  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please sign in</h1>;
  }

  return <div>{message}</div>;
}
```

**When to use:** Multiple conditions or complex logic that's easier to read with if/else.

---

## Method 2: Ternary Operator `? :`

### Syntax:
```jsx
{condition ? <TrueComponent /> : <FalseComponent />}
```

### Examples:
```jsx
function Status() {
  const isOnline = true;

  return (
    <div>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}
```

```jsx
function Badge() {
  const role = "admin";

  return (
    <div>
      <span>{role === "admin" ? "👑 Admin" : "👤 User"}</span>
    </div>
  );
}
```

**When to use:** Simple two-way choices directly in JSX. Keeps code concise.

---

## Method 3: Logical AND Operator `&&`

### Syntax:
```jsx
{condition && <Component />}
```

### How it works:
- If condition is `true`, the component renders
- If condition is `false`, nothing renders

### Examples:
```jsx
function Notification() {
  const hasMessages = true;
  const messageCount = 5;

  return (
    <div>
      {hasMessages && <p>You have {messageCount} new messages!</p>}
    </div>
  );
}
```

```jsx
function AdminPanel() {
  const isAdmin = true;

  return (
    <div>
      <h1>Dashboard</h1>
      {isAdmin && <button>Delete User</button>}
      {isAdmin && <button>Edit Settings</button>}
    </div>
  );
}
```

**When to use:** You only want to show something if condition is true (no "else" needed).

---

## Method 4: Early Return

### Pattern:
Return early if a condition isn't met, preventing the rest of the component from rendering.

```jsx
function UserProfile({ user }) {
  // Early return if no user
  if (!user) {
    return <p>Please log in to view profile</p>;
  }

  // Main content only renders if user exists
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

```jsx
function ProductPage({ product }) {
  // Guard clause
  if (!product) {
    return <p>Product not found</p>;
  }

  if (product.outOfStock) {
    return <p>This item is currently unavailable</p>;
  }

  // Normal product display
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
```

**When to use:** Handling error states, loading states, or when component shouldn't render without certain data.

---

## Conditional Styling

### Conditional Classes:
```jsx
function Button() {
  const isPrimary = true;

  return (
    <button className={isPrimary ? "btn-primary" : "btn-secondary"}>
      Click Me
    </button>
  );
}
```

### Conditional Inline Styles:
```jsx
function StatusIndicator() {
  const isActive = true;

  return (
    <div style={{
      backgroundColor: isActive ? "green" : "red",
      color: "white",
      padding: "10px"
    }}>
      {isActive ? "Active" : "Inactive"}
    </div>
  );
}
```

### Multiple Classes:
```jsx
function Card() {
  const isHighlighted = true;
  const isDark = false;

  return (
    <div className={`card ${isHighlighted ? "highlighted" : ""} ${isDark ? "dark" : "light"}`}>
      Content
    </div>
  );
}
```

---

## Multiple Conditions

### Using Ternary Operators:
```jsx
function Grade() {
  const score = 85;

  return (
    <p>
      {score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"}
    </p>
  );
}
```

### Using If/Else Chain:
```jsx
function WeatherIcon() {
  const temp = 25;
  let icon;

  if (temp > 30) {
    icon = "🔥";
  } else if (temp > 20) {
    icon = "☀️";
  } else if (temp > 10) {
    icon = "🌤️";
  } else {
    icon = "❄️";
  }

  return <div>{icon} {temp}°C</div>;
}
```

---

## Common Mistakes to Avoid

### Mistake 1: Using `if` Inside JSX
```jsx
// ❌ Wrong - can't use if statement in JSX
<div>
  {if (isLoggedIn) { <p>Welcome</p> }}
</div>

// ✅ Correct - use ternary or &&
<div>
  {isLoggedIn && <p>Welcome</p>}
</div>
```

---

### Mistake 2: Rendering Numbers with &&
```jsx
const count = 0;

// ❌ Wrong - will display "0" on screen
{count && <p>You have {count} items</p>}

// ✅ Correct - explicitly check
{count > 0 && <p>You have {count} items</p>}
```

**Why?** In JavaScript, `0` is falsy, but React renders it. Always use explicit comparisons with numbers.

---

### Mistake 3: Forgetting the Else Case
```jsx
// ❌ Incomplete - what if NOT admin?
{isAdmin ? <button>Delete</button> : null}

// ✅ Better with &&
{isAdmin && <button>Delete</button>}
```

If you don't need an "else", use `&&` instead of ternary.

---

## Combining Conditionals

### Multiple Conditions:
```jsx
function Dashboard() {
  const isLoggedIn = true;
  const isAdmin = true;
  const isPremium = false;

  return (
    <div>
      <h1>Dashboard</h1>

      {isLoggedIn && (
        <div>
          <p>Welcome back!</p>
          {isAdmin && <button>Admin Panel</button>}
          {isPremium && <span>⭐ Premium Member</span>}
        </div>
      )}

      {!isLoggedIn && <p>Please log in</p>}
    </div>
  );
}
```

### Nested Ternaries (Use Sparingly):
```jsx
function UserBadge({ role, verified }) {
  return (
    <span>
      {role === "admin"
        ? "👑 Admin"
        : role === "mod"
          ? "🛡️ Moderator"
          : verified
            ? "✅ User"
            : "User"}
    </span>
  );
}
```

**Note:** Nested ternaries can be hard to read. Consider using if/else for complex logic.

---

## Real-World Example

### Complete Authentication Flow:
```jsx
function App() {
  const isLoggedIn = true;
  const user = {
    name: "Sarah",
    role: "admin",
    hasNotifications: true,
    notificationCount: 3
  };

  // Early return for logged out state
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Welcome to My App</h1>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    );
  }

  // Main app (only shows if logged in)
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
        <div>
          <span>Hello, {user.name}!</span>

          {/* Show notification badge only if has notifications */}
          {user.hasNotifications && (
            <span className="badge">{user.notificationCount}</span>
          )}

          {/* Admin-only button */}
          {user.role === "admin" && (
            <button>⚙️ Settings</button>
          )}
        </div>
      </header>

      <main>
        {/* Conditional styling based on role */}
        <div className={user.role === "admin" ? "admin-panel" : "user-panel"}>
          <h2>{user.role === "admin" ? "Admin Controls" : "My Content"}</h2>

          {user.role === "admin" ? (
            <div>
              <button>Manage Users</button>
              <button>View Analytics</button>
            </div>
          ) : (
            <div>
              <button>My Profile</button>
              <button>My Posts</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
```

---

## 📝 What You'll Learn

By the end of this lesson, you'll be able to:
✅ Use if/else statements for conditional rendering
✅ Use ternary operators `? :` in JSX
✅ Use logical AND `&&` to show/hide elements
✅ Implement early returns for guard clauses
✅ Apply conditional styling (classes and inline styles)
✅ Combine multiple conditions
✅ Avoid common conditional rendering mistakes

---

## 🤔 Think About It

- When should you use `&&` vs ternary operator `? :`?
- Why can't you use `if` statements directly inside JSX?
- What happens if you use `{0 && <Component />}`?
- When is an early return better than nested conditionals?

---

## 🎯 Practice Activities

### Try These on Your Own:
1. Create a greeting component that shows different messages for morning/afternoon/evening
2. Build a button that changes color and text based on whether it's "active" or "inactive"
3. Make a profile card that only shows an "Edit" button if the user is viewing their own profile
4. Create a notification badge that only appears when there are unread messages
5. Build a login/logout toggle that shows different content based on authentication state

---

## 🔄 What's Next?

### You've Already Learned:
- [JSX Expressions](01-jsx-expressions.md) (Section 1)
- Using `{}` to embed JavaScript
- Variables, functions, objects in JSX

### Coming Up Next:
- **[Section 3](03-list-rendering.md)**: List Rendering (displaying arrays with `.map()`)
- Rendering multiple items dynamically
- Using the `key` prop

---

## 📚 Additional Resources

### Official React Documentation:
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

### Practice Platforms:
- [React.dev Learn](https://react.dev/learn)
- [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)

---

## ⚡ Quick Reference Cheat Sheet

```
CONDITIONAL RENDERING CHEAT SHEET
═══════════════════════════════════

If/Else (outside JSX):
  if (condition) {
    return <A />;
  } else {
    return <B />;
  }

Ternary (inside JSX):
  {condition ? <A /> : <B />}

Logical AND (show if true):
  {condition && <Component />}

Early Return:
  if (!data) return <Loading />;
  return <Main />;

Conditional Styling:
  className={isActive ? "active" : "inactive"}
  style={{color: isDark ? "white" : "black"}}

Multiple Conditions:
  {isLoggedIn && isAdmin && <AdminPanel />}

⚠️ Watch out for:
  {count && <Text />}     // Shows "0" if count is 0
  {count > 0 && <Text />} // Correct way
```

---

[← Back to Course Index](../README.md)
