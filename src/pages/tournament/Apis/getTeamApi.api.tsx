const getTeamApi = async () => {
  const response = await fetch(`http://localhost:8080/teams/search`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  });
  return response.json();
};

export { getTeamApi };
