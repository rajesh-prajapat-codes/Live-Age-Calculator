function startAge() {

  const dobValue = document.getElementById('dob').value;

  const birthDate = new Date(dobValue);

  setInterval(() => {

    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();

    let months = now.getMonth() - birthDate.getMonth();

    let days = now.getDate() - birthDate.getDate();

    let hours = now.getHours() - birthDate.getHours();

    let minutes = now.getMinutes() - birthDate.getMinutes();

    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Adjust negative values

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {

      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();

      days += previousMonth;
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    document.getElementById("result").textContent =
      `${years} Years : ${months} Months : ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

  }, 1000);
}