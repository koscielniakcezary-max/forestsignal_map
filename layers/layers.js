var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Westernriver_districts_1 = new ol.format.GeoJSON();
var features_Westernriver_districts_1 = format_Westernriver_districts_1.readFeatures(json_Westernriver_districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Westernriver_districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Westernriver_districts_1.addFeatures(features_Westernriver_districts_1);
var lyr_Westernriver_districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Westernriver_districts_1, 
                style: style_Westernriver_districts_1,
                popuplayertitle: 'Western — river_districts',
                interactive: true,
                title: '<img src="styles/legend/Westernriver_districts_1.png" /> Western — river_districts'
            });
var format_Laickeclipped_mask_2 = new ol.format.GeoJSON();
var features_Laickeclipped_mask_2 = format_Laickeclipped_mask_2.readFeatures(json_Laickeclipped_mask_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laickeclipped_mask_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laickeclipped_mask_2.addFeatures(features_Laickeclipped_mask_2);
var lyr_Laickeclipped_mask_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laickeclipped_mask_2, 
                style: style_Laickeclipped_mask_2,
                popuplayertitle: 'Laicke — clipped_mask',
                interactive: true,
                title: '<img src="styles/legend/Laickeclipped_mask_2.png" /> Laicke — clipped_mask'
            });
var format_Riverclipped_mask_3 = new ol.format.GeoJSON();
var features_Riverclipped_mask_3 = format_Riverclipped_mask_3.readFeatures(json_Riverclipped_mask_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riverclipped_mask_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riverclipped_mask_3.addFeatures(features_Riverclipped_mask_3);
var lyr_Riverclipped_mask_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riverclipped_mask_3, 
                style: style_Riverclipped_mask_3,
                popuplayertitle: 'River — clipped_mask',
                interactive: true,
                title: '<img src="styles/legend/Riverclipped_mask_3.png" /> River — clipped_mask'
            });
var format_clipped_mask_4 = new ol.format.GeoJSON();
var features_clipped_mask_4 = format_clipped_mask_4.readFeatures(json_clipped_mask_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipped_mask_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipped_mask_4.addFeatures(features_clipped_mask_4);
var lyr_clipped_mask_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clipped_mask_4, 
                style: style_clipped_mask_4,
                popuplayertitle: 'clipped_mask',
                interactive: true,
                title: '<img src="styles/legend/clipped_mask_4.png" /> clipped_mask'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Westernriver_districts_1.setVisible(true);lyr_Laickeclipped_mask_2.setVisible(true);lyr_Riverclipped_mask_3.setVisible(true);lyr_clipped_mask_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Westernriver_districts_1,lyr_Laickeclipped_mask_2,lyr_Riverclipped_mask_3,lyr_clipped_mask_4];
lyr_Westernriver_districts_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'EU_CD': 'EU_CD', 'Name': 'Name', 'RBD': 'RBD', 'Area': 'Area', });
lyr_Laickeclipped_mask_2.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'AREA': 'AREA', 'LAYER': 'LAYER', 'Area2': 'Area2', });
lyr_Riverclipped_mask_3.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'localId': 'localId', 'namespace': 'namespace', 'language': 'language', 'nativeness': 'nativeness', 'nameStatus': 'nameStatus', 'sourceOfName': 'sourceOfName', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'designationPeriod': 'designationPeriod', 'CharacterString': 'CharacterString', 'electronicMailAddress': 'electronicMailAddress', 'telephoneVoice': 'telephoneVoice', 'beginLifespanVersion': 'beginLifespanVersion', 'name': 'name', 'shortName': 'shortName', 'Date': 'Date', 'link': 'link', 'officialDocumentNumber': 'officialDocumentNumber', });
lyr_clipped_mask_4.set('fieldAliases', {'fid': 'fid', 'BrownTrout': 'BrownTrout', 'Chub': 'Chub', 'RainbowTro': 'RainbowTro', 'Salmon': 'Salmon', 'SeaTrout': 'SeaTrout', 'Species': 'Species', 'SiteNam': 'SiteNam', 'River': 'River', });
lyr_Westernriver_districts_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'EU_CD': 'TextEdit', 'Name': 'TextEdit', 'RBD': 'TextEdit', 'Area': 'TextEdit', });
lyr_Laickeclipped_mask_2.set('fieldImages', {'fid': 'TextEdit', 'District': 'TextEdit', 'AREA': 'TextEdit', 'LAYER': 'TextEdit', 'Area2': 'TextEdit', });
lyr_Riverclipped_mask_3.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'language': 'TextEdit', 'nativeness': 'TextEdit', 'nameStatus': 'TextEdit', 'sourceOfName': 'TextEdit', 'pronunciation': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'designationPeriod': 'TextEdit', 'CharacterString': 'TextEdit', 'electronicMailAddress': 'TextEdit', 'telephoneVoice': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'name': 'TextEdit', 'shortName': 'TextEdit', 'Date': 'TextEdit', 'link': 'TextEdit', 'officialDocumentNumber': 'TextEdit', });
lyr_clipped_mask_4.set('fieldImages', {'fid': '', 'BrownTrout': '', 'Chub': '', 'RainbowTro': '', 'Salmon': '', 'SeaTrout': '', 'Species': '', 'SiteNam': '', 'River': '', });
lyr_Westernriver_districts_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'EU_CD': 'no label', 'Name': 'no label', 'RBD': 'no label', 'Area': 'no label', });
lyr_Laickeclipped_mask_2.set('fieldLabels', {'fid': 'no label', 'District': 'no label', 'AREA': 'no label', 'LAYER': 'no label', 'Area2': 'no label', });
lyr_Riverclipped_mask_3.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'localId': 'no label', 'namespace': 'no label', 'language': 'no label', 'nativeness': 'no label', 'nameStatus': 'no label', 'sourceOfName': 'no label', 'pronunciation': 'no label', 'text': 'no label', 'script': 'no label', 'designationPeriod': 'no label', 'CharacterString': 'no label', 'electronicMailAddress': 'no label', 'telephoneVoice': 'no label', 'beginLifespanVersion': 'no label', 'name': 'no label', 'shortName': 'no label', 'Date': 'no label', 'link': 'no label', 'officialDocumentNumber': 'no label', });
lyr_clipped_mask_4.set('fieldLabels', {'fid': 'no label', 'BrownTrout': 'no label', 'Chub': 'no label', 'RainbowTro': 'no label', 'Salmon': 'no label', 'SeaTrout': 'no label', 'Species': 'no label', 'SiteNam': 'no label', 'River': 'no label', });
lyr_clipped_mask_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});