'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ResultsHeader: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/student/dashboard')}
              className="mr-4 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-bold text-gray-900 flex justify-center">
              Exam Results
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResultsHeader;
