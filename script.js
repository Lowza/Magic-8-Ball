const time = ['today', 'this week', 'this month', 'this year']
const karma = ['good', 'bad', 'very good', 'very bad']
const experience = ['luck', 'pain', 'anxiety levels', 'times']

let sentence = `Sometime ${time[Math.floor(Math.random()*4)]} you will experience ${karma[Math.floor(Math.random()*4)]} ${experience[Math.floor(Math.random()*4)]}.`

document.write(sentence)