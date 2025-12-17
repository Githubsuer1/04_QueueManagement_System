import { useState } from 'react'
import QueueForm from './Components/QueueForm';
import QueueDisplay from './Components/QueueDisplay';
function App() {
  const [queue, setQueue] = useState([]);

  // add customers data to queue
  const addToQueue = (customer) => {
    setQueue((prev) => {
      return [...prev, { ...customer, id: Date.now(), status: "waiting" }]
    })
  }

  // update status 
  const updateStatus = (id, newStatus) => {
    setQueue(queue.map(customer => customer.id === id ? { ...customer, status: newStatus } : customer))
  }

  // remove the customer after job fulfill
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }

  return (
    <div className='w-full min-h-screen bg-red-400'>

      {/* Header section */}

      <header className='max-w-full bg-gray-900 h-24 shadow-2xl flex flex-col gap-2 font-semibold'>
        <h1 className='text-white/80 text-center text-2xl mt-1.5'>Queue Management System</h1>
        <p className='text-white/80 text-center'>Manage Customers efficiently</p>
      </header>

      {/* Main section */}

      <main className='w-full h-full lg:flex'>
        <div className='lg:w-1/3 w-full '>
          <QueueForm addToQueue={addToQueue} />
        </div>

        <div className='lg:w-2/3 w-full'>
          <QueueDisplay queue={queue} updateStatus={updateStatus} removeFromQueue={removeFromQueue} />
        </div>

      </main>
    </div>
  )
}

export default App
