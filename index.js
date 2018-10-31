function takeANumber(array, name){
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length +" in line."
}
function nowServing(array){
  if (array.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
  return "Currently serving " + array.shift() + ".";
  ;
}
}
function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty."
  }
}
/*  else{
    lineis = "The line is currently:"
    i = line.length
    linewhile = line.clone
    while (i>0)
    lineis
}
*/
