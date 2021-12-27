SET bin_folder=node_modules\.bin
SET file=%1
%bin_folder%\vt2geojson.cmd %file% | %bin_folder%\geojsonio.cmd