import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<div id="button-counter"><button>Click here to get started</button><p id="count"></p></div>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
