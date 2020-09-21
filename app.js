'use strict'

const { userTask1, userTask2, userTask3, userTask4 } = require('./usersTask');
const { articleTask1, articleTask2, articleTask3, articleTask4, articleTask5 } = require('./articlesTask');

// db connection and settings
const connection = require('./config/connection');
let usersCollection;
let articlesCollection;
let studentsCollection;
run();

async function run() {
  await connection.connect();
  await usersTask();
  await articlesTask();
  await studentsTask();
  await connection.close();
}

async function usersTask() {
  await connection.get().dropCollection('users');
  usersCollection = connection.get().collection('users');
  await userTask1(usersCollection);
  await userTask2(usersCollection);
  await userTask3(usersCollection);
  await userTask4(usersCollection);
}

async function articlesTask() {
  await connection.get().dropCollection('articles');
  articlesCollection = connection.get().collection('articles');
  await articleTask1(articlesCollection);
  await articleTask2(articlesCollection);
  await articleTask3(articlesCollection);
  await articleTask4(articlesCollection);
  await articleTask5(articlesCollection);
}

async function studentsTask() {
  studentsCollection = connection.get().collection('students');
  const students = require('./students.json');
  await studentsCollection.insertMany(students);
}
