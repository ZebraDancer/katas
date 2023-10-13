const alphabetPosition = (str) => {

return str.toLowerCase().split('').map(char => char.charCodeAt(0) -96).filter(char => char > 0 && char < 27).join(' ')


};


alphabetPosition("The sunset sets at twelve o' clock.");
