import { Router } from 'express';
import { 
  listTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
  toggleDone
} from '../controllers/tasks.controller';

const router = Router();

router.get('/', listTasks);

router.post('/tasks/add', addTask);

router.get('/edit/:id', getTask);

router.post('/edit/:id', updateTask);

router.get('/delete/:id', deleteTask);

router.get('/done/:id', toggleDone);

export default router;
