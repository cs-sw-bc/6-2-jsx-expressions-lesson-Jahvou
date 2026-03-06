// ☕ Coffee Shop - Part 2: Conditional Rendering
// Learn: if/else, ternary operators, &&, conditional styling

function OrderStatusBoard() {
  // Current order being prepared
  const currentOrder = {
    orderNumber: 42,
    customerName: "Sarah",
    drink: "Iced Caramel Macchiato",
    size: "Large",
    isReady: false,
    isPriority: true,
    temperature: "Iced"
  };
  
  // Shop status
  const isOpen = true;
  const isBusy = true;
  
  // Inventory
  const milkAvailable = true;
  const caramelAvailable = false;
  
  // Customer info
  const isVIPMember = true;
  const loyaltyPoints = 85;
  const pointsForFreeDrink = 100;
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px" }}>
      
      {/* 1. Shop Status - Use ternary for background (green if open, red if closed) */}
      <div style={{ 
        padding: "15px", 
        marginBottom: "20px",
        backgroundColor: isOpen ? "green":"red", 
        color: "white",
        borderRadius: "5px"
      }}>
        <h2>☕ Bean & Brew</h2>
        {/* 2. Show "OPEN" or "CLOSED" using ternary */}
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Status: { isOpen ? "OPEN":"CLOSED" }
        </p>
      </div>
      
      {/* Order card */}
     {isOpen && 
      <div style={{ 
        border: "2px solid #ddd", 
        padding: "15px", 
        borderRadius: "8px",
        marginBottom: "20px"
      }}>
        
        {/* 3. Priority badge - Only show if isPriority is true - Use && */}
        {currentOrder.isPriority && 
        <span style={{ 
          backgroundColor: "red", 
          color: "white", 
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "12px",
          fontWeight: "bold",
          display: "block",
          marginBottom: "10px"
        }}>
          ⚡ PRIORITY ORDER
        </span>
        }
        
        {/* 4. Display order number */}
        <h4>Order #{/* TODO */}</h4>
        
        <p><strong>Customer:</strong> {currentOrder.customerName}</p>
        <p><strong>Drink:</strong> {currentOrder.drink}</p>
        
        {/* 5. Size - Use ternary to convert to Starbucks names */}
        {/* Small = "Tall", Medium = "Grande", Large = "Venti" */}
        <p>
          <strong>Size:
            {currentOrder.size == "Small"? "Tall": currentOrder.size=="Medium" ? "Grande":"Venti"}

            </strong> {/* TODO */}
        </p>
        
        {/* 6. Temperature - Use ternary ("Iced" or "Hot") */}
        <p>
          <strong>Temp:
            {currentOrder.temperature == "Iced"? "Iced":currentOrder.temperature == "Hot" ? "Hot":"Iced"}
            
            </strong> {/* TODO */}
        </p>
        
        {/* 7. Status background - Use ternary (light green if ready, light yellow if not) */}
        <div style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: currentOrder.isReady ? "lightgreen" : "lightyellow", /* TODO */
          borderRadius: "5px"
        }}>
          <strong>Status:
            </strong> {currentOrder.isReady ? "✅ Ready for pickup!" : "⏳ Being prepared..."}
        </div>
      </div>
      }
      
      {/* 8. Wait time warning - Only show if busy - Use && */}
      {/* TODO: Add condition here */}
      {isBusy &&
      <div style={{ 
        backgroundColor: "#fff3cd", 
        padding: "10px", 
        borderRadius: "5px",
        marginBottom: "20px"
      }}>
        ⚠️ We're busy! Estimated wait: 12 minutes
      </div>
      }
      
      {/* Inventory */}
      <h3>📦 Inventory Status</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* 9. Milk status - Use ternary for color and text */}
        <p>
          🥛 Milk: <span style={{color: milkAvailable ? "green":"red"}}>
          {milkAvailable ? "✅ Available" :"❌ Out of Stock"}
          </span>
          {/* TODO: Show "✅ Available" (green) or "❌ Out of Stock" (red) */}
        </p>
        
        <p>
          🍯 Caramel: <span style={{color: caramelAvailable ? "green" : "red"}}>
            {caramelAvailable ? "✅ Available" : "❌ Out of Stock"}
          </span>
        </p>
      </div>
      
      {/* VIP Section */}
      <div style={{
        border: "2px solid gold",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fffacd"
      }}>
        <h3>⭐ Customer Rewards</h3>
        
        {/* 10. VIP badge - Only show if isVIPMember is true - Use && */}
        {/* TODO: Add condition here */}
        <div style={{ 
          backgroundColor: "gold", 
          display: "inline-block",
          padding: "5px 10px",
          borderRadius: "5px",
          marginBottom: "10px",
          fontWeight: "bold"
        }}>
          👑 VIP MEMBER
        </div>
        
        <p>Loyalty Points: {loyaltyPoints}</p>
        <p>Points needed for free drink: {pointsForFreeDrink - loyaltyPoints}</p>
      </div>
      
    </div>
  );
}

export default OrderStatusBoard;


/* 
ANSWER KEY - 10 TASKS:
======================

1. Shop background color:
   backgroundColor: isOpen ? "#28a745" : "#dc3545"

2. Shop status text:
   {isOpen ? "OPEN" : "CLOSED"}

3. Priority badge condition:
   {currentOrder.isPriority && (
     <span>...</span>
   )}

4. Order number:
   {currentOrder.orderNumber}

5. Size with Starbucks naming:
   {currentOrder.size === "Small" ? "Tall" : currentOrder.size === "Medium" ? "Grande" : "Venti"}

6. Temperature:
   {currentOrder.temperature === "iced" ? "Iced" : "Hot"}

7. Status background:
   backgroundColor: currentOrder.isReady ? "#d4edda" : "#fff3cd"

8. Busy warning condition:
   {isBusy && (
     <div>...</div>
   )}

9. Milk status:
   <span style={{color: milkAvailable ? "green" : "red"}}>
     {milkAvailable ? "✅ Available" : "❌ Out of Stock"}
   </span>

10. VIP badge condition:
    {isVIPMember && (
      <div>...</div>
    )}
*/