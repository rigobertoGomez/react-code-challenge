import RavnLogo from "@/assets/ravn-logo.svg"

function App() { 
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-5">     
      <div className="flex flex-col items-center space-y-2">
      <img src={RavnLogo} alt="" className="w-12" />
      <h1 className="text-4xl text-neutral-1">React code challenge</h1> 
      </div>
    </div>
  )
}

export default App
