let letterCombinations = function(digits) {

    digits = digits.substring(2); // To remove the "0<space>"

    if(!digits.length) return [];
    
    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    let heroes = ['batman', 'hulk', 'superman', 'thor', 'robin', 'ironman', 'ghostrider', 'captainamerica', 'flash', 'wolverine', 'blade', 'phantom', 'spiderman', 'blackwidow', 'hellboy', 'punisher']

    let result = '';
    
    function permute(string, index) {
        if(index === digits.length) {
            if(heroes.includes(string)){
                result = string;
            }
            return;
        }
        for(let x of map[digits[index]]) {
            permute(string+x, index+1);
        }
    }

    permute('', 0);
    return result;
};

// Example usage
let input = "0 228626";
console.log("Given code: " + input);
let hero = letterCombinations(input);
console.log("Hero: " + hero);