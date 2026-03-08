// ===== SIDEBAR =====
const openNav  = () => document.getElementById("mySidenav").style.width = "250px";
const closeNav = () => document.getElementById("mySidenav").style.width = "0";

// ===== COUNTDOWN =====
(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR   = MINUTE * 60;
  const DAY    = HOUR   * 24;

  const today    = new Date();
  const dd       = String(today.getDate()).padStart(2, "0");
  const mm       = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy     = today.getFullYear();
  const dayMonth = "03/18/";

  let targetDate = `${dayMonth}${yyyy}`;
  if (`${mm}/${dd}/${yyyy}` > targetDate) targetDate = `${dayMonth}${yyyy + 1}`;

  const countDown = new Date(targetDate).getTime();

  const els = {
    days:     document.getElementById("days"),
    hours:    document.getElementById("hours"),
    minutes:  document.getElementById("minutes"),
    seconds:  document.getElementById("seconds"),
    headline: document.getElementById("headline"),
  };

  const x = setInterval(() => {
    const distance = countDown - new Date().getTime();

    if (distance < 0) {
      els.headline.innerText = "C'est terminé!";
      clearInterval(x);
      return;
    }

    els.days.innerText    = Math.floor(distance / DAY);
    els.hours.innerText   = Math.floor((distance % DAY)  / HOUR);
    els.minutes.innerText = Math.floor((distance % HOUR) / MINUTE);
    els.seconds.innerText = Math.floor((distance % MINUTE) / SECOND);
  }, 1000);
})();