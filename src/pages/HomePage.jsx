import React, { useState, useEffect } from 'react';
import SubjectCard from '../components/SubjectCard';
import subjectsData from '../../data/subjects.json';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Master Your Exams at <span className="text-primary">2 AM.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          AI-generated, student-curated academic notes for the modern learner. 
          Clean, fast, and structured for maximum retention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsData.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
