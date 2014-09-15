require 'nokogiri'

task :update_svg do
  svg = Nokogiri::XML(File.read('svg/fingering.svg'))
  html = Nokogiri::HTML(File.read('index.html'))

  html.css('svg').first.replace svg.css('svg').first

  File.open('index.html', 'w') do |f|
    f.puts html.to_s
  end
end

