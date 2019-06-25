package mp.backend.controller;

import mp.backend.model.User;
import mp.backend.repository.UserRepository;
import mp.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
public class LoginController {

    private UserRepository userRepository;
    private UserService userService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public LoginController(UserRepository userRepository,
                           UserService userService,
                           BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/login")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

    @PostMapping("/changePassword")
    public void changePassword(@RequestBody String password) {
        User currentUser = this.userService.getCurrentUser();
        currentUser.setPassword(bCryptPasswordEncoder.encode(password));

        userRepository.save(currentUser);
    }
}
