// Use to create a unique id for each user input
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);