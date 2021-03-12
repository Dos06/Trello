package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.UserEntity;
import com.restapi.restapireact.repositories.UserRepository;
import com.restapi.restapireact.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(s);
        if (user != null) {
            return user;
        } else {
            throw new UsernameNotFoundException("User not found!");
        }
    }

    @Override
    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity getOne(long id) {
        return userRepository.getOne(id);
    }

    @Override
    public UserEntity getOneByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserEntity add(UserEntity user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public UserEntity save(UserEntity user) {
        String password = user.getPassword();
        if (password.length() < 25) {
            user.setPassword(passwordEncoder.encode(password));
        }
        return userRepository.save(user);
    }

    @Override
    public void delete(UserEntity user) {
        userRepository.delete(user);
    }
}
