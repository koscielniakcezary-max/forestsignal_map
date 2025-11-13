ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-10.469115, 52.207313, -7.829574, 54.559681]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_co_galway_wind_1 = new ol.format.GeoJSON();
var features_co_galway_wind_1 = format_co_galway_wind_1.readFeatures(json_co_galway_wind_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_co_galway_wind_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_co_galway_wind_1.addFeatures(features_co_galway_wind_1);
var lyr_co_galway_wind_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_co_galway_wind_1, 
                style: style_co_galway_wind_1,
                popuplayertitle: 'co_galway_wind',
                interactive: false,
                title: '<img src="styles/legend/co_galway_wind_1.png" /> co_galway_wind'
            });
var format_private_forest_galway_2 = new ol.format.GeoJSON();
var features_private_forest_galway_2 = format_private_forest_galway_2.readFeatures(json_private_forest_galway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_private_forest_galway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_private_forest_galway_2.addFeatures(features_private_forest_galway_2);
var lyr_private_forest_galway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_private_forest_galway_2, 
                style: style_private_forest_galway_2,
                popuplayertitle: 'private_forest_galway',
                interactive: true,
                title: '<img src="styles/legend/private_forest_galway_2.png" /> private_forest_galway'
            });
var format_private_wind_galway_3 = new ol.format.GeoJSON();
var features_private_wind_galway_3 = format_private_wind_galway_3.readFeatures(json_private_wind_galway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_private_wind_galway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_private_wind_galway_3.addFeatures(features_private_wind_galway_3);
var lyr_private_wind_galway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_private_wind_galway_3, 
                style: style_private_wind_galway_3,
                popuplayertitle: 'private_wind_galway',
                interactive: true,
    title: 'private_wind_galway<br />\
    <img src="styles/legend/private_wind_galway_3_0.png" /> 0.1 - 1.3<br />\
    <img src="styles/legend/private_wind_galway_3_1.png" /> 1.3 - 3.9<br />\
    <img src="styles/legend/private_wind_galway_3_2.png" /> 3.9 - 8<br />\
    <img src="styles/legend/private_wind_galway_3_3.png" /> 8 - 15<br />\
    <img src="styles/legend/private_wind_galway_3_4.png" /> 15 - 35.1<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_co_galway_wind_1.setVisible(true);lyr_private_forest_galway_2.setVisible(true);lyr_private_wind_galway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_co_galway_wind_1,lyr_private_forest_galway_2,lyr_private_wind_galway_3];
lyr_co_galway_wind_1.set('fieldAliases', {'fid': 'fid', 'ESRI_OID': 'ESRI_OID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'GUID': 'GUID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'CC_ID': 'CC_ID', });
lyr_private_forest_galway_2.set('fieldAliases', {'fid': 'fid', 'Sp_1': 'Sp_1', 'Sp_2': 'Sp_2', 'Sp_3': 'Sp_3', 'Area_ha': 'Area_ha', });
lyr_private_wind_galway_3.set('fieldAliases', {'fid': 'fid', 'wb_area': 'wb_area', });
lyr_co_galway_wind_1.set('fieldImages', {'fid': 'TextEdit', 'ESRI_OID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'GUID': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'CC_ID': 'TextEdit', });
lyr_private_forest_galway_2.set('fieldImages', {'fid': '', 'Sp_1': '', 'Sp_2': '', 'Sp_3': '', 'Area_ha': '', });
lyr_private_wind_galway_3.set('fieldImages', {'fid': 'TextEdit', 'wb_area': 'TextEdit', });
lyr_co_galway_wind_1.set('fieldLabels', {'fid': 'no label', 'ESRI_OID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'GUID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'CC_ID': 'no label', });
lyr_private_forest_galway_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Sp_1': 'inline label - visible with data', 'Sp_2': 'inline label - visible with data', 'Sp_3': 'inline label - visible with data', 'Area_ha': 'inline label - always visible', });
lyr_private_wind_galway_3.set('fieldLabels', {'fid': 'inline label - always visible', 'wb_area': 'inline label - always visible', });
lyr_private_wind_galway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});