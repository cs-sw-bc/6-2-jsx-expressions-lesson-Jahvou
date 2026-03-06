// ☕ Coffee Shop Menu - Part 1: JSX Expressions
// Learn: Variables, Math, Objects, String Methods, Template Literals

function CoffeeShopMenu() {
  // Shop info
  const shopName = "Bean & Brew";
  const tagline = "your daily coffee fix";
  const openingTime = "7:00 AM";
  const closingTime = "8:00 PM";
  
  // Today's special
  const specialDrink = "Caramel Latte";
  const regularPrice = 5.99;
  const discountPercent = 20; //percentage
  
  // Calculate discounted price with JSX
  
  // Menu items
  const coffee = {
    name: "Espresso",
    price: 3.50,
    size: "Small"
  };
  
  const pastry = {
    name: "Chocolate Croissant",
    price: 4.25,
    calories: 350
  };
  
  // Staff on duty
  const barista = "Emma";
  const role = "Head Barista";
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Header - use variables */}
      <h1>Welcome to {shopName}!</h1>
      <p style={{ fontStyle: "italic" }}>{tagline} </p>
      
      {/* Hours - use template literals */}
      <p>⏰ Hours: {openingTime} to {closingTime}</p>
      
      {/* Today's Special - use calculations */}
      <div style={{ backgroundColor: "#fff3cd", padding: "15px", margin: "20px 0", borderRadius: "5px" }}>
        <h2>☕ Today's Special</h2>
        <p>{specialDrink} </p>
        <p>
          Regular: ${regularPrice}
          <span style={{ color: "red", marginLeft: "10px" }}>
            Save {discountPercent}% 
          </span>
        </p>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Special Price: ${(regularPrice - (regularPrice*discountPercent/100)).toFixed(2)}
        </p>
      </div>
      
      {/* Menu Items - use object properties */}
      <h2>📋 Menu</h2>
      
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
        <h3>{coffee.name} ({coffee.size})</h3>
        <p>Price: ${coffee.price}</p>
      </div>
      
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
        <h3>{pastry.name} </h3>
        <p>Price: ${pastry.size}</p>
        <p style={{ fontSize: "12px", color: "gray" }}>___ calories</p>
      </div>
      
      {/* Staff - use string methods */}
      <div style={{ marginTop: "30px", padding: "10px", backgroundColor: "#e7f3ff" }}>
        <p>👤 Your barista today: {barista} ({role})</p>
        <p>Say hi to {barista}! </p>
      </div>
    </div>
  );
}

export default CoffeeShopMenu;


/* 
TASKS FOR STUDENTS:
==================

1. Display shop name in h1 (use {shopName})
2. Display tagline in italic p tag (use {tagline})
3. Show hours using template literal: {`${openingTime} to ${closingTime}`}
4. Display special drink name
5. Show regular price: {regularPrice}
6. Show discount percent: {discountPercent}
7. Calculate and show special price: {specialPrice.toFixed(2)}
8. Display coffee name and size: {coffee.name} and {coffee.size}
9. Show coffee price: {coffee.price}
10. Display pastry name: {pastry.name}
11. Show pastry price: {pastry.price}
12. Show calories: {pastry.calories}
13. Display barista name (uppercase): {barista.toUpperCase()}
14. Show role: {role}
15. Display barista name normally: {barista}

BONUS CHALLENGE:
- Can you add .toFixed(2) to prices to always show 2 decimal places?
- Try using toUpperCase() on the shop name in the header!
*/