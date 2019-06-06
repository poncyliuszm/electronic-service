package mp.backend.repository;

import mp.backend.model.ServiceStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceStatusRepository extends JpaRepository<ServiceStatus, Integer> {
}