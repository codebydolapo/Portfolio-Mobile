// A function that takes in a contract address and returns a shortened version
function shortenAddress(address) {
    // Check if the address is a valid string and has at least 14 characters
    if (typeof address === 'string' && address.length >= 14) {
      // Return the first seven characters, three dots, and the last seven characters
      return address.slice(0, 7) + '...' + address.slice(-7);
    } else {
      // Throw an error if the address is invalid
      throw new Error('Invalid address');
    }
  }
  

  export default shortenAddress;