// const mongoose = require('mongoose');
// const Todo = require('./models/todo');

// mongoose.connect('mongodb://27017/todoDB')
// .then(()=> console.log('DB connected'))
// .catch((err)=> console.log(err));

// const fakeTodos = [
//     {
//         task: "Go to Gym",
//         completed:true
//     },
//     {
//         task: "Buy Vegetables",
//         completed:false
//     },
//     {
//         task: "Watch Movies",
//         completed:false
//     },
// ]

// async function seedTodo(){
//     await Todo.deleteMany({});
//     await Todo.insertMany(fakeTodos);
//     console.log('Db seeded');
//     await mongoose.disconnect();
//     console.log('Db disconnected');
// }

// seedTodo();

const mongoose = require('mongoose');
const Todo = require('./models/todo');

mongoose.connect('mongodb://127.0.0.1:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB connected');
    seedTodo(); // Start seeding after the database connection is established
  })
  .catch((err) => console.error(err));

const fakeTodos = [
  {
    task: "Go to Gym",
    completed: true
  },
  {
    task: "Buy Vegetables",
    completed: false
  },
  {
    task: "Watch Movies",
    completed: false
  },
];

async function seedTodo() {
  try {
    await Todo.deleteMany({});
    await Todo.insertMany(fakeTodos);
    console.log('DB seeded');
  } catch (error) {
    console.error('Error seeding DB:', error);
  } finally {
    mongoose.disconnect();
    console.log('DB disconnected');
  }
}

