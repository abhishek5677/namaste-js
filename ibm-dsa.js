// reverse a string

const input = "abhishek";

const reverseStr = (n) => {
  let tempStr = "";

  for (let i = n.length - 1; i >= 0; i--) {
    tempStr = tempStr + n[i];
  }
  return tempStr;
};

const output = reverseStr(input);

console.log(output);
