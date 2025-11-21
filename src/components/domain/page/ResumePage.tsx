import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { contentClient } from '@/client/ContentClient';

const ResumePage = () => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setIsLoading(true);
        const data = await contentClient.getResume();
        setContent(data.content);
        setError(null);
      } catch (err) {
        setError('Failed to load resume content');
        console.error('Error fetching resume:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* I am immensely proud of the work I've done in my career. */}
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default ResumePage;
