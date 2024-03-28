function updateTime() {
  const koreaTime = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
  const japanTime = moment().tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
  const chinaTime = moment().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
  const usaTime = moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');

  document.getElementById('korea').textContent = `한국: ${koreaTime}`;
  document.getElementById('japan').textContent = `일본: ${japanTime}`;
  document.getElementById('china').textContent = `중국: ${chinaTime}`;
  document.getElementById('usa').textContent = `미국: ${usaTime}`;
}

setInterval(updateTime, 1000);

updateTime();
