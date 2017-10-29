
package com.az.als.eventmanager.repository;

import com.az.als.eventmanager.entity.Event;
import com.az.als.eventmanager.entity.EventContributorDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventContributorDetailRepository extends CrudRepository<EventContributorDetail, Long> {
}