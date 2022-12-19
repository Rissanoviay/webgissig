var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'substation': 'substation', 'power': 'power', 'pump:unit': 'pump:unit', 'elevation': 'elevation', 'man_made': 'man_made', 'capacity:pump': 'capacity:pump', 'wheelchair': 'wheelchair', 'number_of_apartments': 'number_of_apartments', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'service_times': 'service_times', 'layer': 'layer', 'branch': 'branch', 'healthcare': 'healthcare', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'beauty': 'beauty', 'height': 'height', 'smoking': 'smoking', 'stars': 'stars', 'tourism': 'tourism', 'operator': 'operator', 'evacuation_center': 'evacuation_center', 'brand': 'brand', 'cuisine': 'cuisine', 'website': 'website', 'phone': 'phone', 'opening_hours': 'opening_hours', 'email': 'email', 'addr:housenumber': 'addr:housenumber', 'office': 'office', 'description': 'description', 'building:walls': 'building:walls', 'admin_level': 'admin_level', 'shop': 'shop', 'sport': 'sport', 'leisure': 'leisure', 'city': 'city', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housename': 'addr:housename', 'religion': 'religion', 'amenity': 'amenity', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'office': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'substation': '', 'power': '', 'pump:unit': '', 'elevation': '', 'man_made': '', 'capacity:pump': '', 'wheelchair': '', 'number_of_apartments': '', 'internet_access:fee': '', 'internet_access': '', 'service_times': '', 'layer': '', 'branch': '', 'healthcare': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'beauty': '', 'height': '', 'smoking': '', 'stars': '', 'tourism': '', 'operator': '', 'evacuation_center': '', 'brand': '', 'cuisine': '', 'website': '', 'phone': '', 'opening_hours': '', 'email': '', 'addr:housenumber': '', 'office': '', 'description': '', 'building:walls': '', 'admin_level': '', 'shop': '', 'sport': '', 'leisure': '', 'city': '', 'addr:street': '', 'addr:postcode': '', 'addr:housename': '', 'religion': '', 'amenity': '', 'school:type_idn': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'office': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'substation': 'no label', 'power': 'no label', 'pump:unit': 'no label', 'elevation': 'no label', 'man_made': 'no label', 'capacity:pump': 'no label', 'wheelchair': 'no label', 'number_of_apartments': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'service_times': 'no label', 'layer': 'no label', 'branch': 'no label', 'healthcare': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'beauty': 'no label', 'height': 'no label', 'smoking': 'no label', 'stars': 'no label', 'tourism': 'no label', 'operator': 'no label', 'evacuation_center': 'no label', 'brand': 'no label', 'cuisine': 'no label', 'website': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'addr:housenumber': 'no label', 'office': 'no label', 'description': 'no label', 'building:walls': 'no label', 'admin_level': 'no label', 'shop': 'no label', 'sport': 'no label', 'leisure': 'no label', 'city': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housename': 'no label', 'religion': 'no label', 'amenity': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});