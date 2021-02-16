package com.restapi.restapireact.repositories;

import com.restapi.restapireact.entities.Card;
import com.restapi.restapireact.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByCard(Card card);
}
