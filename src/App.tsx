import { useState, useEffect, useMemo } from 'react';

import foodService from './service/foodService'

import Filter from './components/Filter/Filter'
import Container from "./view/Container/Container";
import Header from "./components/Header/Header";
import FoodList from './components/FoodList/FoodList';
import Order from './context/CartContext';

function App() {
  const food = new foodService();
  const [foodData, setFoodBlock] = useState<any[]>([]);
  const [filter, setFilter] = useState('');
  const [orderList, setOrderList] = useState<any[]>([]);

  const order = useMemo(() => ({ orderList, setOrderList }), [orderList]);

  useEffect(() => {
    getFood();
  }, [])

  const getFood = () => {
    food.getAllFood()
      .then(res => {
        setFoodBlock(res)
      })
  }

  const filteredData = filter === '' ? foodData : foodData.filter(item => item.category === filter)

  return (
    <div className="App w-full flex flex-col gap-8">
      <Order.Provider value={order}>
        <Header />

        <main className="mt-[74px] py-[30px]">
          <Container classes='flex flex-col gap-10'>
            <Filter
              selectedFilter={filter}
              setFilter={setFilter}
              categories={foodData.map(item => item.category)}
            />

            <FoodList
              foodBlocks={filteredData}
            />
          </Container>
        </main>
      </Order.Provider>
    </div>
  );
}

export default App;
