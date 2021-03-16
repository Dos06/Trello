package com.restapi.restapireact.controllers;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.Task;
import com.restapi.restapireact.entities.UserEntity;
import com.restapi.restapireact.jwt.JwtTokenGenerator;
import com.restapi.restapireact.services.CardService;
import com.restapi.restapireact.services.TaskService;
import com.restapi.restapireact.services.UserService;
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
    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;

    @GetMapping("favicon.ico")
    @ResponseBody
    void returnNoFavicon() {}

    @GetMapping(value = "/cards")
    public ResponseEntity<?> getAllCards(@RequestParam(name = "name", defaultValue = "") String name) {
        List<Card> cards;
        if (name == null || name.equals(""))
            cards = cardService.getAll();
        else
            cards = cardService.getAllByName(name);
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

    @GetMapping(value = "/cards/{token}")
    public ResponseEntity<?> getAllCardsByUser(
            @PathVariable String token,
            @RequestParam(name = "name", defaultValue = "") String name) {
        String email = jwtTokenGenerator.getEmailFromToken(token);
        UserEntity user = userService.getOneByEmail(email);
        List<Card> cards;
        if (name == null || name.equals(""))
            cards  = cardService.getAllByUser(user);
        else
            cards = cardService.getAllByNameAndUser(name, user);
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

    @PostMapping(value = "/addCard/{token}")
    public ResponseEntity<?> addCardToUser(@PathVariable String token, @RequestBody Card card) {
        String email = jwtTokenGenerator.getEmailFromToken(token);
        UserEntity user = userService.getOneByEmail(email);
        card.setUser(user);
        cardService.add(card);
        return ResponseEntity.ok(card);
    }

    @PostMapping(value = "/addTask")
    public ResponseEntity<?> addTask(@RequestBody Task task) {
        taskService.add(task);
        return ResponseEntity.ok(task);
    }

    @PutMapping(value = "/editCard")
    public ResponseEntity<?> editCard(@RequestBody Card card) {
        cardService.save(card);
        return ResponseEntity.ok(card);
    }

    @DeleteMapping(value = "/deleteCard")
    public ResponseEntity<?> deleteCard(@RequestBody Card card) {
        cardService.delete(card);
        return ResponseEntity.ok(card);
    }

    @PutMapping(value = "/editTask")
    public ResponseEntity<?> editTask(@RequestBody Task task) {
        taskService.save(task);
        return ResponseEntity.ok(task);
    }
}
