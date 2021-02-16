package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.Task;
import com.restapi.restapireact.repositories.TaskRepository;
import com.restapi.restapireact.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAllByCard(Card card) {
        return taskRepository.findAllByCard(card);
    }

    @Override
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task getOne(Long id) {
        return taskRepository.getOne(id);
    }

    @Override
    public Task add(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public void delete(Task task) {
        taskRepository.delete(task);
    }
}
