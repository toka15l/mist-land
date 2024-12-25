type Chunk = {
  tiles: string;
};

export default function InertiaExample({ chunk }: { chunk: Chunk }) {
  const rows = chunk.tiles.split("|");
  let tiles: string[][] = [];
  rows.forEach((row) => {
    tiles.push(row.split(","));
  });

  return (
    <>
      <div className="flex flex-col">
        {tiles.map((row) => (
          <div className="bg-red-900 flex flex-row justify-center">
            {row.map((tile) => (
              <div className="bg-amber-600 inline font-mono">{tile}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
