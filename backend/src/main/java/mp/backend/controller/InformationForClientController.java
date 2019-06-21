package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.InformationForClient;
import mp.backend.repository.InformationForClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/informationForClient")
public class InformationForClientController {

    private final InformationForClientRepository informationForClientRepository;

    @Autowired
    public InformationForClientController(InformationForClientRepository informationForClientRepository) {
        this.informationForClientRepository = informationForClientRepository;
    }

    @GetMapping("/list")
    public List<InformationForClient> list() {
        return informationForClientRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public InformationForClient getOne(@PathVariable("id") Integer id) {
        return informationForClientRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody InformationForClient informationForClient) {
        informationForClientRepository.save(informationForClient);
    }

    @PutMapping()
    public InformationForClient update(@RequestBody InformationForClient informationForClient) {
        return informationForClientRepository.save(informationForClient);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        informationForClientRepository.deleteById(id);
    }
}
