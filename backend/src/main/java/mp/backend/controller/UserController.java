package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Client;
import mp.backend.model.User;
import mp.backend.repository.ClientRepository;
import mp.backend.repository.UserRepository;
import mp.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;
    private final ClientRepository clientRepository;

    @Autowired
    public UserController(UserRepository userRepository,
                          UserService userService,
                          ClientRepository clientRepository) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.clientRepository = clientRepository;
    }

    @GetMapping("/currentUser")
    public User getCurrentUser() {
        return userService.getCurrentUser();
    }

    @GetMapping("/list")
    public List<User> list() {
        return userRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public User getOne(@PathVariable("id") Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody User user) {
        Client clientSaved = clientRepository.save(user.getClient());
        user.setClientId(clientSaved.getId());
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userRepository.save(user);
    }

    @PutMapping()
    public User update(@RequestBody User user) {
        return userService.update(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        userRepository.deleteById(id);
    }
}
