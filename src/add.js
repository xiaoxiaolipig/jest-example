'use strict';
//  cherry-pick
module.exports = function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add(): arguments must be numbers');
  }
  return a + b;
};

// module.exports = function mohan(a ){
//   return a;
// }
// # Find and copy the commit hash that you want to send to another branch
// git log

// # change to the branch where this commit is needed
// git checkout <branch-name>

// # execute the cherry pick using the hash you copied earlier
// git cherry-pick <commit-hash>