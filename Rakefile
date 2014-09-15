require 'nokogiri'

task :update_svg do
  svg = Nokogiri::XML(File.read('svg/fingering.svg'))
  html = Nokogiri::HTML(File.read('index.html'))

  html.find(svg).first.replace(svg)
  puts html.to_s
end

