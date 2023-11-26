import Filter from './components/Filter/Filter'
import Container from "./view/Container/Container";
import Header from "./components/Header/Header";
import FoodList from './components/FoodList/FoodList';

function App() {
  return (
    <div className="App w-full flex flex-col gap-8">
      <Header />

      <main className="mt-[74px] py-[30px]">
        <Container classes='flex flex-col gap-10'>
          <Filter />

          <FoodList />
        </Container>
      </main>
    </div>
  );
}

export default App;
