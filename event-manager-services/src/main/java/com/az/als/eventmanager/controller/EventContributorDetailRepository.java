package com.az.als.eventmanager.controller;

import com.az.als.eventmanager.entity.EventContributorDetail;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "eventcontributordetail")
public interface EventContributorDetailRepository extends PagingAndSortingRepository<EventContributorDetail, Long> {
    List<EventContributorDetail> findByContributorName(@Param("contributorName") String contributorName);
}
