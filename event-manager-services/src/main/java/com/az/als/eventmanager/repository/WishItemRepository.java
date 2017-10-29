package com.az.als.eventmanager.repository;

import com.az.als.eventmanager.entity.WishItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishItemRepository extends CrudRepository<WishItem, Long> {
}