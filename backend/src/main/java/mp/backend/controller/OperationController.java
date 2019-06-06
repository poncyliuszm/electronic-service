package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Operation;
import mp.backend.repository.OperationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/operation")
public class OperationController {

    private final OperationRepository operationRepository;

    @Autowired
    public OperationController(OperationRepository operationRepository) {
        this.operationRepository = operationRepository;
    }

    @GetMapping("/list")
    public List<Operation> list() {
        return operationRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Operation getOne(@PathVariable("id") Integer id) {
        return operationRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Operation operation) {
        operationRepository.save(operation);
    }

    @PutMapping()
    public Operation update(@RequestBody Operation operation) {
        return operationRepository.save(operation);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        operationRepository.deleteById(id);
    }
}
