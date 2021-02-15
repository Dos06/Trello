package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.Item;

import java.util.List;

public interface ItemService {
    List<Item> getAll();
    Item getOne(Long id);
    Item add(Item item);
    Item save(Item item);
    void delete(Item item);
}
