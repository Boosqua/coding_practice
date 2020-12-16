function minMoves(arr) {
  let swaps = 0;
  let swapped = true;
  const values = {
    0: 0,
    1: 0,
  };
  for (let i = 0; i < arr.length / 2; i++) {
    values[arr[i]]++;
  }
  const full = {
    0: values[0],
    1: values[1],
  };
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    full[arr[i]]++;
  }
  let start = values[0] / full[0] > values[1] / full[1] ? 0 : 1;
  let end = start === 0 ? 1 : 0;
  while (swapped === true) {
    swapped = false;
    let startPoint = -1;
    for (let i = 0; i < arr.length; i++) {
      if (startPoint === -1 && arr[i] === end) {
        startPoint = i;
      } else if (arr[i] === start && startPoint !== -1) {
        arr[startPoint] = start;
        arr[i] = end;
        swaps += i - startPoint;
        startPoint = -1;
        swapped = true;
      }
    }
  }

  return swaps;
}


function stockPairs(stocksProfit, target) {
  // Write your code here
  let distinctPairs = 0;

  let seen = new Set();
  let searching = new Set();
  for (let i = 0; i < stocksProfit.length; i++) {
    let current = stocksProfit[i];
    if (seen.has(current) && current * 2 !== target) {
      continue;
    } else {
      seen.add(current);
    }
    if (searching.has(current)) {
      distinctPairs++;
      seen.add(current);
    } else {
      searching.add(target - current);
    }
  }

  return distinctPairs;
}


function gameWinner(colors) {
  // Write your code here
  let sections = [];
  let currentColor = colors[0];
  let startPos = 0;
  for (let i = 1; i <= colors.length; i++) {
    let color = colors[i];
    if (color !== currentColor) {
      sections.push(colors.slice(startPos, i));
      startPos = i;
      currentColor = color;
    }
  }

  let moves = { w: 0, b: 0 };

  sections.forEach((str) => {
    if (str.length >= 3) {
      moves[str[0]] += str.length;
    }
  });
  return moves["w"] > moves["b"] ? "wendy" : "bob";
}
