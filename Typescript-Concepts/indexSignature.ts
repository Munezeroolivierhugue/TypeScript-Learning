interface Dictionary {
  [key: string | number]: number | string; // Index signature
}

const scores: Dictionary = {
  alice: 90,
  bob: 85,
};

scores.hugue = 4
console.log(scores)