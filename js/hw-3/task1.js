'user strict';
function task1() {
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  const user2 = {
    mood: 'happy',
    hobby: 'skydiving',
    premium: false,
  }
  const newUser = Object.assign({}, user, user2);
  const arrayNewUser = Object.keys(newUser);
  for (const keys of arrayNewUser) {

    console.log(`${keys}: ${newUser[keys]}`);
  }
}
