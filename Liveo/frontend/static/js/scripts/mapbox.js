window.addEventListener("load", async () => {
    mapboxgl.accessToken = "pk.eyJ1IjoibWVsbGxsbCIsImEiOiJjbGFxbHZsb2Yxam13M3BxdnVteDFzYm4wIn0.pQQSm-NlQmjEmJKKhCLCvw";
    if (document.getElementById('map')) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/melllll/claqmemhc001h15rqv05npyi9',
            center: [-60, -20],
            zoom: 2.25,
            // projection: 'equalEarth',
            renderWorldCopies: false,
        });
        let activeDeptId = null;
        const scale = new mapboxgl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        });
        map.addControl(scale);


        function filterBy(year, intervalStart, interval25, interval50, interval75, intervalEnd) {
            let mapLayer = map.getLayer('Country');

            if (typeof mapLayer !== 'undefined') {
                // Remove map layer & source.
                map.setPaintProperty(
                    'Country',
                    'fill-color',
                    [
                        "interpolate",
                        ["linear"],
                        ["get", year],
                        intervalStart,
                        "rgba(197, 45, 72, 0.1)",
                        interval25,
                        "rgba(197, 45, 72, 0.25)",
                        interval50,
                        "rgba(197, 45, 72, 0.5)",
                        interval75,
                        "rgba(197, 45, 72, 0.75)",
                        intervalEnd,
                        "#C52d48"
                    ]
                );
            }
        }

        map.on('load', async () => {
            document.getElementById('min').innerHTML = "2001";

            document.getElementById('max').innerHTML = "2015";

            const year = "GE_" + document.getElementsByClassName('toggle_item')[0].value;

            const csvData = await fetch('./static/data/air_data_aurat_2016_2018.csv').then((response) => response.text());
            let pollutionByDept = {}, lineFields, csvLines = csvData.split("\n").slice(1);
            for (const line of csvLines) {
                lineFields = line.split(';');
                pollutionByDept[lineFields[0]] = parseFloat(lineFields[1]);
            }

            fetch('./static/data//merge__ForestsGeo__ForestsGeo.geojson').then((response) => response.json()).then((geojsonData) => {
                for (const f of geojsonData.features) {
                    // have to modify
                    // data.features = data.features.map((d) => {
                    //   d.properties.year = new Date(d.properties.time).getyear();
                    //   return d;
                    // });
                    f.properties.COUNTRYAFF = pollutionByDept[f.properties.COUNTRYAFF];
                }
                map.addSource('Country', {
                    'type': 'geojson',
                    'data': geojsonData,
                    'generateId': true
                });
                map.addLayer({
                    'id': 'Country',
                    'type': 'fill',
                    'source': 'Country',
                    'layout': {},
                    'paint': {
                        'fill-color':
                            [
                                "interpolate",
                                ["linear"],
                                ["get", year],

                                0,
                                "rgba(197, 45, 72, 0.1)",
                                13100,
                                "rgba(197, 45, 72, 0.25)",
                                630000,
                                "rgba(197, 45, 72, 0.5)",
                                7630000,
                                "rgba(197, 45, 72, 0.75)",
                                1820000000,
                                "#C52d48"
                            ]
                    }
                });
            })

        });
        document.getElementsByClassName('toggle_item')[0].addEventListener("change", function () {
            let currentYear = document.getElementsByClassName('toggle_item')[0].value;
            if (currentYear > 2015) {
                currentYear = 2015;
            }
            if (currentYear < 2001) {
                currentYear = 2001;
            }
            document.getElementsByClassName('toggle_item')[0].value = currentYear;
            if (jQuery('.scale-4--ter---legendCategory----item-----First').hasClass('active')) {
                let intervalStart = 0;
                let interval25 = 13100;
                let interval50 = 630000;
                let interval75 = 7630000;
                let intervalEnd = 1820000000;

                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-First')[0].innerHTML = intervalEnd;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Second')[0].innerHTML = interval75;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Third')[0].innerHTML = interval50;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Four')[0].innerHTML = interval25;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Five')[0].innerHTML = intervalStart;
                filterBy("GE_" + currentYear, intervalStart, interval25, interval50, interval75, intervalEnd);
            } else if (jQuery('.scale-4--ter---legendCategory----item-----Second').hasClass('active')) {
                let intervalStart = 0;
                let interval25 = 25.5;
                let interval50 = 1140;
                let interval75 = 13400;
                let intervalEnd = 2830000;

                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-First')[0].innerHTML = intervalEnd;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Second')[0].innerHTML = interval75;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Third')[0].innerHTML = interval50;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Four')[0].innerHTML = interval25;
                document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Five')[0].innerHTML = intervalStart;
                filterBy("TLC_" + currentYear, intervalStart, interval25, interval50, interval75, intervalEnd);
            }


        });

        document.getElementsByClassName('scale-4--ter---legendCategory----item-----Second')[0].addEventListener("click", function () {
            let currentYear = document.getElementsByClassName('toggle_item')[0].value;
            if (currentYear > 2015) {
                currentYear = 2015;
            }
            if (currentYear < 2001) {
                currentYear = 2001;
            }
            document.getElementsByClassName('toggle_item')[0].value = currentYear;
            let intervalStart = 0;
            let interval25 = 25.5;
            let interval50 = 1140;
            let interval75 = 13400;
            let intervalEnd = 2830000;

            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-First')[0].innerHTML = intervalEnd;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Second')[0].innerHTML = interval75;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Third')[0].innerHTML = interval50;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Four')[0].innerHTML = interval25;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Five')[0].innerHTML = intervalStart;
            filterBy("TLC_" + currentYear, intervalStart, interval25, interval50, interval75, intervalEnd);


        });
        document.getElementsByClassName('scale-4--ter---legendCategory----item-----First')[0].addEventListener("click", function () {
            let currentYear = document.getElementsByClassName('toggle_item')[0].value;
            if (currentYear > 2015) {
                currentYear = 2015;
            }
            if (currentYear < 2001) {
                currentYear = 2001;
            }
            document.getElementsByClassName('toggle_item')[0].value = currentYear;
            let intervalStart = 0;
            let interval25 = 13100;
            let interval50 = 630000;
            let interval75 = 7630000;
            let intervalEnd = 1820000000;

            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-First')[0].innerHTML = intervalEnd;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Second')[0].innerHTML = interval75;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Third')[0].innerHTML = interval50;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Four')[0].innerHTML = interval25;
            document.getElementsByClassName('scale-4--ter---legendScale----gradiantData-----item-Five')[0].innerHTML = intervalStart;
            filterBy("GE_" + currentYear, intervalStart, interval25, interval50, interval75, intervalEnd);
        });
        map.on('mouseenter', 'contry', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'none';

            // Copy coordinates array.
            const data = e.features[0].properties.contry - fills;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setHTML(data).addTo(map);
        });

        map.on('mouseleave', 'contry', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    }
});


