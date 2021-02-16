package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.Card;

import java.util.List;

public interface CardService {
    List<Card> getAll();
    Card getOne(Long id);
    Card add(Card card);
    Card save(Card card);
    void delete(Card card);
}
