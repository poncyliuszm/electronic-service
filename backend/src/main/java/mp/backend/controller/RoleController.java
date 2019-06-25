package mp.backend.controller;

import mp.backend.model.Role;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {

    @GetMapping("/list")
    public List<Role> list() {
        return Arrays.asList(Role.values());
    }
}
