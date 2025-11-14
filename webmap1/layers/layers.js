var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TreeInventoryNumberedPoints_1 = new ol.format.GeoJSON();
var features_TreeInventoryNumberedPoints_1 = format_TreeInventoryNumberedPoints_1.readFeatures(json_TreeInventoryNumberedPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeInventoryNumberedPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeInventoryNumberedPoints_1.addFeatures(features_TreeInventoryNumberedPoints_1);
var lyr_TreeInventoryNumberedPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeInventoryNumberedPoints_1, 
                style: style_TreeInventoryNumberedPoints_1,
                popuplayertitle: 'Tree Inventory – Numbered Points',
                interactive: false,
                title: 'Tree Inventory – Numbered Points'
            });
var format_SurveyAreaTestPolygon_2 = new ol.format.GeoJSON();
var features_SurveyAreaTestPolygon_2 = format_SurveyAreaTestPolygon_2.readFeatures(json_SurveyAreaTestPolygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyAreaTestPolygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyAreaTestPolygon_2.addFeatures(features_SurveyAreaTestPolygon_2);
var lyr_SurveyAreaTestPolygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurveyAreaTestPolygon_2, 
                style: style_SurveyAreaTestPolygon_2,
                popuplayertitle: 'Survey Area – Test Polygon',
                interactive: false,
                title: '<img src="styles/legend/SurveyAreaTestPolygon_2.png" /> Survey Area – Test Polygon'
            });
var format_DBHDiameteratBreastHeightcm_3 = new ol.format.GeoJSON();
var features_DBHDiameteratBreastHeightcm_3 = format_DBHDiameteratBreastHeightcm_3.readFeatures(json_DBHDiameteratBreastHeightcm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DBHDiameteratBreastHeightcm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DBHDiameteratBreastHeightcm_3.addFeatures(features_DBHDiameteratBreastHeightcm_3);
cluster_DBHDiameteratBreastHeightcm_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_DBHDiameteratBreastHeightcm_3
});
var lyr_DBHDiameteratBreastHeightcm_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DBHDiameteratBreastHeightcm_3, 
                style: style_DBHDiameteratBreastHeightcm_3,
                popuplayertitle: 'DBH – Diameter at Breast Height (cm)',
                interactive: true,
    title: 'DBH – Diameter at Breast Height (cm)<br />\
    <img src="styles/legend/DBHDiameteratBreastHeightcm_3_0.png" /> DBH 25.6–31.3 cm – Large Trees<br />\
    <img src="styles/legend/DBHDiameteratBreastHeightcm_3_1.png" /> DBH 20.3–25.6 cm – Medium Trees<br />\
    <img src="styles/legend/DBHDiameteratBreastHeightcm_3_2.png" /> DBH 12.1–20.3 cm – Young Trees<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_TreeInventoryNumberedPoints_1.setVisible(true);lyr_SurveyAreaTestPolygon_2.setVisible(true);lyr_DBHDiameteratBreastHeightcm_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TreeInventoryNumberedPoints_1,lyr_SurveyAreaTestPolygon_2,lyr_DBHDiameteratBreastHeightcm_3];
lyr_TreeInventoryNumberedPoints_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Photo': 'Photo', 'Species': 'Species', 'DBH': 'DBH', 'Class': 'Class', 'HT': 'HT', 'HDR': 'HDR', 'Class_Quality': 'Class_Quality', 'ShortDate': 'ShortDate', 'MyDate': 'MyDate', });
lyr_SurveyAreaTestPolygon_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_DBHDiameteratBreastHeightcm_3.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Photo': 'Photo', 'Species': 'Species', 'DBH': 'DBH', 'Class': 'Class', 'HT': 'HT', 'HDR': 'HDR', 'Class_Quality': 'Class_Quality', 'ShortDate': 'ShortDate', 'MyDate': 'MyDate', });
lyr_TreeInventoryNumberedPoints_1.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Species': 'TextEdit', 'DBH': 'TextEdit', 'Class': 'TextEdit', 'HT': 'TextEdit', 'HDR': 'TextEdit', 'Class_Quality': 'TextEdit', 'ShortDate': 'TextEdit', 'MyDate': 'TextEdit', });
lyr_SurveyAreaTestPolygon_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_DBHDiameteratBreastHeightcm_3.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Species': 'TextEdit', 'DBH': 'TextEdit', 'Class': 'TextEdit', 'HT': 'TextEdit', 'HDR': 'TextEdit', 'Class_Quality': 'TextEdit', 'ShortDate': 'TextEdit', 'MyDate': 'TextEdit', });
lyr_TreeInventoryNumberedPoints_1.set('fieldLabels', {'Date': 'hidden field', 'Notes': 'hidden field', 'Photo': 'hidden field', 'Species': 'hidden field', 'DBH': 'inline label - always visible', 'Class': 'hidden field', 'HT': 'hidden field', 'HDR': 'hidden field', 'Class_Quality': 'hidden field', 'ShortDate': 'hidden field', 'MyDate': 'hidden field', });
lyr_SurveyAreaTestPolygon_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_DBHDiameteratBreastHeightcm_3.set('fieldLabels', {'fid': 'hidden field', 'Date': 'hidden field', 'Notes': 'inline label - always visible', 'Photo': 'no label', 'Species': 'inline label - always visible', 'DBH': 'inline label - always visible', 'Class': 'inline label - always visible', 'HT': 'hidden field', 'HDR': 'hidden field', 'Class_Quality': 'inline label - always visible', 'ShortDate': 'hidden field', 'MyDate': 'inline label - visible with data', });
lyr_DBHDiameteratBreastHeightcm_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});