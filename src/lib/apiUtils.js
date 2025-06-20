export async function fetchAPOD(apiKey) {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch APOD");
  }
  return res.json();
}

export const getISSPosition = async () => {
  const res = await fetch("http://api.open-notify.org/iss-now.json");
  const data = await res.json();
  return data.iss_position;
};
