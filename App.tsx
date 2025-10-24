import React, { useState } from 'react';
import { BookInput } from './components/BookInput';
import { SummaryDisplay } from './components/SummaryDisplay';
import { generateBookTeaser } from './services/geminiService';

// Fix: Implement the main App component to manage state and orchestrate the UI
const App: React.FC = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [submittedBookTitle, setSubmittedBookTitle] = useState('');
  const [teaser, setTeaser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!bookTitle.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setTeaser('');
    setSubmittedBookTitle(bookTitle);

    try {
      // Fix: Call the service to generate teaser and handle the response
      const result = await generateBookTeaser(bookTitle);
      setTeaser(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate teaser. ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfaf5] min-h-screen font-sans text-stone-900">
      <main className="container mx-auto px-4 py-8 sm:py-16 max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 tracking-tight">
            AI Book Teaser Generator
          </h1>
          <p className="mt-3 text-lg text-stone-600 max-w-xl mx-auto">
            Enter the title of a book and our AI will craft an irresistible teaser to hook your next reader.
          </p>
        </header>
        
        <div className="p-6 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl shadow-md">
          <BookInput 
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>

        {error && (
          <div className="mt-8 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}

        <SummaryDisplay 
          teaser={teaser}
          bookTitle={submittedBookTitle}
          isLoading={isLoading}
        />

        {!isLoading && !teaser && !error && (
            <div className="mt-8 text-center text-stone-500">
                <p>Your generated teaser will appear here.</p>
            </div>
        )}
      </main>
      <footer className="text-center py-6 text-stone-500 text-sm">
        <p>Powered by Google Gemini</p>
      </footer>
    </div>
  );
};

export default App;
