package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.UserEntity;
import com.restapi.restapireact.repositories.CardRepository;
import com.restapi.restapireact.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardServiceImpl implements CardService {
    @Autowired
    private CardRepository cardRepository;

    @Override
    public List<Card> getAll() {
        return cardRepository.findAll();
    }

    @Override
    public List<Card> getAllByName(String name) {
        return cardRepository.findAllByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Card> getAllByUser(UserEntity user) {
        return cardRepository.findAllByUser(user);
    }

    @Override
    public List<Card> getAllByNameAndUser(String name, UserEntity user) {
        return cardRepository.findAllByNameContainingIgnoreCaseAndUser(name, user);
    }

    @Override
    public Card getOne(Long id) {
        return cardRepository.getOne(id);
    }

    @Override
    public Card add(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public Card save(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public void delete(Card card) {
        cardRepository.delete(card);
    }
}
