const app = "I don't do much.";


fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(resp => console.log(resp))
