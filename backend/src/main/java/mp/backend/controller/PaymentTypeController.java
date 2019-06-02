package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.PaymentType;
import mp.backend.repository.PaymentTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paymentType")
public class PaymentTypeController {

    private final PaymentTypeRepository paymentTypeRepository;

    @Autowired
    public PaymentTypeController(PaymentTypeRepository paymentTypeRepository) {
        this.paymentTypeRepository = paymentTypeRepository;
    }

    @GetMapping("/list")
    public List<PaymentType> list() {
        return paymentTypeRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public PaymentType getOne(@PathVariable("id") Integer id) {
        return paymentTypeRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody PaymentType paymentType) {
        paymentTypeRepository.save(paymentType);
    }

    @PutMapping()
    public PaymentType update(@RequestBody PaymentType paymentType) {
        return paymentTypeRepository.save(paymentType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        paymentTypeRepository.deleteById(id);
    }
}
