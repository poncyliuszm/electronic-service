package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.ServiceStatus;
import mp.backend.repository.ServiceStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/serviceStatus")
public class ServiceStatusController {

    private final ServiceStatusRepository serviceStatusRepository;

    @Autowired
    public ServiceStatusController(ServiceStatusRepository serviceStatusRepository) {
        this.serviceStatusRepository = serviceStatusRepository;
    }

    @GetMapping("/list")
    public List<ServiceStatus> list() {
        return serviceStatusRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public ServiceStatus getOne(@PathVariable("id") Integer id) {
        return serviceStatusRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody ServiceStatus paymentType) {
        serviceStatusRepository.save(paymentType);
    }

    @PutMapping()
    public ServiceStatus update(@RequestBody ServiceStatus paymentType) {
        return serviceStatusRepository.save(paymentType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        serviceStatusRepository.deleteById(id);
    }
}
