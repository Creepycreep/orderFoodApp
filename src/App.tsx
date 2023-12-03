import { useState, useEffect, useMemo } from 'react';

import foodService from './service/foodService'

import Filter from './components/Filter/Filter'
import Container from "./view/Container/Container";
import Header from "./components/Header/Header";
import FoodList from './components/FoodList/FoodList';
import Order from './context/CartContext';
import Spinner from './components/Spinner/Spinner';

function App() {
  const food = new foodService();
  const [foodData, setFoodData] = useState<any[]>([]);
  const [filter, setFilter] = useState('');
  const [orderList, setOrderList] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [seachFilter, setSeachFilter] = useState('');

  const order = useMemo(() => ({ orderList, setOrderList }), [orderList]);

  useEffect(() => {
    getFood();
  }, [])

  const getFood = () => {
    setIsLoading(true);
    food.getAllFood()
      .then(res => {
        setIsLoading(false);
        setFoodData(res);
      })
  }

  const seachFilterData = seachFilter === '' ? foodData : foodData.reduce((sum, item) => {
    const exp = item.foodList.filter((foodPos: { name: string; }) => foodPos.name.toLowerCase().includes(seachFilter.toLowerCase()))

    if (exp.length > 0) {
      return [...sum, { ...item, foodList: exp }]
    }

    return sum
  }, [])

  const filteredData = filter === '' ? seachFilterData : seachFilterData.filter((item: { category: string; }) => item.category === filter);

  return (
    <div className="App w-full flex flex-col gap-8">
      <Order.Provider value={order}>
        <Header setSeachFilter={setSeachFilter} />

        <main className="mt-[74px] py-[30px]">
          <Container classes='flex flex-col gap-10'>
            <Filter
              selectedFilter={filter}
              setFilter={setFilter}
              categories={foodData.map(item => item.category)}
            />

            {isLoading ? <Spinner /> : <FoodList
              foodBlocks={filteredData}
            />}
          </Container>
        </main>
      </Order.Provider>
    </div>
  );
}

export default App;
