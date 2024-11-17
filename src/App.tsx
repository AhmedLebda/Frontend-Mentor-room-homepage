import Header from "./components/header/header"
import About from "./components/main/about"
const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <main>
        <About />
      </main>
    </div>
  )
}

export default App