// ☕ Coffee Shop - Part 3: List Rendering
// Learn: .map(), key prop, filtering arrays, rendering lists, component reusability

// MenuItem Component - Reusable card for displaying drinks
function MenuItem({ name, price, category, image, popular }) {
  return (
    <div style={{ 
      border: "2px solid #ddd", 
      padding: "15px", 
      borderRadius: "8px",
      backgroundColor: "#fff"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ 
          width: "100%", 
          height: "200px", 
          objectFit: "cover", 
          borderRadius: "5px",
          marginBottom: "10px"
        }} 
      />
      <h3 style={{ margin: "10px 0" }}>{name}</h3>
      <p style={{ color: "#666", fontSize: "14px" }}>Category: {category}</p>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "#6f4e37" }}>
        ${price.toFixed(2)}
      </p>
      {popular && (
        <span style={{
          backgroundColor: "#ffd700",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
          ⭐ POPULAR
        </span>
      )}
    </div>
  );
}

function FullMenuBoard() {
  // Menu items array
  const menuItems = [
    { 
      id: 1, 
      name: "Espresso", 
      price: 3.50, 
      category: "Coffee", 
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300",
      popular: true 
    },
    { 
      id: 2, 
      name: "Cappuccino", 
      price: 4.25, 
      category: "Coffee", 
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300",
      popular: true 
    },
    { 
      id: 3, 
      name: "Iced Latte", 
      price: 4.75, 
      category: "Coffee", 
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300",
      popular: false 
    },
    { 
      id: 4, 
      name: "Green Tea", 
      price: 3.00, 
      category: "Tea", 
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300",
      popular: false 
    },
    { 
      id: 5, 
      name: "Chai Latte", 
      price: 4.50, 
      category: "Tea", 
      image: "https://images.unsplash.com/photo-1578899952107-9d9d7ab9752f?w=300",
      popular: true 
    },
    { 
      id: 6, 
      name: "Hot Chocolate", 
      price: 3.75, 
      category: "Other", 
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300",
      popular: true 
    }
  ];

  const reviews = [
    { id: 1, customer: "Sarah", rating: 5, comment: "Best coffee in town!" },
    { id: 2, customer: "Mike", rating: 4, comment: "Great atmosphere" },
    { id: 3, customer: "Emma", rating: 5, comment: "Love the pastries!" }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>☕ Full Menu Board</h1>
      
      {/* 1. Display total number of items using .length */}
      <p style={{ fontSize: "18px", color: "#666" }}>
        We have ___ items on our menu
      </p>

      {/* ALL MENU ITEMS */}
      <h2>🍵 All Drinks</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px",
        marginBottom: "40px"
      }}>
        {/* 2. Map through menuItems and render MenuItem component */}
        {/* Hint: <MenuItem key={item.id} name={item.name} price={item.price} ... /> */}
        
      </div>

      {/* COFFEE ONLY */}
      <h2>☕ Coffee Menu</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
        gap: "15px", 
        marginBottom: "40px" 
      }}>
        {/* 3. Filter for category === "Coffee", then map with MenuItem component */}
        
      </div>

      {/* POPULAR ITEMS */}
      <h2>⭐ Popular Items</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px",
        marginBottom: "40px" 
      }}>
        {/* 4. Filter for popular === true, then map with MenuItem component */}
        
      </div>

      {/* CUSTOMER REVIEWS */}
      <h2>💬 Customer Reviews ({/* 5. Show reviews.length */})</h2>
      <div>
        {/* 6. Map through reviews */}
        {/* Show: customer name, stars (use "⭐".repeat(rating)), comment */}
        
      </div>
    </div>
  );
}

export default FullMenuBoard;


/* 
EXAMPLE SOLUTIONS:
==================

1. Total items:
   {menuItems.length}

2. Map all items with MenuItem component:

3. Filter coffee + MenuItem:
   

4. Filter popular + MenuItem:
 
5. Reviews count:
   {reviews.length}

6. Map reviews:


BONUS: You could also use spread operator to pass all props:
   <MenuItem key={item.id} {...item} />
*/