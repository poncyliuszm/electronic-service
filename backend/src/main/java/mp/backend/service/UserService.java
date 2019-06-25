package mp.backend.service;

import mp.backend.model.Client;
import mp.backend.model.User;
import mp.backend.repository.ClientRepository;
import mp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ClientRepository clientRepository;

    @Autowired
    public UserService(UserRepository userRepository,
                       ClientRepository clientRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
    }

    public User update(User user) {
        Client client = user.getClient();
        clientRepository.save(client);

        return userRepository.save(user);
    }

    public void save(User user) {
        Client client = new Client(user.getClient());
        Client savedClient = clientRepository.save(client);

        user.setClientId(savedClient.getId());
        userRepository.save(user);
    }

    public User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findByLogin(auth.getName());
    }
}
