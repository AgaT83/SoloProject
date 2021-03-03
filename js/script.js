/* eslint-disable no-unused-vars */


function initChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
    
  // eslint-disable-next-line no-undef
  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      // 3
      datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
        // 7
        hidden: true,
      }]
    },
  });
}

const chart = function() {
  initChart();
};

chart();

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.leftbar');

burger.addEventListener('click', function() {
  if(!burgerMenu.classList.contains('show')) {
    burgerMenu.classList.remove('leftbar');
    burgerMenu.classList.add('show');
  } else {
    burgerMenu.classList.add('leftbar');
    burgerMenu.classList.remove('show');
  }
});

const sectionClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.link');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.section');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  const clickedElementA = clickedElement.querySelector('a');
  const correctLink = clickedElementA.getAttribute('href');

  const correctArticle = document.querySelector(correctLink);

  correctArticle.classList.add('active');
};

const links = document.querySelectorAll('.link');
console.log(links);
for(let link of links){
  link.addEventListener('click', sectionClickHandler);
}