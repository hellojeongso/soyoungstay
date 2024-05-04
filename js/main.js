function changeCount(elementId, change) {
    const input = document.getElementById(elementId);
    let newValue = parseInt(input.value) + change;
    if (newValue < 0) newValue = 0;
    input.value = newValue;
  }
  
  function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let day = date.getDate();
    if (day < 10) day = '0' + day;
    return `${year}-${month}-${day}`;
  }
  
  document.getElementById('checkin').value = formatDate(new Date());
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('checkout').value = formatDate(tomorrow);
  
  function search() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
  
    console.log('체크인:', checkin);
    console.log('체크아웃:', checkout);
    console.log('객실 수:', rooms);
    console.log('성인:', adults);
    console.log('어린이:', children);
  }

  function redirectToSpecial() {
    window.location.href = 'special.html';
}