package com.restapi.restapireact.services.impl;

import com.restapi.restapireact.entities.RoleEntity;
import com.restapi.restapireact.repositories.RoleRepository;
import com.restapi.restapireact.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<RoleEntity> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public RoleEntity getOne(long id) {
        return roleRepository.getOne(id);
    }

    @Override
    public RoleEntity getOneByName(String name) {
        return roleRepository.findByRole(name);
    }

    @Override
    public RoleEntity add(RoleEntity role) {
        return roleRepository.save(role);
    }

    @Override
    public RoleEntity save(RoleEntity role) {
        return roleRepository.save(role);
    }

    @Override
    public void delete(RoleEntity role) {
        roleRepository.delete(role);
    }
}
