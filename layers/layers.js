var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ReserveBoundary_1 = new ol.format.GeoJSON();
var features_ReserveBoundary_1 = format_ReserveBoundary_1.readFeatures(json_ReserveBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveBoundary_1.addFeatures(features_ReserveBoundary_1);
var lyr_ReserveBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveBoundary_1, 
                style: style_ReserveBoundary_1,
                popuplayertitle: "Reserve Boundary",
                interactive: true,
                title: '<img src="styles/legend/ReserveBoundary_1.png" /> Reserve Boundary'
            });
var format_Wetlands_2 = new ol.format.GeoJSON();
var features_Wetlands_2 = format_Wetlands_2.readFeatures(json_Wetlands_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetlands_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetlands_2.addFeatures(features_Wetlands_2);
var lyr_Wetlands_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetlands_2, 
                style: style_Wetlands_2,
                popuplayertitle: "Wetlands",
                interactive: true,
                title: '<img src="styles/legend/Wetlands_2.png" /> Wetlands'
            });
var format_QuarterSection_3 = new ol.format.GeoJSON();
var features_QuarterSection_3 = format_QuarterSection_3.readFeatures(json_QuarterSection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuarterSection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuarterSection_3.addFeatures(features_QuarterSection_3);
var lyr_QuarterSection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuarterSection_3, 
                style: style_QuarterSection_3,
                popuplayertitle: "Quarter Section",
                interactive: true,
                title: '<img src="styles/legend/QuarterSection_3.png" /> Quarter Section'
            });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_4.png" /> Buildings'
            });
var format_Roadways_5 = new ol.format.GeoJSON();
var features_Roadways_5 = format_Roadways_5.readFeatures(json_Roadways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadways_5.addFeatures(features_Roadways_5);
var lyr_Roadways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadways_5, 
                style: style_Roadways_5,
                popuplayertitle: "Roadways",
                interactive: true,
                title: '<img src="styles/legend/Roadways_5.png" /> Roadways'
            });
var format_Pipelines_6 = new ol.format.GeoJSON();
var features_Pipelines_6 = format_Pipelines_6.readFeatures(json_Pipelines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pipelines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pipelines_6.addFeatures(features_Pipelines_6);
var lyr_Pipelines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pipelines_6, 
                style: style_Pipelines_6,
                popuplayertitle: "Pipelines",
                interactive: true,
                title: '<img src="styles/legend/Pipelines_6.png" /> Pipelines'
            });
var format_Driveways_7 = new ol.format.GeoJSON();
var features_Driveways_7 = format_Driveways_7.readFeatures(json_Driveways_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveways_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveways_7.addFeatures(features_Driveways_7);
var lyr_Driveways_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Driveways_7, 
                style: style_Driveways_7,
                popuplayertitle: "Driveways",
                interactive: true,
                title: '<img src="styles/legend/Driveways_7.png" /> Driveways'
            });
var format_WaterValve_8 = new ol.format.GeoJSON();
var features_WaterValve_8 = format_WaterValve_8.readFeatures(json_WaterValve_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterValve_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterValve_8.addFeatures(features_WaterValve_8);cluster_WaterValve_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WaterValve_8
});
var lyr_WaterValve_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WaterValve_8, 
                style: style_WaterValve_8,
                popuplayertitle: "Water Valve",
                interactive: true,
                title: '<img src="styles/legend/WaterValve_8.png" /> Water Valve'
            });
var format_Culvert_9 = new ol.format.GeoJSON();
var features_Culvert_9 = format_Culvert_9.readFeatures(json_Culvert_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culvert_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culvert_9.addFeatures(features_Culvert_9);cluster_Culvert_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Culvert_9
});
var lyr_Culvert_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Culvert_9, 
                style: style_Culvert_9,
                popuplayertitle: "Culvert",
                interactive: true,
                title: '<img src="styles/legend/Culvert_9.png" /> Culvert'
            });
var format_Cistern_10 = new ol.format.GeoJSON();
var features_Cistern_10 = format_Cistern_10.readFeatures(json_Cistern_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cistern_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cistern_10.addFeatures(features_Cistern_10);cluster_Cistern_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Cistern_10
});
var lyr_Cistern_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cistern_10, 
                style: style_Cistern_10,
                popuplayertitle: "Cistern",
                interactive: true,
                title: '<img src="styles/legend/Cistern_10.png" /> Cistern'
            });
var format_FireHydrant_11 = new ol.format.GeoJSON();
var features_FireHydrant_11 = format_FireHydrant_11.readFeatures(json_FireHydrant_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHydrant_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHydrant_11.addFeatures(features_FireHydrant_11);cluster_FireHydrant_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FireHydrant_11
});
var lyr_FireHydrant_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FireHydrant_11, 
                style: style_FireHydrant_11,
                popuplayertitle: "Fire Hydrant",
                interactive: true,
                title: '<img src="styles/legend/FireHydrant_11.png" /> Fire Hydrant'
            });
var format_GarbageBin_12 = new ol.format.GeoJSON();
var features_GarbageBin_12 = format_GarbageBin_12.readFeatures(json_GarbageBin_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarbageBin_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarbageBin_12.addFeatures(features_GarbageBin_12);cluster_GarbageBin_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GarbageBin_12
});
var lyr_GarbageBin_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GarbageBin_12, 
                style: style_GarbageBin_12,
                popuplayertitle: "Garbage Bin",
                interactive: true,
                title: '<img src="styles/legend/GarbageBin_12.png" /> Garbage Bin'
            });
var format_GasMeter_13 = new ol.format.GeoJSON();
var features_GasMeter_13 = format_GasMeter_13.readFeatures(json_GasMeter_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasMeter_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasMeter_13.addFeatures(features_GasMeter_13);cluster_GasMeter_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GasMeter_13
});
var lyr_GasMeter_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GasMeter_13, 
                style: style_GasMeter_13,
                popuplayertitle: "Gas Meter",
                interactive: true,
                title: '<img src="styles/legend/GasMeter_13.png" /> Gas Meter'
            });
var format_PowerlinePole_14 = new ol.format.GeoJSON();
var features_PowerlinePole_14 = format_PowerlinePole_14.readFeatures(json_PowerlinePole_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerlinePole_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerlinePole_14.addFeatures(features_PowerlinePole_14);cluster_PowerlinePole_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PowerlinePole_14
});
var lyr_PowerlinePole_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PowerlinePole_14, 
                style: style_PowerlinePole_14,
                popuplayertitle: "Powerline Pole",
                interactive: true,
                title: '<img src="styles/legend/PowerlinePole_14.png" /> Powerline Pole'
            });
var format_SepticTank_15 = new ol.format.GeoJSON();
var features_SepticTank_15 = format_SepticTank_15.readFeatures(json_SepticTank_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SepticTank_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SepticTank_15.addFeatures(features_SepticTank_15);cluster_SepticTank_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SepticTank_15
});
var lyr_SepticTank_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SepticTank_15, 
                style: style_SepticTank_15,
                popuplayertitle: "Septic Tank",
                interactive: true,
                title: '<img src="styles/legend/SepticTank_15.png" /> Septic Tank'
            });
var format_SewerManhole_16 = new ol.format.GeoJSON();
var features_SewerManhole_16 = format_SewerManhole_16.readFeatures(json_SewerManhole_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerManhole_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerManhole_16.addFeatures(features_SewerManhole_16);cluster_SewerManhole_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SewerManhole_16
});
var lyr_SewerManhole_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SewerManhole_16, 
                style: style_SewerManhole_16,
                popuplayertitle: "Sewer Manhole",
                interactive: true,
                title: '<img src="styles/legend/SewerManhole_16.png" /> Sewer Manhole'
            });
var format_StorageFacility_17 = new ol.format.GeoJSON();
var features_StorageFacility_17 = format_StorageFacility_17.readFeatures(json_StorageFacility_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StorageFacility_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StorageFacility_17.addFeatures(features_StorageFacility_17);
var lyr_StorageFacility_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StorageFacility_17, 
                style: style_StorageFacility_17,
                popuplayertitle: "Storage Facility",
                interactive: true,
                title: '<img src="styles/legend/StorageFacility_17.png" /> Storage Facility'
            });
var format_Streetlight_18 = new ol.format.GeoJSON();
var features_Streetlight_18 = format_Streetlight_18.readFeatures(json_Streetlight_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streetlight_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streetlight_18.addFeatures(features_Streetlight_18);
var lyr_Streetlight_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streetlight_18, 
                style: style_Streetlight_18,
                popuplayertitle: "Streetlight",
                interactive: true,
                title: '<img src="styles/legend/Streetlight_18.png" /> Streetlight'
            });
var format_TrafficSignage_19 = new ol.format.GeoJSON();
var features_TrafficSignage_19 = format_TrafficSignage_19.readFeatures(json_TrafficSignage_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficSignage_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficSignage_19.addFeatures(features_TrafficSignage_19);cluster_TrafficSignage_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TrafficSignage_19
});
var lyr_TrafficSignage_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TrafficSignage_19, 
                style: style_TrafficSignage_19,
                popuplayertitle: "Traffic Signage",
                interactive: true,
                title: '<img src="styles/legend/TrafficSignage_19.png" /> Traffic Signage'
            });
var format_AbandonedWells_20 = new ol.format.GeoJSON();
var features_AbandonedWells_20 = format_AbandonedWells_20.readFeatures(json_AbandonedWells_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbandonedWells_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbandonedWells_20.addFeatures(features_AbandonedWells_20);cluster_AbandonedWells_20 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AbandonedWells_20
});
var lyr_AbandonedWells_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AbandonedWells_20, 
                style: style_AbandonedWells_20,
                popuplayertitle: "Abandoned Wells",
                interactive: true,
                title: '<img src="styles/legend/AbandonedWells_20.png" /> Abandoned Wells'
            });
var format_Bridges_21 = new ol.format.GeoJSON();
var features_Bridges_21 = format_Bridges_21.readFeatures(json_Bridges_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bridges_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridges_21.addFeatures(features_Bridges_21);
var lyr_Bridges_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridges_21, 
                style: style_Bridges_21,
                popuplayertitle: "Bridges",
                interactive: true,
                title: '<img src="styles/legend/Bridges_21.png" /> Bridges'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ReserveBoundary_1.setVisible(true);lyr_Wetlands_2.setVisible(true);lyr_QuarterSection_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Roadways_5.setVisible(true);lyr_Pipelines_6.setVisible(true);lyr_Driveways_7.setVisible(true);lyr_WaterValve_8.setVisible(true);lyr_Culvert_9.setVisible(true);lyr_Cistern_10.setVisible(true);lyr_FireHydrant_11.setVisible(true);lyr_GarbageBin_12.setVisible(true);lyr_GasMeter_13.setVisible(true);lyr_PowerlinePole_14.setVisible(true);lyr_SepticTank_15.setVisible(true);lyr_SewerManhole_16.setVisible(true);lyr_StorageFacility_17.setVisible(true);lyr_Streetlight_18.setVisible(true);lyr_TrafficSignage_19.setVisible(true);lyr_AbandonedWells_20.setVisible(true);lyr_Bridges_21.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ReserveBoundary_1,lyr_Wetlands_2,lyr_QuarterSection_3,lyr_Buildings_4,lyr_Roadways_5,lyr_Pipelines_6,lyr_Driveways_7,lyr_WaterValve_8,lyr_Culvert_9,lyr_Cistern_10,lyr_FireHydrant_11,lyr_GarbageBin_12,lyr_GasMeter_13,lyr_PowerlinePole_14,lyr_SepticTank_15,lyr_SewerManhole_16,lyr_StorageFacility_17,lyr_Streetlight_18,lyr_TrafficSignage_19,lyr_AbandonedWells_20,lyr_Bridges_21];
lyr_ReserveBoundary_1.set('fieldAliases', {'INDIAN_ID': 'INDIAN_ID', 'PID': 'PID', 'GEONAME': 'GEONAME', 'GEOCODE': 'GEOCODE', });
lyr_Wetlands_2.set('fieldAliases', {'WetlandCla': 'WetlandCla', 'hydroPerio': 'hydroPerio', 'Project': 'Project', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_QuarterSection_3.set('fieldAliases', {'FILE_NAME': 'FILE_NAME', 'TRM': 'TRM', 'M': 'M', 'RGE': 'RGE', 'TWP': 'TWP', 'SEC': 'SEC', 'QS': 'QS', 'RA': 'RA', 'PID': 'PID', 'DESCRIPTOR': 'DESCRIPTOR', });
lyr_Buildings_4.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Roofing ma': 'Roofing ma', 'Condition': 'Condition', 'Conditon': 'Conditon', 'Exterior F': 'Exterior F', 'Home owner': 'Home owner', 'Foundation': 'Foundation', 'Constructi': 'Constructi', 'Number of': 'Number of', 'Number o_1': 'Number o_1', 'Municipal': 'Municipal', 'Comments': 'Comments', 'Number o_2': 'Number o_2', 'Height': 'Height', 'Name': 'Name', });
lyr_Roadways_5.set('fieldAliases', {'Id': 'Id', 'Type': 'Type', 'Shape_Leng': 'Shape_Leng', 'PAVSURF': 'PAVSURF', 'UNPAVSURF': 'UNPAVSURF', 'name': 'name', 'Collection': 'Collection', 'Points': 'Points', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Roadway Ty': 'Roadway Ty', 'Width': 'Width', 'Constructi': 'Constructi', 'Length': 'Length', 'Comments': 'Comments', });
lyr_Pipelines_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LICENCE_NO': 'LICENCE_NO', 'IS_NEB': 'IS_NEB', 'LINE_NO': 'LINE_NO', 'LIC_LI_NO': 'LIC_LI_NO', 'PLLICSEGID': 'PLLICSEGID', 'COMP_NAME': 'COMP_NAME', 'BA_CODE': 'BA_CODE', 'PL_SPEC_ID': 'PL_SPEC_ID', 'SEG_LENGTH': 'SEG_LENGTH', 'SEG_STATUS': 'SEG_STATUS', 'FROM_FAC': 'FROM_FAC', 'FROM_LOC': 'FROM_LOC', 'TO_FAC': 'TO_FAC', 'TO_LOC': 'TO_LOC', 'H2S_R_VOLM': 'H2S_R_VOLM', 'H2S_R_LEVL': 'H2S_R_LEVL', 'H2S_CONT': 'H2S_CONT', 'PIPTECHSTD': 'PIPTECHSTD', 'OUT_DIAMET': 'OUT_DIAMET', 'WALL_THICK': 'WALL_THICK', 'PIPE_TYPE': 'PIPE_TYPE', 'PIPE_GRADE': 'PIPE_GRADE', 'PIP_MATERL': 'PIP_MATERL', 'PIPE_MAOP': 'PIPE_MAOP', 'BIDIRE_IND': 'BIDIRE_IND', 'HDD_IND': 'HDD_IND', 'LINER_GRD': 'LINER_GRD', 'LINER_TYPE': 'LINER_TYPE', 'EXT_COAT': 'EXT_COAT', 'PIPE_ENVIR': 'PIPE_ENVIR', 'CLASS_LOC': 'CLASS_LOC', 'STRESSLEVL': 'STRESSLEVL', 'JOINTMETHD': 'JOINTMETHD', 'INT_COAT': 'INT_COAT', 'FLD_CTR_NM': 'FLD_CTR_NM', 'SUBSTANCE1': 'SUBSTANCE1', 'SUBSTANCE2': 'SUBSTANCE2', 'SUBSTANCE3': 'SUBSTANCE3', 'ORIG_LICNO': 'ORIG_LICNO', 'ORIGPSPPID': 'ORIGPSPPID', 'ORIGLIN_NO': 'ORIGLIN_NO', 'LICAPPDATE': 'LICAPPDATE', 'ORG_ISSUED': 'ORG_ISSUED', 'PERMT_APPR': 'PERMT_APPR', 'PERMT_EXPI': 'PERMT_EXPI', 'LAST_OCCYR': 'LAST_OCCYR', 'TEMPSURFPL': 'TEMPSURFPL', 'GEOM_SRCE': 'GEOM_SRCE', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Driveways_7.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Constructi': 'Constructi', 'Access Con': 'Access Con', 'Width': 'Width', 'Usage': 'Usage', 'Length': 'Length', 'Comments': 'Comments', 'id': 'id', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_WaterValve_8.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Type_1': 'Type_1', 'Conditon R': 'Conditon R', 'Condition': 'Condition', 'Usage': 'Usage', 'Diameter': 'Diameter', 'Constructi': 'Constructi', 'Capacity': 'Capacity', 'Comments': 'Comments', });
lyr_Culvert_9.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Length': 'Length', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Diameter': 'Diameter', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Comments': 'Comments', });
lyr_Cistern_10.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Usage': 'Usage', 'Capacity': 'Capacity', 'Constructi': 'Constructi', 'Comments': 'Comments', });
lyr_FireHydrant_11.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Hydrant Ty': 'Hydrant Ty', 'Constructi': 'Constructi', 'Height (ft': 'Height (ft', 'Color Codi': 'Color Codi', });
lyr_GarbageBin_12.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Unit': 'Unit', 'Constructi': 'Constructi', });
lyr_GasMeter_13.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Mounting T': 'Mounting T', 'Dialog or': 'Dialog or', 'Body Mater': 'Body Mater', 'Type_1': 'Type_1', 'Depth': 'Depth', 'Height': 'Height', 'Comments': 'Comments', });
lyr_PowerlinePole_14.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'field_11': 'field_11', 'Phases': 'Phases', 'Height': 'Height', 'Is a trans': 'Is a trans', 'Number of': 'Number of', 'Pole numbe': 'Pole numbe', 'Constructi': 'Constructi', 'Energy Pro': 'Energy Pro', 'Comments': 'Comments', });
lyr_SepticTank_15.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Capacitiy': 'Capacitiy', 'Usage': 'Usage', 'Constructi': 'Constructi', 'Covering': 'Covering', 'Comments': 'Comments', });
lyr_SewerManhole_16.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Usage': 'Usage', 'Depth': 'Depth', 'Cover Mate': 'Cover Mate', 'Manhole Ty': 'Manhole Ty', 'Lid Types': 'Lid Types', 'Diameter': 'Diameter', 'Length': 'Length', });
lyr_StorageFacility_17.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Height': 'Height', 'Comments': 'Comments', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Constructi': 'Constructi', 'Dimension': 'Dimension', 'Exterior M': 'Exterior M', });
lyr_Streetlight_18.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Wiring & e': 'Wiring & e', 'Light Fixt': 'Light Fixt', 'Control Sy': 'Control Sy', 'Material': 'Material', 'Base Ancho': 'Base Ancho', 'Source': 'Source', });
lyr_TrafficSignage_19.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Height': 'Height', 'Size': 'Size', 'Materials': 'Materials', 'Comments': 'Comments', });
lyr_AbandonedWells_20.set('fieldAliases', {'Licence': 'Licence', 'Licensee': 'Licensee', 'Status': 'Status', 'Lat': 'Lat', 'Long': 'Long', 'Fluid': 'Fluid', 'SurfLoc': 'SurfLoc', 'LicenseeID': 'LicenseeID', 'Address1': 'Address1', 'Address2': 'Address2', 'City': 'City', 'Province': 'Province', 'PostalCode': 'PostalCode', 'Phone': 'Phone', });
lyr_Bridges_21.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'LONGITUDE': 'LONGITUDE', 'ATTR_2': 'ATTR_2', 'ATTR_3': 'ATTR_3', 'ATTR_4': 'ATTR_4', 'ATTR_5': 'ATTR_5', 'ATTR_6': 'ATTR_6', 'ATTR_7': 'ATTR_7', 'ATTR_8': 'ATTR_8', 'ATTR_1': 'ATTR_1', });
lyr_ReserveBoundary_1.set('fieldImages', {'INDIAN_ID': 'TextEdit', 'PID': 'TextEdit', 'GEONAME': 'TextEdit', 'GEOCODE': 'TextEdit', });
lyr_Wetlands_2.set('fieldImages', {'WetlandCla': 'TextEdit', 'hydroPerio': 'TextEdit', 'Project': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_QuarterSection_3.set('fieldImages', {'FILE_NAME': 'TextEdit', 'TRM': 'TextEdit', 'M': 'Range', 'RGE': 'Range', 'TWP': 'Range', 'SEC': 'Range', 'QS': 'TextEdit', 'RA': 'TextEdit', 'PID': 'TextEdit', 'DESCRIPTOR': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Roofing ma': 'TextEdit', 'Condition': 'TextEdit', 'Conditon': 'TextEdit', 'Exterior F': 'TextEdit', 'Home owner': 'TextEdit', 'Foundation': 'TextEdit', 'Constructi': 'TextEdit', 'Number of': 'TextEdit', 'Number o_1': 'TextEdit', 'Municipal': 'TextEdit', 'Comments': 'TextEdit', 'Number o_2': 'TextEdit', 'Height': 'TextEdit', 'Name': 'TextEdit', });
lyr_Roadways_5.set('fieldImages', {'Id': 'TextEdit', 'Type': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PAVSURF': 'TextEdit', 'UNPAVSURF': 'TextEdit', 'name': 'TextEdit', 'Collection': 'TextEdit', 'Points': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Roadway Ty': 'TextEdit', 'Width': 'TextEdit', 'Constructi': 'TextEdit', 'Length': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Pipelines_6.set('fieldImages', {'OBJECTID': '', 'LICENCE_NO': '', 'IS_NEB': '', 'LINE_NO': '', 'LIC_LI_NO': '', 'PLLICSEGID': '', 'COMP_NAME': '', 'BA_CODE': '', 'PL_SPEC_ID': '', 'SEG_LENGTH': '', 'SEG_STATUS': '', 'FROM_FAC': '', 'FROM_LOC': '', 'TO_FAC': '', 'TO_LOC': '', 'H2S_R_VOLM': '', 'H2S_R_LEVL': '', 'H2S_CONT': '', 'PIPTECHSTD': '', 'OUT_DIAMET': '', 'WALL_THICK': '', 'PIPE_TYPE': '', 'PIPE_GRADE': '', 'PIP_MATERL': '', 'PIPE_MAOP': '', 'BIDIRE_IND': '', 'HDD_IND': '', 'LINER_GRD': '', 'LINER_TYPE': '', 'EXT_COAT': '', 'PIPE_ENVIR': '', 'CLASS_LOC': '', 'STRESSLEVL': '', 'JOINTMETHD': '', 'INT_COAT': '', 'FLD_CTR_NM': '', 'SUBSTANCE1': '', 'SUBSTANCE2': '', 'SUBSTANCE3': '', 'ORIG_LICNO': '', 'ORIGPSPPID': '', 'ORIGLIN_NO': '', 'LICAPPDATE': '', 'ORG_ISSUED': '', 'PERMT_APPR': '', 'PERMT_EXPI': '', 'LAST_OCCYR': '', 'TEMPSURFPL': '', 'GEOM_SRCE': '', 'SHAPE_LEN': '', });
lyr_Driveways_7.set('fieldImages', {'Collection': '', 'Points': '', 'Type': '', 'Point Type': '', 'Project Fe': '', 'Created On': '', 'Lat': '', 'Lng': '', 'Image': '', 'Condition': '', 'Conditio_1': '', 'Constructi': '', 'Access Con': '', 'Width': '', 'Usage': '', 'Length': '', 'Comments': '', 'id': '', 'Name': '', 'layer': '', 'path': '', });
lyr_WaterValve_8.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Type_1': 'TextEdit', 'Conditon R': 'TextEdit', 'Condition': 'TextEdit', 'Usage': 'TextEdit', 'Diameter': 'TextEdit', 'Constructi': 'TextEdit', 'Capacity': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Culvert_9.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Length': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Diameter': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Cistern_10.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Usage': 'TextEdit', 'Capacity': 'TextEdit', 'Constructi': 'TextEdit', 'Comments': 'TextEdit', });
lyr_FireHydrant_11.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Hydrant Ty': 'TextEdit', 'Constructi': 'TextEdit', 'Height (ft': 'TextEdit', 'Color Codi': 'TextEdit', });
lyr_GarbageBin_12.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Unit': 'TextEdit', 'Constructi': 'TextEdit', });
lyr_GasMeter_13.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Mounting T': 'TextEdit', 'Dialog or': 'TextEdit', 'Body Mater': 'TextEdit', 'Type_1': 'TextEdit', 'Depth': 'TextEdit', 'Height': 'TextEdit', 'Comments': 'TextEdit', });
lyr_PowerlinePole_14.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'field_11': 'TextEdit', 'Phases': 'TextEdit', 'Height': 'TextEdit', 'Is a trans': 'TextEdit', 'Number of': 'TextEdit', 'Pole numbe': 'TextEdit', 'Constructi': 'TextEdit', 'Energy Pro': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SepticTank_15.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Capacitiy': 'TextEdit', 'Usage': 'TextEdit', 'Constructi': 'TextEdit', 'Covering': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SewerManhole_16.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Usage': 'TextEdit', 'Depth': 'TextEdit', 'Cover Mate': 'TextEdit', 'Manhole Ty': 'TextEdit', 'Lid Types': 'TextEdit', 'Diameter': 'TextEdit', 'Length': 'TextEdit', });
lyr_StorageFacility_17.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Height': 'TextEdit', 'Comments': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Constructi': 'TextEdit', 'Dimension': 'TextEdit', 'Exterior M': 'TextEdit', });
lyr_Streetlight_18.set('fieldImages', {'Collection': '', 'Points': '', 'Type': '', 'Point Type': '', 'Project Fe': '', 'Created On': '', 'Lat': '', 'Lng': '', 'Image': '', 'Condition': '', 'Conditio_1': '', 'Wiring & e': '', 'Light Fixt': '', 'Control Sy': '', 'Material': '', 'Base Ancho': '', 'Source': '', });
lyr_TrafficSignage_19.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Height': 'TextEdit', 'Size': 'TextEdit', 'Materials': 'TextEdit', 'Comments': 'TextEdit', });
lyr_AbandonedWells_20.set('fieldImages', {'Licence': 'TextEdit', 'Licensee': 'TextEdit', 'Status': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Fluid': 'TextEdit', 'SurfLoc': 'TextEdit', 'LicenseeID': 'TextEdit', 'Address1': 'TextEdit', 'Address2': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'PostalCode': 'TextEdit', 'Phone': 'TextEdit', });
lyr_Bridges_21.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ATTR_2': 'TextEdit', 'ATTR_3': 'TextEdit', 'ATTR_4': 'TextEdit', 'ATTR_5': 'Range', 'ATTR_6': 'TextEdit', 'ATTR_7': 'TextEdit', 'ATTR_8': 'TextEdit', 'ATTR_1': 'Range', });
lyr_ReserveBoundary_1.set('fieldLabels', {'INDIAN_ID': 'inline label - visible with data', 'PID': 'inline label - visible with data', 'GEONAME': 'inline label - visible with data', 'GEOCODE': 'inline label - visible with data', });
lyr_Wetlands_2.set('fieldLabels', {'WetlandCla': 'inline label - visible with data', 'hydroPerio': 'inline label - visible with data', 'Project': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_QuarterSection_3.set('fieldLabels', {'FILE_NAME': 'inline label - visible with data', 'TRM': 'inline label - visible with data', 'M': 'inline label - visible with data', 'RGE': 'inline label - visible with data', 'TWP': 'inline label - visible with data', 'SEC': 'inline label - visible with data', 'QS': 'inline label - visible with data', 'RA': 'inline label - visible with data', 'PID': 'inline label - visible with data', 'DESCRIPTOR': 'inline label - visible with data', });
lyr_Buildings_4.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Roofing ma': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditon': 'inline label - visible with data', 'Exterior F': 'inline label - visible with data', 'Home owner': 'inline label - visible with data', 'Foundation': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Number of': 'inline label - visible with data', 'Number o_1': 'inline label - visible with data', 'Municipal': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'Number o_2': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_Roadways_5.set('fieldLabels', {'Id': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'PAVSURF': 'inline label - visible with data', 'UNPAVSURF': 'inline label - visible with data', 'name': 'inline label - visible with data', 'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Roadway Ty': 'inline label - visible with data', 'Width': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Pipelines_6.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'LICENCE_NO': 'inline label - visible with data', 'IS_NEB': 'inline label - visible with data', 'LINE_NO': 'inline label - visible with data', 'LIC_LI_NO': 'inline label - visible with data', 'PLLICSEGID': 'inline label - visible with data', 'COMP_NAME': 'inline label - visible with data', 'BA_CODE': 'inline label - visible with data', 'PL_SPEC_ID': 'inline label - visible with data', 'SEG_LENGTH': 'inline label - visible with data', 'SEG_STATUS': 'inline label - visible with data', 'FROM_FAC': 'inline label - visible with data', 'FROM_LOC': 'inline label - visible with data', 'TO_FAC': 'inline label - visible with data', 'TO_LOC': 'inline label - visible with data', 'H2S_R_VOLM': 'inline label - visible with data', 'H2S_R_LEVL': 'inline label - visible with data', 'H2S_CONT': 'inline label - visible with data', 'PIPTECHSTD': 'inline label - visible with data', 'OUT_DIAMET': 'inline label - visible with data', 'WALL_THICK': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'PIPE_GRADE': 'inline label - visible with data', 'PIP_MATERL': 'inline label - visible with data', 'PIPE_MAOP': 'inline label - visible with data', 'BIDIRE_IND': 'inline label - visible with data', 'HDD_IND': 'inline label - visible with data', 'LINER_GRD': 'inline label - visible with data', 'LINER_TYPE': 'inline label - visible with data', 'EXT_COAT': 'inline label - visible with data', 'PIPE_ENVIR': 'inline label - visible with data', 'CLASS_LOC': 'inline label - visible with data', 'STRESSLEVL': 'inline label - visible with data', 'JOINTMETHD': 'inline label - visible with data', 'INT_COAT': 'inline label - visible with data', 'FLD_CTR_NM': 'inline label - visible with data', 'SUBSTANCE1': 'inline label - visible with data', 'SUBSTANCE2': 'inline label - visible with data', 'SUBSTANCE3': 'inline label - visible with data', 'ORIG_LICNO': 'inline label - visible with data', 'ORIGPSPPID': 'inline label - visible with data', 'ORIGLIN_NO': 'inline label - visible with data', 'LICAPPDATE': 'inline label - visible with data', 'ORG_ISSUED': 'inline label - visible with data', 'PERMT_APPR': 'inline label - visible with data', 'PERMT_EXPI': 'inline label - visible with data', 'LAST_OCCYR': 'inline label - visible with data', 'TEMPSURFPL': 'inline label - visible with data', 'GEOM_SRCE': 'inline label - visible with data', 'SHAPE_LEN': 'inline label - visible with data', });
lyr_Driveways_7.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Access Con': 'inline label - visible with data', 'Width': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_WaterValve_8.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Conditon R': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Culvert_9.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Cistern_10.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_FireHydrant_11.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Hydrant Ty': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Height (ft': 'inline label - visible with data', 'Color Codi': 'inline label - visible with data', });
lyr_GarbageBin_12.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Unit': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', });
lyr_GasMeter_13.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Mounting T': 'inline label - visible with data', 'Dialog or': 'inline label - visible with data', 'Body Mater': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Depth': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_PowerlinePole_14.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'field_11': 'inline label - visible with data', 'Phases': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Is a trans': 'inline label - visible with data', 'Number of': 'inline label - visible with data', 'Pole numbe': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Energy Pro': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_SepticTank_15.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Capacitiy': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Covering': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_SewerManhole_16.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Depth': 'inline label - visible with data', 'Cover Mate': 'inline label - visible with data', 'Manhole Ty': 'inline label - visible with data', 'Lid Types': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Length': 'inline label - visible with data', });
lyr_StorageFacility_17.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Dimension': 'inline label - visible with data', 'Exterior M': 'inline label - visible with data', });
lyr_Streetlight_18.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Wiring & e': 'inline label - visible with data', 'Light Fixt': 'inline label - visible with data', 'Control Sy': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Base Ancho': 'inline label - visible with data', 'Source': 'inline label - visible with data', });
lyr_TrafficSignage_19.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Size': 'inline label - visible with data', 'Materials': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_AbandonedWells_20.set('fieldLabels', {'Licence': 'inline label - visible with data', 'Licensee': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Fluid': 'inline label - visible with data', 'SurfLoc': 'inline label - visible with data', 'LicenseeID': 'inline label - visible with data', 'Address1': 'inline label - visible with data', 'Address2': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'PostalCode': 'inline label - visible with data', 'Phone': 'inline label - visible with data', });
lyr_Bridges_21.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'ATTR_2': 'inline label - visible with data', 'ATTR_3': 'inline label - visible with data', 'ATTR_4': 'inline label - visible with data', 'ATTR_5': 'inline label - visible with data', 'ATTR_6': 'inline label - visible with data', 'ATTR_7': 'inline label - visible with data', 'ATTR_8': 'inline label - visible with data', 'ATTR_1': 'inline label - visible with data', });
lyr_Bridges_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});