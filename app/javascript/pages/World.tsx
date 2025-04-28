type Tile = {
  id: number;
  display: string;
  color: string;
  bg_color: string;
};

type Chunk = {
  tiles: string;
};

export default function World({
  chunk,
  tiles,
}: {
  chunk: Chunk;
  tiles: Tile[];
}) {
  const rows = chunk.tiles.split("|");
  let chunkTiles: string[][] = [];
  rows.forEach((row) => {
    chunkTiles.push(row.split(","));
  });

  return (
    <>
      <div className="flex flex-col py-5 bg-black h-screen">
        {chunkTiles.map((row, indexY) => (
          <div className="flex flex-row justify-center" key={`Y_${indexY}`}>
            {row.map((tileId, indexX) => {
              const tile = tiles.find((tile) => tile.id === parseInt(tileId));

              return (
                <div
                  className={`inline font-mono`}
                  key={`Y_${indexY}_X_${indexX}`}
                  style={{
                    backgroundColor: !tile ? "" : tile.bg_color,
                    color: !tile ? "" : tile.color,
                  }}
                >
                  {!tile ? "\u00A0" : tile.display}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
