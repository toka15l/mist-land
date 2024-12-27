type Chunk = {
  tiles: string;
};

export default function World({ chunk }: { chunk: Chunk }) {
  const rows = chunk.tiles.split("|");
  let tiles: string[][] = [];
  rows.forEach((row) => {
    tiles.push(row.split(","));
  });

  return (
    <>
      <div className="flex flex-col py-5">
        {tiles.map((row, indexY) => (
          <div
            className="bg-red-900 flex flex-row justify-center"
            key={`Y_${indexY}`}
          >
            {row.map((tile, indexX) => (
              <div
                className="bg-amber-600 inline font-mono"
                key={`Y_${indexY}_X_${indexX}`}
              >
                {tile === "" ? "\u00A0" : tile}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
