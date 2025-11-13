var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Trees9sample_1 = new ol.format.GeoJSON();
var features_Trees9sample_1 = format_Trees9sample_1.readFeatures(json_Trees9sample_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees9sample_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees9sample_1.addFeatures(features_Trees9sample_1);
cluster_Trees9sample_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Trees9sample_1
});
var lyr_Trees9sample_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Trees9sample_1, 
                style: style_Trees9sample_1,
                popuplayertitle: 'Trees9sample ',
                interactive: true,
    title: 'Trees9sample <br />\
    <img src="styles/legend/Trees9sample_1_0.png" /> 25.6 - 31.3<br />\
    <img src="styles/legend/Trees9sample_1_1.png" /> 20.3 - 25.6<br />\
    <img src="styles/legend/Trees9sample_1_2.png" /> 12.1 - 20.3<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Trees9sample_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Trees9sample_1];
lyr_Trees9sample_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Notes': 'Notes', 'Species': 'Species', 'DBH': 'DBH', 'Class': 'Class', 'HT': 'HT', 'HDR': 'HDR', 'Class_Quality': 'Class_Quality', 'ShortDate': 'ShortDate', 'MyDate': 'MyDate', 'images': 'images', });
lyr_Trees9sample_1.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Notes': 'TextEdit', 'Species': 'TextEdit', 'DBH': 'TextEdit', 'Class': 'TextEdit', 'HT': 'TextEdit', 'HDR': 'TextEdit', 'Class_Quality': 'TextEdit', 'ShortDate': 'TextEdit', 'MyDate': 'TextEdit', 'images': 'TextEdit', });
lyr_Trees9sample_1.set('fieldLabels', {'fid': 'hidden field', 'Date': 'inline label - always visible', 'Notes': 'hidden field', 'Species': 'inline label - always visible', 'DBH': 'inline label - always visible', 'Class': 'hidden field', 'HT': 'hidden field', 'HDR': 'hidden field', 'Class_Quality': 'inline label - always visible', 'ShortDate': 'hidden field', 'MyDate': 'hidden field', 'images': 'no label', });
lyr_Trees9sample_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});