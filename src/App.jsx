import { useState } from "react";
import QueueForm from "./Components/QueueForm";
import QueueDisplay from "./Components/QueueDisplay";


function App() {
  const [queue, setQueue] = useState([]);


  // Add customer to queue
  const addToQueue = (customer) => {
    setQueue((prev) => [
      ...prev,
      { ...customer, id: Date.now(), status: "Waiting" }
    ]);
  };

  // Update customer status
  const updateStatus = (id, newStatus) => {
    setQueue((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? { ...customer, status: newStatus }
          : customer
      )
    );
  };

  // Remove customer
  const removeFromQueue = (id) => {
    setQueue((prev) => prev.filter((customer) => customer.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="min-h-[5rem] sm:min-h-[6rem] flex flex-col justify-center items-center
      px-4 sm:px-6
      bg-white/10 backdrop-blur-xl border-b border-white/20
      shadow-[0_0_30px_rgba(99,102,241,0.4)]">
        <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl
      font-bold text-indigo-400 text-center leading-tight">
          Queue Management System
        </h1><p className="text-xs sm:text-sm lg:text-base
text-gray-300 text-center mt-1">
          Manage customers efficiently
        </p>
      </header>


      {/* Main */}
      <main className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 w-full">
          <QueueForm addToQueue={addToQueue} />
        </div>
        <div className="lg:w-2/3 w-full">
          <QueueDisplay
            queue={queue}
            updateStatus={updateStatus}
            removeFromQueue={removeFromQueue}
          />
        </div>
      </main>
    </div>
  );
}


export default App;