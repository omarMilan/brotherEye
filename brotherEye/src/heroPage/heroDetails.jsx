import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const API_BASE =
  "http://localhost:8080/https://superheroapi.com/api/55f51348797eae3f8dd7f54b523b814a/search/";

export default function HeroDetails({ heroName, fields }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      fetch(`${API_BASE}${heroName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          if (json.response === "success") {
            const hero = json.results[0];
            setData({
              name: hero.name,
              stats: hero.powerstats,
              appearance: hero.appearance,
              image: hero.image,
              biography: hero.biography,
              connections: hero.connections,
              work: hero.work,
            });
          } else {
            setError("Hero not found");
          }
        })
        .catch((err) => {
          setError("Error fetching data");
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [heroName]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Prepare chart data if "chart" is included in fields
  const chartData =
    fields.includes("chart") && data?.stats
      ? {
          labels: [
            "Intelligence",
            "Strength",
            "Speed",
            "Durability",
            "Power",
            "Combat",
          ],
          datasets: [
            {
              label: "Hero Stats",
              data: [
                data.stats.intelligence || 0,
                data.stats.strength || 0,
                data.stats.speed || 0,
                data.stats.durability || 0,
                data.stats.power || 0,
                data.stats.combat || 0,
              ],
              backgroundColor: "rgba(255, 28, 88, 0.2)",
              borderColor: "#FF1C58",
              borderWidth: 2,
              pointBackgroundColor: "#FF1C58",
              pointBorderColor: "#1A202C",
              pointHoverBackgroundColor: "#1A202C",
              pointHoverBorderColor: "#FF1C58",
            },
          ],
        }
      : null;

  return (
    <div>
      {fields.includes("image") && (
        <img
          src={data.image.url}
          alt={data.name}
          style={{
            width: "125px",
            height: "125px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
          className="rounded-full shadow-sm shadow-black drop-shadow-md"
        />
      )}
      {fields.includes("name") && <h1>{data.name}</h1>}
      {fields.includes("gender") && <p>Gender: {data.appearance.gender}</p>}
      {fields.includes("race") && <p>Race: {data.appearance.race}</p>}
      {fields.includes("height") && (
        <p>Height: {data.appearance.height.join(", ")}</p>
      )}
      {fields.includes("weight") && (
        <p>Weight: {data.appearance.weight.join(", ")}</p>
      )}
      {fields.includes("hairColor") && (
        <p>Hair Color: {data.appearance["hair-color"]}</p>
      )}
      {fields.includes("eyeColor") && (
        <p>Eye Color: {data.appearance["eye-color"]}</p>
      )}
      {fields.includes("birth") && (
        <p>Place of Birth: {data.biography["place-of-birth"]}</p>
      )}
      {fields.includes("alignment") && (
        <p>Alignment: {data.biography.alignment}</p>
      )}
      {fields.includes("publisher") && (
        <p>Publisher: {data.biography.publisher}</p>
      )}
      {fields.includes("groupAffiliations") && (
        <p>Group Affiliations: {data.connections["group-affiliation"]}</p>
      )}
      {fields.includes("relatives") && (
        <p>Relatives: {data.connections.relatives}</p>
      )}
      {fields.includes("occupation") && (
        <p>Occupation: {data.work.occupation}</p>
      )}
      {fields.includes("base") && <p>Base: {data.work.base}</p>}

      {/* Render Chart */}
      {fields.includes("chart") && chartData && (
        <div
          className="mt-8"
          style={{
            width: "500px",
            height: "500px",
          }}
        >
          <Radar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  ticks: {
                    color: "#FF1C58",
                    backdropColor: "#101010",
                    font: {
                      size: 14,
                    },
                  },
                  angleLines: {
                    color: "#2D3748",
                  },
                  grid: {
                    color: "#2D3748",
                  },
                  pointLabels: {
                    color: "#00B7EB", // Blue text for point labels
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "#FF1C58", // Red legend labels
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
