package com.restapi.restapireact.controllers;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.Task;
import com.restapi.restapireact.services.CardService;
import com.restapi.restapireact.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/")
public class MainController {
    @Autowired
    private CardService cardService;
    @Autowired
    private TaskService taskService;

    @GetMapping(value = "/allcards")
    public ResponseEntity<?> getAllCards() {
        List<Card> cards = cardService.getAll();
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

    @GetMapping(value = "/tasks")
    public ResponseEntity<?> getTasksByCard(@PathVariable(name = "id") Long id) {
        List<Task> tasks = taskService.getAllByCard(cardService.getOne(id));
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> cardDetails(@PathVariable(name = "id") Long id) {
        List<Task> tasks = taskService.getAllByCard(cardService.getOne(id));
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping(value = "/card/{id}")
    public ResponseEntity<?> getCard(@PathVariable(name = "id") Long id) {
        Card card = cardService.getOne(id);
        return new ResponseEntity<>(card, HttpStatus.OK);
    }

    @GetMapping(value = "/task/{id}")
    public ResponseEntity<?> taskDetails(@PathVariable(name = "id") Long id) {
        Task task = taskService.getOne(id);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @PostMapping(value = "/addCard")
    public ResponseEntity<?> addCard(@RequestBody Card card) {
        cardService.add(card);
        return ResponseEntity.ok(card);
    }

    @PostMapping(value = "/addTask")
    public ResponseEntity<?> addTask(@RequestBody Task task) {
        taskService.add(task);
        return ResponseEntity.ok(task);
    }
}
