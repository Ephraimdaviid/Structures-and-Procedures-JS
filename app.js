//Problem one//

function sumOfDistinctElements(set1, set2) {
    let distinct = []; // Array to store distinct elements
  
    // Iterate through the elements of the first set
    for (let i = 0; i < set1.length; i++) {
      if (!distinct.includes(set1[i])) {
        distinct.push(set1[i]);
      }
    }
  
    // Iterate through the elements of the second set
    for (let i = 0; i < set2.length; i++) {
      if (!distinct.includes(set2[i])) {
        distinct.push(set2[i]);
      }
    }
  
    // Calculate the sum of distinct elements
    let sum = distinct.reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }
  
  // Example usage
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  let result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13
  

  //Problem two//

  // Procedure to calculate the dot product of v1 and v2
function dot_product(v1, v2, ps) {
    ps = 0; // Initialize the dot product to zero
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i]; // Calculate the dot product
    }
  }
  
  // Algorithm to determine orthogonality using the dot_product procedure
  function determineOrthogonality(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      let v1 = vectors[i][0]; // First vector of the pair
      let v2 = vectors[i][1]; // Second vector of the pair
  
      let ps = 0; // Variable to store the dot product
      dot_product(v1, v2, ps); // Calculate the dot product using the dot_product procedure
  
      if (ps === 0) {
        console.log("The vectors v1 and v2 are orthogonal");
      } else {
        console.log("The vectors v1 and v2 are not orthogonal");
      }
    }
  }
  
  // Example usage
  let vectors = [
    [[3, 1, 7], [2, 4, 1]], // Example pair 1
    [[0, -1, 2], [2, 1, 0]], // Example pair 2
    [[-1, 0, 1], [1, 0, -1]], // Example pair 3
  ];
  
  determineOrthogonality(vectors);
  