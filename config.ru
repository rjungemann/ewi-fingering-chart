require 'sinatra/base'

module Fingering
  class App < Sinatra::Base
    get '/' do
      @fingering = File.read("#{File.dirname(__FILE__)}/public/svg/fingering.svg")
      @notes = File.read("#{File.dirname(__FILE__)}/public/svg/notes.svg")

      erb :'index.html'
    end
  end
end

run Fingering::App.new

