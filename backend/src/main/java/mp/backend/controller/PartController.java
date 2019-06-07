package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Part;
import mp.backend.repository.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/part")
public class PartController {

    private final PartRepository partRepository;

    @Autowired
    public PartController(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    @GetMapping("/list")
    public List<Part> list() {
        return partRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Part getOne(@PathVariable("id") Integer id) {
        return partRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Part part) {
        partRepository.save(part);
    }

    @PutMapping()
    public Part update(@RequestBody Part part) {
        return partRepository.save(part);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        partRepository.deleteById(id);
    }
}
