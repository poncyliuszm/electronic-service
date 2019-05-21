package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Producer;
import mp.backend.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producer")
public class ProducerController {

    private final ProducerRepository producerRepository;

    @Autowired
    public ProducerController(ProducerRepository producerRepository) {
        this.producerRepository = producerRepository;
    }

    @GetMapping("/list")
    public List<Producer> list() {
        return producerRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Producer getOne(@PathVariable("id") Integer id) {
        return producerRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Producer producer) {
        producerRepository.save(producer);
    }

    @PutMapping()
    public Producer update(@RequestBody Producer producer) {
        return producerRepository.save(producer);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        producerRepository.deleteById(id);
    }
}
