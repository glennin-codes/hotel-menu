import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map(item=>item.category))]  

function App() {
  const[menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState(allCategories)
  const filterItems=(category)=>{
    const NewItems=items.filter(item=>item.category===category)
    setMenuItems(NewItems);
    category==='all' && setMenuItems(items)
  }
  return <main>
            <section className="menu section">
                <div className="title">
                  <h2>Our Menu</h2>
                  <div className="underline"></div>
                </div>
                <Categories categories={categories} filter={filterItems}/>
                <Menu  items={menuItems}/>

            </section>
  </main>
}

export default App;
