const container = document.querySelector('.container');
const count = document.querySelector('#count'); // ID seçicisi (#) kullanılmalı
const amount = document.getElementById('amount'); // Yanlış: ID seçicisi (#) kullanılmamalı
const select = document.getElementById('movie'); // Yanlış: ID seçicisi (#) kullanılmamalı
const seat = document.querySelectorAll('.seat:not(.reserved)');

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    const selectSeat = container.querySelectorAll('.seat.selected');

    const selectedSeatArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);
    });

    seats.forEach(function(seat){
        seat.Arr.push(push);
    });

    let selectedSeatIndexs = selectedSeatArr.map(function(seat){
        return seatArr.indexOf(seat);
    })



    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndex);
}

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}
