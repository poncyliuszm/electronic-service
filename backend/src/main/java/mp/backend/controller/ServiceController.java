package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Service;
import mp.backend.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/electronicService")
public class ServiceController {

    private final ServiceRepository serviceRepository;

    @Autowired
    public ServiceController(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping("/list")
    public List<Service> list() {
        return serviceRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Service getOne(@PathVariable("id") Integer id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Service Service) {
        serviceRepository.save(Service);
    }

    @PutMapping()
    public Service update(@RequestBody Service Service) {
        return serviceRepository.save(Service);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        serviceRepository.deleteById(id);
    }
}
