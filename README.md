# mongo-practise/homework

### Installation
1. Clone repo
2. Open project directory
3. run ```npm install``` command
3. run ```node app.js``` command

### Data sample

User document sample:
````
{
    firstName:  'Andrew',
    lastName: 'Rayan',
    department: 'a',
    createdAt: new Date()
}
````


Article document sample:
````
{
    name:  'Mongodb - introduction',
    description: 'Mongodb - text',
    type: 'a',
    tags: []
}
````


### Tasks

#### Users
````
- Create 2 users per department (a, b, c)
- Delete 1 user from department (a)
- Update firstName for users from department (b)
- Find all users from department (c)
````

#### Articles
````
- Create 5 articles per each type (a, b, c)
- Find articles with type a, and update tag list with next value [‘tag1-a’, ‘tag2-a’, ‘tag3’]
- Add tags [‘tag2’, ‘tag3’, ‘super’] to other articles except articles from type a
- Find all articles that contains tags [tag2, tag1-a]
- Pull [tag2, tag1-a] from all articles
````
#### Students Data
````
- Import all data from students.json into student collection
````

#### Students Statistic
````
- Find all students who have the worst score for homework, sort by descent
- Find all students who have the best score for quiz and the worst for homework, sort by ascending
- Find all students who have best scope for quiz and exam
- Calculate the average score for homework for all students
- Delete all students that have homework score <= 60
- Mark students that have quiz score => 80
- Write a query that group students by 3 categories (calculate the average grade for three subjects)
  - a => (between 0 and 40)
  - b => (between 40 and 60)
  - c => (between 60 and 100)
````
