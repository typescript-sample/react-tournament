const findTournamentApi = async (body: any) => {
  const response = await fetch("http://localhost:8080/tournaments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export { findTournamentApi };