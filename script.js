const time = ['Today', 'This week', 'This month', 'This year']
const karma = ['good', 'bad', 'very good', 'very bad']
const experience = ['luck', 'vibes', 'fortune', 'times']
const verb = ['will', 'should', 'might', 'may']

let sentence = () => {
return `${time[Math.floor(Math.random()*4)]} you ${verb[Math.floor(Math.random()*4)]} experience ${karma[Math.floor(Math.random()*4)]} ${experience[Math.floor(Math.random()*4)]}.`
}

const newMessage = () => {
    document.getElementById('output').innerText = sentence();
  }
  let btn = document.getElementById("btn");
  btn.addEventListener('click', event => {
    newMessage();
});