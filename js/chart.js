'use strict';


let canvasElem = document.getElementById('chart');
console.log(canvasElem);

// appState.loadItems();
// function renderResults() {
//   renderChart();
// }

function renderChart() {
  let appState = new AppState();
  appState.loadItems();
  console.log(appState);
  let productNames = [];
  let productTimesClicked = [];
  let productTimesShown = [];

  for (let i = 0; i < appState.allProducts.length; i++) {
    productNames.push(appState.allProducts[i].name);
    productTimesClicked.push(appState.allProducts[i].timesClicked);
    productTimesShown.push(appState.allProducts[i].timesShown);
  }
  console.log(productTimesShown);
  const ctx = document.getElementById('chart');
  console.log(ctx);
  const config = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: '# of TimesClicked',
          data: productTimesClicked,
          borderWidth: 1,
          backgroundColor: 'darkblue',
          borderColor: 'dark blue'
        },
        {
          label: '# of TimesShown',
          data: productTimesShown,
          borderWidth: 1,
          backgroundColor: 'blue',
          borderColor: 'blue'
        },
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  console.log(config);
  new Chart(ctx, config);

}

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

renderChart();
