package com.restapi.restapireact.repositories;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findAllByNameContainingIgnoreCase(String name);
    List<Card> findAllByUser(UserEntity user);
    List<Card> findAllByNameContainingIgnoreCaseAndUser(String name, UserEntity user);
}
