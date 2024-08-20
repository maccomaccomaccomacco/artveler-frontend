import * as objectsArray from '../data/output.json';

function findSubstringsInObjects(objects, substring) {
    const results = [];
    const lowerCaseSubstring = substring.toLowerCase();
  
    for (const obj of Object.values(objects)) {
      const matchedObject = {};
      let hasMatch = false;
  
      for (const key in obj) {
        if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(lowerCaseSubstring)) {
            matchedObject[key] = obj[key];
          hasMatch = true;
        } 
        // else if (typeof obj[key] === 'object') {
        //   // Recursively check nested objects
        //   const nestedResults = findSubstringsInObjects([obj[key]], substring);
        //   if (nestedResults.length > 0) {
        //     matchedObject[key] = nestedResults;
        //     hasMatch = true;
        //   }
        // }
      }
  
      if (hasMatch) {
        results.push(matchedObject);
      } else {
        // If no properties match, push the entire object
        results;
      }
    }
    return results;
}


export function findBySubstr(substr){
    const results = findSubstringsInObjects(objectsArray, substr);
    return results
}
  