import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";


const QueueForm = ({ addToQueue }) => {
    const [name, setName] = useState("");
    const [service, setService] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !service.trim()) return;


        addToQueue({ name, service });
        setName("");
        setService("");
    };


    return (
        <form onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl
border border-white/20
shadow-[0_0_25px_rgba(0,0,0,0.6)]">


            <h2 className="text-xl font-semibold text-indigo-400 text-center mb-4">
                Add Customer
            </h2>


            <input
                type="text"
                placeholder="Customer name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-3 p-2 rounded-lg bg-black/40
text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500"
            />


            <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full mb-4 p-2 rounded-lg bg-black/40
text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Service</option>
                <option value="Consultation">Consultation</option>
                <option value="Payment">Payment</option>
                <option value="Routine Checkup">Routine Checkup</option>
            </select>


            <button
                type="submit"
                className="w-full flex justify-center items-center gap-2
p-2 rounded-xl bg-indigo-600/80 text-white font-semibold
hover:bg-indigo-600 transition shadow-lg">
                <FaUserPlus /> Add to Queue
            </button>
        </form>
    );
};


export default QueueForm;