console.log('Мьяв');
fetch('http://locahost:8080/api/users')
  .then((res) => res.json())
  .then((users) => {
    console.log('users');
  });
