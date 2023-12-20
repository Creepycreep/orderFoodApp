import CartStore from './components/store/store';

import Filter from './components/Filter/Filter'
import Container from "./view/Container/Container";
import Header from "./components/Header/Header";
import FoodList from './components/FoodList/FoodList';
import Order from './context/CartContext';

function App() {
  const cartStore = new CartStore();

  return (
    <div className="App w-full flex flex-col gap-8">
      <Order.Provider value={cartStore}>
        <Header />

        <main className="mt-[74px] py-[30px]">
          <Container classes='flex flex-col gap-10'>
            <Filter />

            {<FoodList />}
          </Container>
        </main>
      </Order.Provider>
    </div>
  );
}

export default App;
