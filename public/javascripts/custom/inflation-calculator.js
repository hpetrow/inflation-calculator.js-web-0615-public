// code your functions here

function fetchOptions() {
  return {
    start: $('#startDate').val(),
    end: $('#endDate').val(),
    amount: $('#startPrice').val()
  };
}

function addPriceToPage(price) {
  priceStripped = price.replace('$', '');
  $('#endPrice').val(priceStripped);
  return priceStripped;
}

function priceFor(options, callback) {
  var apiUrl = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';
  $.getJSON(apiUrl, {
    country: 'united-states',
    start: options.start,
    end: options.end,
    amount: options.amount,
    format: true
  })
    .done(function(data) {
      callback(data);
    });
}

function fetchEndPrice(callback) {
  var options = fetchOptions();
  priceFor(options, callback);
}
