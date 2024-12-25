# frozen_string_literal: true

class WorldController < ApplicationController
  def index
    render inertia: 'World', props: {
      chunk: Chunk.first.tiles
    }
  end
end
