// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(value, index, collection) {
    if (value % 5 === 0) {
      count++;
    }
  });
  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(value, index, collection) {
    if (value.user === user) {
      userTweets.push(value);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(value) {
    return value === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(value) {
    return value[0] === letter;
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(value) {
    return value.type === 'cookie';
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(value) {
    return value.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(value) {
    return value.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  //.ingredients is an array of strings that may contain 'flour'
  return _.map(desserts, function(value) {
    if (value.ingredients.includes('flour')) {
      value['glutenFree'] = false;
    } else {
      value['glutenFree'] = true;
    }
    return value;
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(value) {
    return value.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var price = 0;
  return _.map(groceries, function(value) {
    price = 100*Number(value.price.slice(1));
    value['salePrice'] = '$' + ((price - 100*coupon) / 100);
    console.log(value);
    console.log(coupon);
    return value;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(total, value) {
    return total + Number(value.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(memo, value) {
    if (!memo[value.type]) {
      memo[value.type] = 1;
    } else {
      memo[value.type]++;
    }
    return memo;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(memo, value) {
    if (memo[value.user]) {
      memo[value.user]++;
    } else {
      memo[value.user] = 1;
    }
    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
//releaseYear
  return _.reduce(movies, function(memo, value) {
    if (value.releaseYear <= 2000 && value.releaseYear >= 1990) {

      memo.push(value.title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(memo, value) {
    if (memo) {
      return memo;
    } else if (value.runtime < timeLimit) {
      return true;
    }
    return false;
  }, false);
};
