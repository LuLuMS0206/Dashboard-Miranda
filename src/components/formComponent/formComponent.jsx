

export const FormComponent  = () => {
        return (
            <form>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="checkIn">Check In:</label>
                    <input
                        type="date"
                    />
                </div>
                <div>
                    <label htmlFor="checkOut">Check Out:</label>
                    <input
                        type="date"
                    />
                </div>
                <div>
                    <label htmlFor="roomNumber">Room Number:</label>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                    />
                </div>
                <div>
                    <label htmlFor="discount">Discount:</label>
                    <input
                        type="text"
            
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                    />
                </div>
                <div>
                    <label htmlFor="specialRequest">Special Request:</label>
                    <textarea
                        id="specialRequest"
                    />
                </div>
                <button type="submit">Crear</button>
            </form>
        );
}