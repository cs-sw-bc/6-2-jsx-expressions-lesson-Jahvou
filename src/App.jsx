import { useState } from 'react'
import './App.css'
import CoffeeShopMenu from './components/CoffeeShopMenu.jsx'
import OrderStatusBoard from './components/OrderStatusBoard.jsx'
import FullMenuBoard from './components/FullMenuBoard.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div>
      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '0',
        backgroundColor: '#6f4e37',
        padding: '0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <button 
          onClick={() => setActiveTab('menu')}
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'menu' ? '#fff' : '#6f4e37',
            color: activeTab === 'menu' ? '#6f4e37' : '#fff',
            border: 'none',
            borderBottom: activeTab === 'menu' ? '3px solid #6f4e37' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          ☕ Part 1: Expressions
        </button>
        
        <button 
          onClick={() => setActiveTab('orders')}
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'orders' ? '#fff' : '#6f4e37',
            color: activeTab === 'orders' ? '#6f4e37' : '#fff',
            border: 'none',
            borderBottom: activeTab === 'orders' ? '3px solid #6f4e37' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          📋 Part 2: Conditionals
        </button>

        <button 
          onClick={() => setActiveTab('fullmenu')}
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'fullmenu' ? '#fff' : '#6f4e37',
            color: activeTab === 'fullmenu' ? '#6f4e37' : '#fff',
            border: 'none',
            borderBottom: activeTab === 'fullmenu' ? '3px solid #6f4e37' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          🍵 Part 3: Lists
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'menu' && <CoffeeShopMenu />}
        {activeTab === 'orders' && <OrderStatusBoard />}
        {activeTab === 'fullmenu' && <FullMenuBoard />}
      </div>
    </div>
  )
}

export default App