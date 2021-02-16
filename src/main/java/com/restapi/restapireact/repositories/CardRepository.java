package com.restapi.restapireact.repositories;

import com.restapi.restapireact.entities.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface CardRepository extends JpaRepository<Card, Long> {

}
