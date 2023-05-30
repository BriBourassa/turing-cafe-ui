const url = `http://localhost:3001/api/v1/reservations`

const getAllReservations = async (setAllRes, setError) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("oops - we can't seem to find the reservations! Guess you can make new ones!")
        }
        const data = await response.json();
        setAllRes(data)
    } catch (error) {
        console.log('oh nourr', error)
        setError(error)
    }
}

export { getAllReservations }