import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-dvw h-dvh flex items-center justify-center bg-zinc-900'>
        <button className='p-2 rounded-md shadow-md outline-[0.5px] bg-amber-400 hover:bg-amber-200 hover:text-amber-400 text-amber-100 outline-amber-300 transition-all'>
          Call API
        </button>
    </main>
  )
}

export default App
