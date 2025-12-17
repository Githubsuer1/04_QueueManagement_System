import React from 'react'

const QueueDisplay = ({ queue, updateStatus, removeFromQueue }) => {
    return (
        <div className='max-w-full p-5'>
            <div className='bg-white/10 p-5'>
                <h1 className='bg-gray-900 p-2 text-white'>Current Queue</h1>
                {
                    queue.length === 0 ?
                        (<p>No Customer</p>) :
                        (
                            queue.map(
                                (customer) => (
                                    <div className='mt-2 p-2 rounded w-full bg-white/80 flex justify-between' key={customer.id}>
                                        <span className='flex flex-col p-1.5'>
                                            <p>{customer.name}</p>
                                            <p className={`text-xs font-bold ${customer.status === "waiting" ? "text-blue-600" : "text-green-500"}`}>{customer.status}</p>
                                        </span>
                                        <span className='flex gap-2 p-1.5'>
                                            <button
                                                className={`bg-yellow-400 rounded text-sm lg:text-xl p-1 lg:p-2 text-gray-900 ${customer.status === "Completed" ? "invisible" : ""}`}
                                                onClick={() => updateStatus(customer.id, "Completed")}>Update
                                            </button>
                                            <button
                                                className='bg-red-500 rounded text-sm lg:text-xl p-1 lg:p-2 text-gray-900'
                                                onClick={() => removeFromQueue(customer.id)}>Remove
                                            </button>
                                        </span>
                                    </div>
                                )
                            )
                        )
                }
            </div>
        </div>
    )
}

export default QueueDisplay