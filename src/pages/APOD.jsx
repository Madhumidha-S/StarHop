import { useEffect, useState } from 'react';
import { fetchAPOD } from '../lib/apiUtils';

const NASA_API_KEY = 'API_KEY';

export default function APOD() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAPOD(NASA_API_KEY)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching APOD');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading Astronomy Picture...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-black bg-opacity-60 rounded-lg shadow-lg mt-10 text-white">
      <h1 className="text-4xl font-bold mb-4 text-indigo-400 text-center">NASA Astronomy Picture of the Day</h1>
      {data.media_type === 'video' ? (
        <iframe
          title="APOD Video"
          src={data.url}
          className="w-full h-96 rounded-lg"
          allowFullScreen
        />
      ) : (
        <img src={data.url} alt={data.title} className="w-full rounded-lg" />
      )}
      <h2 className="text-2xl font-semibold mt-4">{data.title}</h2>
      <p className="mt-2 italic">{data.date}</p>
      <p className="mt-4">{data.explanation}</p>
    </div>
  );
}
