package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<UserEntity> getAll();
    UserEntity getOne(long id);
    UserEntity getOneByEmail(String email);
    UserEntity add(UserEntity user);
    UserEntity save(UserEntity user);
    void delete(UserEntity user);
}
