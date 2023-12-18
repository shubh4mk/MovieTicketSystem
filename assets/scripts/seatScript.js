const seatContainer = document.getElementById('seat-container');
    const totalElement = document.getElementById('total');
    let selectedSeats = [];

    // Create seats
    const seats = 36;
    for (let i = 1; i <= seats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = i;
        seat.addEventListener('click', () => toggleSeat(i));
        seatContainer.appendChild(seat);
    }

    // Toggle seat selection
    function toggleSeat(seatNumber) {
        const index = selectedSeats.indexOf(seatNumber);
        if (index !== -1) {
            // Seat is already selected, so unselect it
            selectedSeats.splice(index, 1);
        } else {
            // Seat is not selected, so select it
            selectedSeats.push(seatNumber);
        }

        updateUI();
    }

    // Update UI based on selected seats
    function updateUI() {
        // Update seat classes
        const seatElements = document.getElementsByClassName('seat');
        for (let i = 0; i < seatElements.length; i++) {
            const seatNumber = i + 1;
            const isSelected = selectedSeats.includes(seatNumber);
            if (isSelected) {
                seatElements[i].classList.add('selected');
            } else {
                seatElements[i].classList.remove('selected');
            }
        }

        // Calculate total fare
        const farePerSeat = 10;
        const totalFare = selectedSeats.length * farePerSeat;
        totalElement.textContent = totalFare;
    }
