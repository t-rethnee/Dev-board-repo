function formatDate() {
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    const [weekday, month, day, year] = formattedDate.split(' ');
    document.getElementById("date").innerHTML = `${weekday}<br> <span class="font-bold"> ${month} ${day} ${year}`;
}
formatDate();