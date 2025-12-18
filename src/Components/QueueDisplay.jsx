const QueueDisplay = ({ queue, updateStatus, removeFromQueue }) => {
    return (
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl
border border-white/20
shadow-[0_0_25px_rgba(0,0,0,0.6)]">


            <h2 className="text-xl font-semibold text-indigo-400 mb-4">
                Current Queue
            </h2>


            {queue.length === 0 ? (
                <p className="text-gray-300">No customers in queue</p>
            ) : (
                queue.map((customer) => (
                    <div
                        key={customer.id}
                        className="mb-3 p-3 rounded-xl bg-black/40
                        flex justify-between items-center">
                        
                        <div>
                            <p className="text-gray-200 font-medium">
                                {customer.name}
                            </p>
                            <p className={`text-xs font-bold mt-1
                                ${customer.status === "Waiting"
                                    ? "text-yellow-400"
                                    : "text-green-400"}`}>
                                {customer.status}
                            </p>
                        </div>


                        <div className="flex gap-2">
                            {customer.status !== "Completed" && (
                                <button
                                    onClick={() => updateStatus(customer.id, "Completed")}
                                    className="px-2 py-1 text-xs lg:text-sm rounded-lg bg-green-500/80
                                            text-black hover:bg-green-500 transition">
                                    Complete
                                </button>
                            )}


                            <button
                                onClick={() => removeFromQueue(customer.id)}
                                className="px-2 py-1 text-xs lg:text-sm rounded-lg bg-red-500/80
                                        text-black hover:bg-red-500 transition">
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};


export default QueueDisplay;