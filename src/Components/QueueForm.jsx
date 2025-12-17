import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'


const QueueForm = ({ addToQueue }) => {
    // here we got the addToQueue prop as the function after de-structuring 

    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e) => {
        // prevent the default behaviour of form
        e.preventDefault();
        // validations 
        if (!name.trim() || !service.trim()) return;
        // send data to parant
        addToQueue({ name, service });
        // clear the inputfield
        setName("");
        setService("");
    }


    return (
        <form className='w-full h-full p-5' onSubmit={handleSubmit}>
            <div className='max-w-full shadow-2xl bg-white/10 rounded p-5 flex flex-col gap-2.5'>

                <h1 className='bg-gray-900 text-white p-2 text-center'>Add To Queue</h1>
                <input
                    placeholder='Enter the Customer..'
                    type="text"
                    className='w-full p-2 bg-white/20 rounded text-gray-800'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className='p-2 bg-white/20 max-w-full rounded text-gray-800'

                >
                    <option value="">Select Service</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Routine Checkup">Routine Checkup</option>
                </select>

                <button
                    type='submit'
                    className='w-full p-2 bg-blue-600 rounded transition-all hover:bg-blue-800 text-white flex items-center justify-center gap-1 '
                > <FaUserPlus /> Add To Queue
                </button>
            </div>
        </form>
    )
}

export default QueueForm