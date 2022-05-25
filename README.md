# gullydeckel-dashboard

http://localhost/cgi-bin/mapserv?map=/mnt/c/Users/danie/projects/gullydeckel-dashboard/map/mapfile.map&service=wms&request=GetCapabilities

http://localhost/cgi-bin/mapserv?map=/mnt/c/Users/danie/projects/gullydeckel-dashboard/map/mapfile.map&service=wms&request=GetMap&version=1.3.0&layers=pct-by-us-forest-service-2011&crs=EPSG:4326&bbox=-180,-90,180,90&format=png&width=300&height=150


gdal_translate -of GTiff -a_nodata 255 -gcp 193.046 99.1104 -1.38265e+07 5.1609e+06 -gcp 997.907 102.138 -1.33573e+07 5.1609e+06 -gcp 1540.97 2358.91 -1.30381e+07 3.83373e+06 -gcp 533.812 1101.14 -1.36269e+07 4.57265e+06 -gcp 1211.92 1857.17 -1.32095e+07 4.12714e+06 -gcp 1274.05 1680.27 -1.31709e+07 4.22569e+06 -gcp 1012.91 1065.34 -1.33191e+07 4.5888e+06 -gcp 630.685 322.997 -1.35563e+07 5.03557e+06 -gcp 1808.95 2228.87 -1.28806e+07 3.90966e+06 -gcp 1073.98 2196.22 -1.33112e+07 3.92977e+06 -gcp 157.903 497.79 -1.38489e+07 4.93034e+06 -gcp 911.564 120.038 -1.34069e+07 5.14985e+06 "C:/Users/danie/projects/gullydeckel-dashboard/map/data/PCT-overview-map-on-2-pages-by-Magellan-pg1.webp" "C:/Users/danie/AppData/Local/Temp/PCT-overview-map-on-2-pages-by-Magellan-pg1.webp"
gdalwarp -r near -order 3 -co COMPRESS=None -dstalpha -t_srs EPSG:3857 "C:/Users/danie/AppData/Local/Temp/PCT-overview-map-on-2-pages-by-Magellan-pg1.webp" "C:/Users/danie/projects/gullydeckel-dashboard/map/data/PCT-overview-map-on-2-pages-by-Magellan-pg1_modified.tif"
