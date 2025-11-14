ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-10.695792, 52.424720, -5.755614, 54.330077]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CountyGalwayBoundary_1 = new ol.format.GeoJSON();
var features_CountyGalwayBoundary_1 = format_CountyGalwayBoundary_1.readFeatures(json_CountyGalwayBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CountyGalwayBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyGalwayBoundary_1.addFeatures(features_CountyGalwayBoundary_1);
var lyr_CountyGalwayBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyGalwayBoundary_1, 
                style: style_CountyGalwayBoundary_1,
                popuplayertitle: 'County Galway Boundary',
                interactive: false,
                title: '<img src="styles/legend/CountyGalwayBoundary_1.png" /> County Galway Boundary'
            });
var format_Privateafforestation_2 = new ol.format.GeoJSON();
var features_Privateafforestation_2 = format_Privateafforestation_2.readFeatures(json_Privateafforestation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Privateafforestation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privateafforestation_2.addFeatures(features_Privateafforestation_2);
var lyr_Privateafforestation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Privateafforestation_2, 
                style: style_Privateafforestation_2,
                popuplayertitle: 'Private afforestation',
                interactive: true,
                title: '<img src="styles/legend/Privateafforestation_2.png" /> Private afforestation'
            });
var format_WindDamageArea_3 = new ol.format.GeoJSON();
var features_WindDamageArea_3 = format_WindDamageArea_3.readFeatures(json_WindDamageArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WindDamageArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindDamageArea_3.addFeatures(features_WindDamageArea_3);
var lyr_WindDamageArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindDamageArea_3, 
                style: style_WindDamageArea_3,
                popuplayertitle: 'Wind Damage Area',
                interactive: true,
                title: '<img src="styles/legend/WindDamageArea_3.png" /> Wind Damage Area'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CountyGalwayBoundary_1.setVisible(true);lyr_Privateafforestation_2.setVisible(true);lyr_WindDamageArea_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CountyGalwayBoundary_1,lyr_Privateafforestation_2,lyr_WindDamageArea_3];
lyr_CountyGalwayBoundary_1.set('fieldAliases', {'ESRI_OID': 'ESRI_OID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'GUID': 'GUID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'CC_ID': 'CC_ID', });
lyr_Privateafforestation_2.set('fieldAliases', {'fid': 'fid', 'Sp_1': 'Sp_1', 'LUC': 'LUC', 'Owner': 'Owner', 'Area_ha': 'Area_ha', });
lyr_WindDamageArea_3.set('fieldAliases', {'fid': 'fid', 'Sp_1': 'Sp_1', 'Area_ha': 'Area_ha', 'wb_area_co': 'wb_area_co', 'wb_area_un': 'wb_area_un', 'wb_area_mi': 'wb_area_mi', 'wb_area_ma': 'wb_area_ma', 'wb_area_ra': 'wb_area_ra', 'wb_area_su': 'wb_area_su', 'wb_area_me': 'wb_area_me', 'wb_area__1': 'wb_area__1', 'wb_area_st': 'wb_area_st', 'wb_area__2': 'wb_area__2', 'wb_area__3': 'wb_area__3', 'wb_area_q1': 'wb_area_q1', 'wb_area_q3': 'wb_area_q3', 'wb_area_iq': 'wb_area_iq', 'damage': 'damage', });
lyr_CountyGalwayBoundary_1.set('fieldImages', {'ESRI_OID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'GUID': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'CC_ID': 'TextEdit', });
lyr_Privateafforestation_2.set('fieldImages', {'fid': 'TextEdit', 'Sp_1': 'TextEdit', 'LUC': 'TextEdit', 'Owner': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_WindDamageArea_3.set('fieldImages', {'fid': 'TextEdit', 'Sp_1': 'TextEdit', 'Area_ha': 'TextEdit', 'wb_area_co': 'TextEdit', 'wb_area_un': 'TextEdit', 'wb_area_mi': 'TextEdit', 'wb_area_ma': 'TextEdit', 'wb_area_ra': 'TextEdit', 'wb_area_su': 'TextEdit', 'wb_area_me': 'TextEdit', 'wb_area__1': 'TextEdit', 'wb_area_st': 'TextEdit', 'wb_area__2': 'TextEdit', 'wb_area__3': 'TextEdit', 'wb_area_q1': 'TextEdit', 'wb_area_q3': 'TextEdit', 'wb_area_iq': 'TextEdit', 'damage': 'TextEdit', });
lyr_CountyGalwayBoundary_1.set('fieldLabels', {'ESRI_OID': 'hidden field', 'ENGLISH': 'hidden field', 'GAEILGE': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'GUID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'CC_ID': 'no label', });
lyr_Privateafforestation_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Sp_1': 'inline label - always visible', 'LUC': 'inline label - always visible', 'Owner': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_WindDamageArea_3.set('fieldLabels', {'fid': 'hidden field', 'Sp_1': 'inline label - always visible', 'Area_ha': 'inline label - visible with data', 'wb_area_co': 'inline label - visible with data', 'wb_area_un': 'hidden field', 'wb_area_mi': 'hidden field', 'wb_area_ma': 'hidden field', 'wb_area_ra': 'inline label - visible with data', 'wb_area_su': 'inline label - visible with data', 'wb_area_me': 'hidden field', 'wb_area__1': 'inline label - visible with data', 'wb_area_st': 'header label - always visible', 'wb_area__2': 'inline label - visible with data', 'wb_area__3': 'inline label - visible with data', 'wb_area_q1': 'hidden field', 'wb_area_q3': 'hidden field', 'wb_area_iq': 'hidden field', 'damage': 'inline label - always visible', });
lyr_WindDamageArea_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});