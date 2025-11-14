var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NumberTree_1 = new ol.format.GeoJSON();
var features_NumberTree_1 = format_NumberTree_1.readFeatures(json_NumberTree_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumberTree_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberTree_1.addFeatures(features_NumberTree_1);
var lyr_NumberTree_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberTree_1, 
                style: style_NumberTree_1,
                popuplayertitle: 'Number Tree',
                interactive: false,
                title: 'Number Tree'
            });
var format_Poly_test_2 = new ol.format.GeoJSON();
var features_Poly_test_2 = format_Poly_test_2.readFeatures(json_Poly_test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poly_test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poly_test_2.addFeatures(features_Poly_test_2);
var lyr_Poly_test_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poly_test_2, 
                style: style_Poly_test_2,
                popuplayertitle: 'Poly_test',
                interactive: false,
                title: '<img src="styles/legend/Poly_test_2.png" /> Poly_test'
            });
var format_DBHcopy_3 = new ol.format.GeoJSON();
var features_DBHcopy_3 = format_DBHcopy_3.readFeatures(json_DBHcopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBHcopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBHcopy_3.addFeatures(features_DBHcopy_3);
cluster_DBHcopy_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_DBHcopy_3
});
var lyr_DBHcopy_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DBHcopy_3, 
                style: style_DBHcopy_3,
                popuplayertitle: 'DBH copy',
                interactive: true,
    title: 'DBH copy<br />\
    <img src="styles/legend/DBHcopy_3_0.png" /> 25.6 - 31.3<br />\
    <img src="styles/legend/DBHcopy_3_1.png" /> 20.3 - 25.6<br />\
    <img src="styles/legend/DBHcopy_3_2.png" /> 12.1 - 20.3<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_NumberTree_1.setVisible(true);lyr_Poly_test_2.setVisible(true);lyr_DBHcopy_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NumberTree_1,lyr_Poly_test_2,lyr_DBHcopy_3];
lyr_NumberTree_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Photo': 'Photo', 'Species': 'Species', 'DBH': 'DBH', 'Class': 'Class', 'HT': 'HT', 'HDR': 'HDR', 'Class_Quality': 'Class_Quality', 'ShortDate': 'ShortDate', 'MyDate': 'MyDate', });
lyr_Poly_test_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_DBHcopy_3.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Photo': 'Photo', 'Species': 'Species', 'DBH': 'DBH', 'Class': 'Class', 'HT': 'HT', 'HDR': 'HDR', 'Class_Quality': 'Class_Quality', 'ShortDate': 'ShortDate', 'MyDate': 'MyDate', });
lyr_NumberTree_1.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Species': 'TextEdit', 'DBH': 'TextEdit', 'Class': 'TextEdit', 'HT': 'TextEdit', 'HDR': 'TextEdit', 'Class_Quality': 'TextEdit', 'ShortDate': 'TextEdit', 'MyDate': 'TextEdit', });
lyr_Poly_test_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_DBHcopy_3.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Species': 'TextEdit', 'DBH': 'TextEdit', 'Class': 'TextEdit', 'HT': 'TextEdit', 'HDR': 'TextEdit', 'Class_Quality': 'TextEdit', 'ShortDate': 'TextEdit', 'MyDate': 'TextEdit', });
lyr_NumberTree_1.set('fieldLabels', {'Date': 'hidden field', 'Notes': 'hidden field', 'Photo': 'hidden field', 'Species': 'hidden field', 'DBH': 'inline label - always visible', 'Class': 'hidden field', 'HT': 'hidden field', 'HDR': 'hidden field', 'Class_Quality': 'hidden field', 'ShortDate': 'hidden field', 'MyDate': 'hidden field', });
lyr_Poly_test_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_DBHcopy_3.set('fieldLabels', {'fid': 'hidden field', 'Date': 'hidden field', 'Notes': 'inline label - always visible', 'Photo': 'no label', 'Species': 'inline label - always visible', 'DBH': 'inline label - always visible', 'Class': 'inline label - always visible', 'HT': 'hidden field', 'HDR': 'hidden field', 'Class_Quality': 'inline label - always visible', 'ShortDate': 'hidden field', 'MyDate': 'inline label - visible with data', });
lyr_DBHcopy_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});