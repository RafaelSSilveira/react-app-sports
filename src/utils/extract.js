/**
 * @param {String} url 
 * @returns Promise<any>
 */
export function extractAsyncData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => data.json())
      .then(resolve)
      .catch(reject);
  });
}