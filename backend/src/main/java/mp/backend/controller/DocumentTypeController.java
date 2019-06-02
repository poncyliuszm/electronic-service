package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.DocumentType;
import mp.backend.repository.DocumentTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/documentType")
public class DocumentTypeController {

    private final DocumentTypeRepository documentTypeRepository;

    @Autowired
    public DocumentTypeController(DocumentTypeRepository documentTypeRepository) {
        this.documentTypeRepository = documentTypeRepository;
    }

    @GetMapping("/list")
    public List<DocumentType> list() {
        return documentTypeRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public DocumentType getOne(@PathVariable("id") Integer id) {
        return documentTypeRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody DocumentType documentType) {
        documentTypeRepository.save(documentType);
    }

    @PutMapping()
    public DocumentType update(@RequestBody DocumentType documentType) {
        return documentTypeRepository.save(documentType);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        documentTypeRepository.deleteById(id);
    }
}
