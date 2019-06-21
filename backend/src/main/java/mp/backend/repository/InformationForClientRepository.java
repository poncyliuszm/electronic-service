package mp.backend.repository;

import mp.backend.model.InformationForClient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformationForClientRepository extends JpaRepository<InformationForClient, Integer> {
}
