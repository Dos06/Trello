package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.UserEntity;
import com.restapi.restapireact.repositories.UserRepository;
import com.restapi.restapireact.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(s);
        if (user != null) {
            return user;
        } else {
            throw new UsernameNotFoundException("User not found!");
        }
    }
}
