import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  console.log(taskRepository.findAll());
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
