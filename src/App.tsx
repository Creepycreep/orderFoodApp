import Badge from "./UI/Badge/Badge";
import Container from "./UI/Container/Container";
import Header from "./UI/Header/Header";

function App() {
  return (
    <div className="App w-full flex flex-col gap-8">
      <Header />

      <main className="mt-[74px] py-[30px]">
        <Container>
          <Badge />
        </Container>
      </main>
    </div>
  );
}

export default App;
