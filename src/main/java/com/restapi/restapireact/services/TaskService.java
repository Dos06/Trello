package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.Task;

import java.util.List;

public interface TaskService {
    List<Task> getAll();
    List<Task> getAllByCard(Card card);
    Task getOne(Long id);
    Task add(Task card);
    Task save(Task card);
    void delete(Task card);
}
