const autorun = (handler) => {
  Reaction.start(handler);
  handler();
  Reaction.end();
};

// module.exports = { autorun };
