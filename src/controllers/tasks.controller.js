import Task from '../models/Task';

export const listTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).lean(); 
    res.render('index', {tasks: tasks});
  } catch (error) {
    console.log(error);
  }
}

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
}

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render('./porciones/tasks/edit', {task: task});
  } catch (error) {
    console.log(error);
  }
}

export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, req.body);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndRemove(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export const toggleDone = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}
