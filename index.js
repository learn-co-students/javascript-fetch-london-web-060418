const app = "I don't do much.";

const token = 'e2c807a358ac82a71ac332c9264e705d5c4b5fe8'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
