package com.restapi.restapireact.controllers;

import com.restapi.restapireact.entities.RoleEntity;
import com.restapi.restapireact.entities.UserEntity;
import com.restapi.restapireact.jwt.JwtRequest;
import com.restapi.restapireact.jwt.JwtResponse;
import com.restapi.restapireact.jwt.JwtTokenGenerator;
import com.restapi.restapireact.services.RoleService;
import com.restapi.restapireact.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JwtAuthController {
    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/auth")
    public ResponseEntity<?> auth(@RequestBody JwtRequest request) throws Exception {
        authenticate(request.getEmail(), request.getPassword());
        final UserDetails userDetails = userService.loadUserByUsername(request.getEmail());
        final String token = jwtTokenGenerator.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    public void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("User is disabled", e);
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid credentials", e);
        }
    }

    @PostMapping(value = "/auth/register")
    @PreAuthorize("isAnonymous()")
    public ResponseEntity<?> signUp(@RequestBody UserEntity newUser) {
        UserEntity user = userService.getOneByEmail(newUser.getEmail());
        if (user == null) {
            List<RoleEntity> roles = new ArrayList<>(1);
            roles.add(roleService.getOneByName("ROLE_USER"));
            newUser.setRoles(roles);
            userService.add(newUser);
        }
        return ResponseEntity.ok(newUser);
    }

    @GetMapping(value = "/auth/profile/{email}")
    public ResponseEntity<?> getProfile(@PathVariable String email) {
        UserEntity user = userService.getOneByEmail(email);
        return ResponseEntity.ok(Objects.requireNonNullElse(user, HttpEntity.EMPTY));
    }

    @PutMapping(value = "/auth/edit/name/{email}/{name}")
    public ResponseEntity<?> editUserName(@PathVariable String email, @PathVariable String name) {
        UserEntity user = userService.getOneByEmail(email);
        user.setName(name);
        userService.save(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping(value = "/auth/edit/password/{email}/{oldpassword}/{password}")
    public ResponseEntity<?> editUserPassword(
            @PathVariable String email,
            @PathVariable String oldpassword,
            @PathVariable String password) {
        UserEntity user = userService.getOneByEmail(email);
        System.out.println(user.getPassword() + "---------" + passwordEncoder.encode(oldpassword));
//        if (user.getPassword().equals(passwordEncoder.encode(oldpassword))) {
            user.setPassword(password);
            userService.save(user);
//        }
        return ResponseEntity.ok(user);
    }
}
