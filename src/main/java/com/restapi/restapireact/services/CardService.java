package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.UserEntity;

import java.util.List;

public interface CardService {
    List<Card> getAll();
    List<Card> getAllByName(String name);
    List<Card> getAllByUser(UserEntity user);
    List<Card> getAllByNameAndUser(String name, UserEntity user);
    Card getOne(Long id);
    Card add(Card card);
    Card save(Card card);
    void delete(Card card);
}
