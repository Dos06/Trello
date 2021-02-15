package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.Item;
import com.restapi.restapireact.repositories.ItemRepository;
import com.restapi.restapireact.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    @Override
    public Item getOne(Long id) {
        return itemRepository.getOne(id);
    }

    @Override
    public Item add(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item save(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public void delete(Item item) {
        itemRepository.delete(item);
    }
}
