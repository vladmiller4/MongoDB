const {mapUser, getRandomFirstName} = require('./util');

// #### Users

// - Create 2 users per department (a, b, c)

async function userTask1(usersCollection) {
    const departments = ['a', 'a', 'b', 'b', 'c', 'c'];
    const users = departments.map(d => ({department: d})).map(mapUser);
    try {
      const {result} = await usersCollection.insertMany(users);
      console.log(`UserTask #1: Added ${result.n} users`);
    } catch (err) {
      console.error(err);
    }
}
  
// - Delete 1 user from department (a)
  
async function userTask2(usersCollection) {
    try {
      const {result} = await usersCollection.deleteOne({department: 'a'});
      console.log(`UserTask #2: Removed ${result.n} user`);
    } catch (err) {
      console.error(err);
    }
}
  
// - Update firstName for users from department (b)
  
async function userTask3(usersCollection) {
    try {
      const usersB = await usersCollection.find({department: 'b'}).toArray();
      const bulkWrite = usersB.map(user => ({
        updateOne: {
          filter: {_id: user._id},
          update: {$set: {firstName: getRandomFirstName()}}
        }
      }))
      const {result} = await usersCollection.bulkWrite(bulkWrite);
      console.log(`UserTask #3: Updated ${result.nModified} users`);
    } catch (err) {
      console.error(err);
    }
}
  
// - Find all users from department (c)

async function userTask4(usersCollection) {
    try {
      const usersC = await usersCollection.find({department: 'c'}).toArray();
      console.log('UserTask #4: Users:', {...usersC});
    } catch (err) {
      console.error(err);
    }
}

module.exports = { userTask1, userTask2, userTask3, userTask4 };