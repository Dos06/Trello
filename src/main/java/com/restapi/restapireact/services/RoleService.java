package com.restapi.restapireact.services;

import com.restapi.restapireact.entities.RoleEntity;

import java.util.List;

public interface RoleService {
    List<RoleEntity> getAll();
    RoleEntity getOne(long id);
    RoleEntity getOneByName(String name);
    RoleEntity add(RoleEntity role);
    RoleEntity save(RoleEntity role);
    void delete(RoleEntity role);
}
