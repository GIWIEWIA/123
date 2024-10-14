package com.example.smart.VDEG.repository;

import com.example.smart.VDEG.entity.ActivitySummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivitySummaryRepository extends JpaRepository<ActivitySummary, Long> {

    @Query("SELECT a FROM ActivitySummary a WHERE a.activity.activityId = :activityId")
    List<ActivitySummary> findByActivityId(Long activityId);
}
