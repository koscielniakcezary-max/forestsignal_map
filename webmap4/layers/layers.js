var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GalwayAdministrativeBoundaries_1 = new ol.format.GeoJSON();
var features_GalwayAdministrativeBoundaries_1 = format_GalwayAdministrativeBoundaries_1.readFeatures(json_GalwayAdministrativeBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GalwayAdministrativeBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GalwayAdministrativeBoundaries_1.addFeatures(features_GalwayAdministrativeBoundaries_1);
var lyr_GalwayAdministrativeBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GalwayAdministrativeBoundaries_1, 
                style: style_GalwayAdministrativeBoundaries_1,
                popuplayertitle: 'Galway Administrative Boundaries',
                interactive: false,
                title: '<img src="styles/legend/GalwayAdministrativeBoundaries_1.png" /> Galway Administrative Boundaries'
            });
var format_ConnemaraNationalParkBoundary_2 = new ol.format.GeoJSON();
var features_ConnemaraNationalParkBoundary_2 = format_ConnemaraNationalParkBoundary_2.readFeatures(json_ConnemaraNationalParkBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConnemaraNationalParkBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConnemaraNationalParkBoundary_2.addFeatures(features_ConnemaraNationalParkBoundary_2);
var lyr_ConnemaraNationalParkBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConnemaraNationalParkBoundary_2, 
                style: style_ConnemaraNationalParkBoundary_2,
                popuplayertitle: 'Connemara National Park Boundary ',
                interactive: true,
                title: '<img src="styles/legend/ConnemaraNationalParkBoundary_2.png" /> Connemara National Park Boundary '
            });
var format_SpecialProtectionAreasSPA_3 = new ol.format.GeoJSON();
var features_SpecialProtectionAreasSPA_3 = format_SpecialProtectionAreasSPA_3.readFeatures(json_SpecialProtectionAreasSPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialProtectionAreasSPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialProtectionAreasSPA_3.addFeatures(features_SpecialProtectionAreasSPA_3);
var lyr_SpecialProtectionAreasSPA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialProtectionAreasSPA_3, 
                style: style_SpecialProtectionAreasSPA_3,
                popuplayertitle: 'Special Protection Areas (SPA)',
                interactive: true,
                title: '<img src="styles/legend/SpecialProtectionAreasSPA_3.png" /> Special Protection Areas (SPA)'
            });
var format_NaturalHeritageAreasNHA_4 = new ol.format.GeoJSON();
var features_NaturalHeritageAreasNHA_4 = format_NaturalHeritageAreasNHA_4.readFeatures(json_NaturalHeritageAreasNHA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturalHeritageAreasNHA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalHeritageAreasNHA_4.addFeatures(features_NaturalHeritageAreasNHA_4);
var lyr_NaturalHeritageAreasNHA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalHeritageAreasNHA_4, 
                style: style_NaturalHeritageAreasNHA_4,
                popuplayertitle: 'Natural Heritage Areas (NHA)',
                interactive: true,
                title: '<img src="styles/legend/NaturalHeritageAreasNHA_4.png" /> Natural Heritage Areas (NHA)'
            });
var format_naturaltree_galway_5 = new ol.format.GeoJSON();
var features_naturaltree_galway_5 = format_naturaltree_galway_5.readFeatures(json_naturaltree_galway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naturaltree_galway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naturaltree_galway_5.addFeatures(features_naturaltree_galway_5);
cluster_naturaltree_galway_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_naturaltree_galway_5
});
var lyr_naturaltree_galway_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_naturaltree_galway_5, 
                style: style_naturaltree_galway_5,
                popuplayertitle: 'naturaltree_galway',
                interactive: true,
                title: '<img src="styles/legend/naturaltree_galway_5.png" /> naturaltree_galway'
            });
var format_ForestsinCountyGalway_6 = new ol.format.GeoJSON();
var features_ForestsinCountyGalway_6 = format_ForestsinCountyGalway_6.readFeatures(json_ForestsinCountyGalway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestsinCountyGalway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestsinCountyGalway_6.addFeatures(features_ForestsinCountyGalway_6);
var lyr_ForestsinCountyGalway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestsinCountyGalway_6, 
                style: style_ForestsinCountyGalway_6,
                popuplayertitle: 'Forests in County Galway',
                interactive: true,
    title: 'Forests in County Galway<br />\
    <img src="styles/legend/ForestsinCountyGalway_6_0.png" /> Forest Type: 311 (Coniferous)<br />\
    <img src="styles/legend/ForestsinCountyGalway_6_1.png" /> Forest Type: 312 (Broadleaved)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GalwayAdministrativeBoundaries_1.setVisible(true);lyr_ConnemaraNationalParkBoundary_2.setVisible(true);lyr_SpecialProtectionAreasSPA_3.setVisible(true);lyr_NaturalHeritageAreasNHA_4.setVisible(true);lyr_naturaltree_galway_5.setVisible(true);lyr_ForestsinCountyGalway_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GalwayAdministrativeBoundaries_1,lyr_ConnemaraNationalParkBoundary_2,lyr_SpecialProtectionAreasSPA_3,lyr_NaturalHeritageAreasNHA_4,lyr_naturaltree_galway_5,lyr_ForestsinCountyGalway_6];
lyr_GalwayAdministrativeBoundaries_1.set('fieldAliases', {'fid': 'fid', 'ESRI_OID': 'ESRI_OID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'GUID': 'GUID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'CC_ID': 'CC_ID', });
lyr_ConnemaraNationalParkBoundary_2.set('fieldAliases', {'fid': 'fid', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SpecialProtectionAreasSPA_3.set('fieldAliases', {'fid': 'fid', 'SITE_NAME': 'SITE_NAME', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'URL': 'URL', });
lyr_NaturalHeritageAreasNHA_4.set('fieldAliases', {'fid': 'fid', 'SITE_NAME': 'SITE_NAME', 'HA': 'HA', 'Shape_Area': 'Shape_Area', 'URL': 'URL', });
lyr_naturaltree_galway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'description': 'description', 'denotation': 'denotation', 'cultivar': 'cultivar', 'species:wikidata': 'species:wikidata', 'species:en': 'species:en', 'species': 'species', 'leaf_type': 'leaf_type', 'genus': 'genus', 'leaf_cycle': 'leaf_cycle', });
lyr_ForestsinCountyGalway_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_18': 'CODE_18', 'Class_Desc': 'Class_Desc', 'Area_Ha': 'Area_Ha', });
lyr_GalwayAdministrativeBoundaries_1.set('fieldImages', {'fid': 'TextEdit', 'ESRI_OID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'GUID': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'CC_ID': 'TextEdit', });
lyr_ConnemaraNationalParkBoundary_2.set('fieldImages', {'fid': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SpecialProtectionAreasSPA_3.set('fieldImages', {'fid': 'TextEdit', 'SITE_NAME': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'URL': 'TextEdit', });
lyr_NaturalHeritageAreasNHA_4.set('fieldImages', {'fid': 'TextEdit', 'SITE_NAME': 'TextEdit', 'HA': 'TextEdit', 'Shape_Area': 'TextEdit', 'URL': 'TextEdit', });
lyr_naturaltree_galway_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'description': 'TextEdit', 'denotation': 'TextEdit', 'cultivar': 'TextEdit', 'species:wikidata': 'TextEdit', 'species:en': 'TextEdit', 'species': 'TextEdit', 'leaf_type': 'TextEdit', 'genus': 'TextEdit', 'leaf_cycle': 'TextEdit', });
lyr_ForestsinCountyGalway_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CODE_18': 'TextEdit', 'Class_Desc': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_GalwayAdministrativeBoundaries_1.set('fieldLabels', {'fid': 'no label', 'ESRI_OID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'GUID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'CC_ID': 'no label', });
lyr_ConnemaraNationalParkBoundary_2.set('fieldLabels', {'fid': 'inline label - always visible', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'inline label - always visible', });
lyr_SpecialProtectionAreasSPA_3.set('fieldLabels', {'fid': 'inline label - always visible', 'SITE_NAME': 'no label', 'HA': 'inline label - always visible', 'Source_CRS': 'inline label - always visible', 'URL': 'inline label - always visible', });
lyr_NaturalHeritageAreasNHA_4.set('fieldLabels', {'fid': 'inline label - always visible', 'SITE_NAME': 'inline label - always visible', 'HA': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'URL': 'inline label - always visible', });
lyr_naturaltree_galway_5.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'natural': 'inline label - always visible', 'description': 'inline label - visible with data', 'denotation': 'inline label - visible with data', 'cultivar': 'inline label - visible with data', 'species:wikidata': 'inline label - visible with data', 'species:en': 'inline label - visible with data', 'species': 'inline label - always visible', 'leaf_type': 'inline label - visible with data', 'genus': 'inline label - visible with data', 'leaf_cycle': 'inline label - visible with data', });
lyr_ForestsinCountyGalway_6.set('fieldLabels', {'fid': 'inline label - always visible', 'ID': 'inline label - always visible', 'CODE_18': 'inline label - always visible', 'Class_Desc': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', });
lyr_ForestsinCountyGalway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});