var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Western_River_Dist_1 = new ol.format.GeoJSON();
var features_Western_River_Dist_1 = format_Western_River_Dist_1.readFeatures(json_Western_River_Dist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Western_River_Dist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Western_River_Dist_1.addFeatures(features_Western_River_Dist_1);
var lyr_Western_River_Dist_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Western_River_Dist_1, 
                style: style_Western_River_Dist_1,
                popuplayertitle: 'Western_River_Dist',
                interactive: false,
                title: '<img src="styles/legend/Western_River_Dist_1.png" /> Western_River_Dist'
            });
var format_LakePolygons_2 = new ol.format.GeoJSON();
var features_LakePolygons_2 = format_LakePolygons_2.readFeatures(json_LakePolygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakePolygons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LakePolygons_2.addFeatures(features_LakePolygons_2);
var lyr_LakePolygons_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LakePolygons_2, 
                style: style_LakePolygons_2,
                popuplayertitle: 'Lake Polygons ',
                interactive: true,
                title: '<img src="styles/legend/LakePolygons_2.png" /> Lake Polygons '
            });
var format_River_Network_Lines_3 = new ol.format.GeoJSON();
var features_River_Network_Lines_3 = format_River_Network_Lines_3.readFeatures(json_River_Network_Lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_Network_Lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_Network_Lines_3.addFeatures(features_River_Network_Lines_3);
var lyr_River_Network_Lines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_Network_Lines_3, 
                style: style_River_Network_Lines_3,
                popuplayertitle: 'River_Network_Lines',
                interactive: true,
                title: '<img src="styles/legend/River_Network_Lines_3.png" /> River_Network_Lines'
            });
var format_Angling_Sites_PointMask_4 = new ol.format.GeoJSON();
var features_Angling_Sites_PointMask_4 = format_Angling_Sites_PointMask_4.readFeatures(json_Angling_Sites_PointMask_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Angling_Sites_PointMask_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Angling_Sites_PointMask_4.addFeatures(features_Angling_Sites_PointMask_4);
cluster_Angling_Sites_PointMask_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Angling_Sites_PointMask_4
});
var lyr_Angling_Sites_PointMask_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Angling_Sites_PointMask_4, 
                style: style_Angling_Sites_PointMask_4,
                popuplayertitle: 'Angling_Sites_PointMask',
                interactive: true,
                title: '<img src="styles/legend/Angling_Sites_PointMask_4.png" /> Angling_Sites_PointMask'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Western_River_Dist_1.setVisible(true);lyr_LakePolygons_2.setVisible(true);lyr_River_Network_Lines_3.setVisible(true);lyr_Angling_Sites_PointMask_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Western_River_Dist_1,lyr_LakePolygons_2,lyr_River_Network_Lines_3,lyr_Angling_Sites_PointMask_4];
lyr_Western_River_Dist_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'EU_CD': 'EU_CD', 'Name': 'Name', 'RBD': 'RBD', 'Area': 'Area', });
lyr_LakePolygons_2.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'AREA': 'AREA', 'LAYER': 'LAYER', 'Area2': 'Area2', });
lyr_River_Network_Lines_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'electronicMailAddress': 'electronicMailAddress', 'telephoneVoice': 'telephoneVoice', 'link': 'link', });
lyr_Angling_Sites_PointMask_4.set('fieldAliases', {'fid': 'fid', 'BrownTrout': 'BrownTrout', 'Chub': 'Chub', 'RainbowTro': 'RainbowTro', 'Salmon': 'Salmon', 'SeaTrout': 'SeaTrout', 'Species': 'Species', 'SiteNam': 'SiteNam', 'River': 'River', });
lyr_Western_River_Dist_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'EU_CD': 'TextEdit', 'Name': 'TextEdit', 'RBD': 'TextEdit', 'Area': 'TextEdit', });
lyr_LakePolygons_2.set('fieldImages', {'fid': 'TextEdit', 'District': 'TextEdit', 'AREA': 'TextEdit', 'LAYER': 'TextEdit', 'Area2': 'TextEdit', });
lyr_River_Network_Lines_3.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'electronicMailAddress': 'TextEdit', 'telephoneVoice': 'TextEdit', 'link': 'TextEdit', });
lyr_Angling_Sites_PointMask_4.set('fieldImages', {'fid': 'TextEdit', 'BrownTrout': 'TextEdit', 'Chub': 'TextEdit', 'RainbowTro': 'TextEdit', 'Salmon': 'TextEdit', 'SeaTrout': 'TextEdit', 'Species': 'TextEdit', 'SiteNam': 'TextEdit', 'River': 'TextEdit', });
lyr_Western_River_Dist_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'EU_CD': 'inline label - always visible', 'Name': 'inline label - always visible', 'RBD': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_LakePolygons_2.set('fieldLabels', {'fid': 'inline label - always visible', 'District': 'inline label - always visible', 'AREA': 'inline label - always visible', 'LAYER': 'inline label - always visible', 'Area2': 'inline label - always visible', });
lyr_River_Network_Lines_3.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'electronicMailAddress': 'inline label - always visible', 'telephoneVoice': 'inline label - always visible', 'link': 'inline label - always visible', });
lyr_Angling_Sites_PointMask_4.set('fieldLabels', {'fid': 'hidden field', 'BrownTrout': 'inline label - visible with data', 'Chub': 'inline label - visible with data', 'RainbowTro': 'inline label - visible with data', 'Salmon': 'inline label - visible with data', 'SeaTrout': 'inline label - visible with data', 'Species': 'inline label - visible with data', 'SiteNam': 'inline label - visible with data', 'River': 'inline label - visible with data', });
lyr_Angling_Sites_PointMask_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});