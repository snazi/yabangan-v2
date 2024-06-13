// app/page.tsx
import { promises as fs } from 'fs';

type Season = {
  id: number;
  name: string;
};

export default async function Home() {

  const file = `
  {
    "seasons": [
      {
        "id": 1,
        "name": "2020-2021",
        "games": [
          { "id": 1, "date": "2020-10-10", "opponent": "Team A", "result": "W" },
          { "id": 2, "date": "2020-10-15", "opponent": "Team B", "result": "L" },
          { "id": 3, "date": "2020-10-20", "opponent": "Team C", "result": "W" }
        ],
        "players": [
          { "id": 1, "name": "Player 1", "points": 500, "assists": 200, "rebounds": 300 },
          { "id": 2, "name": "Player 2", "points": 450, "assists": 150, "rebounds": 250 },
          { "id": 3, "name": "Player 3", "points": 400, "assists": 180, "rebounds": 280 }
        ]
      },
      {
        "id": 2,
        "name": "2021-2022",
        "games": [
          { "id": 1, "date": "2021-10-10", "opponent": "Team X", "result": "W" },
          { "id": 2, "date": "2021-10-15", "opponent": "Team Y", "result": "L" },
          { "id": 3, "date": "2021-10-20", "opponent": "Team Z", "result": "W" }
        ],
        "players": [
          { "id": 1, "name": "Player 1", "points": 600, "assists": 250, "rebounds": 350 },
          { "id": 2, "name": "Player 2", "points": 550, "assists": 200, "rebounds": 300 },
          { "id": 3, "name": "Player 3", "points": 500, "assists": 230, "rebounds": 330 }
        ]
      },
      {
        "id": 3,
        "name": "2022-2023",
        "games": [
          { "id": 1, "date": "2022-10-10", "opponent": "Team P", "result": "W" },
          { "id": 2, "date": "2022-10-15", "opponent": "Team Q", "result": "L" },
          { "id": 3, "date": "2022-10-20", "opponent": "Team R", "result": "W" }
        ],
        "players": [
          { "id": 1, "name": "Player 1", "points": 700, "assists": 300, "rebounds": 400 },
          { "id": 2, "name": "Player 2", "points": 650, "assists": 270, "rebounds": 370 },
          { "id": 3, "name": "Player 3", "points": 600, "assists": 250, "rebounds": 350 }
        ]
      }
    ]
  }
  `
  const seasons = JSON.parse(file);

  console.log("something"+ seasons)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Yabangan League Seasons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {seasons['seasons'].map((season) => (
          <a
            key={season.id}
            href={`/season/${season.id}`}
            className="flex items-center justify-center bg-white border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-lg font-medium text-gray-700">{season.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
