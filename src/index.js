module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  let sameBracketNum = {};

  for(let i = 0;i < bracketsConfig.length;i++){
  		brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  		if(bracketsConfig[i][0] == bracketsConfig[i][1]){
  			sameBracketNum[bracketsConfig[i][0]] = 0;
  		}
  }

  let bracketArray = [];
  let length = 0;
  let currentBracket;

  for(let i = 0;i < str.length;i++){
  	currentBracket = str.charAt(i);
  	bracketArray.push(currentBracket);
  	length++;

  	if(currentBracket === brackets[currentBracket] && sameBracketNum[currentBracket] == 0){
  		sameBracketNum[currentBracket]++;
  		continue;
  	}

  	if(currentBracket === brackets[currentBracket] && sameBracketNum[currentBracket] == 1){
  		sameBracketNum[currentBracket]++;
  	}

  	if(brackets[currentBracket] === undefined){
  		continue;
  	}

  	else if(bracketArray[length - 2] !== brackets[bracketArray[length - 1]]){
  		return false;
  	}

  	else{
  		bracketArray.pop();
  		bracketArray.pop();
  		length -= 2;
  	}

  	if(sameBracketNum[currentBracket] == 2){
  		sameBracketNum[currentBracket] = 0;
  	}
  }

  if(length != 0){
  	return false;
  }
  return true;
}
