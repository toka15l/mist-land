# frozen_string_literal: true

class WorldController < ApplicationController
  def index
    render inertia: 'World', props: {
      chunk: {tiles: Chunk.first.tiles}
    }
  end
end
