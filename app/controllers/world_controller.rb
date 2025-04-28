# frozen_string_literal: true

class WorldController < ApplicationController
  def index
    tile_ids = Chunk.first.tiles.split(/[,|]/).uniq
    tiles = Tile.where(id: tile_ids).select(:id, :display, :color, :bg_color)

    render inertia: 'World', props: {
      chunk: {tiles: Chunk.first.tiles}, tiles: tiles
    }
  end
end
