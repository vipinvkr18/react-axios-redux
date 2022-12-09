
export const updateUser = (users,user) => {
  const index = users.findIndex((obj => obj.id === user.id));
  users[index] = user;
  return users;
};

export const getUser = (users,id) => {
  const user = users.find((obj => obj.id === parseInt(id)));
  return user;
};