<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="13"
                 style="width:400px;  height: 400px;"
        >
            <gmap-polygon :paths="paths">
            </gmap-polygon>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "GoogleMap",
        data() {
            return {
                center: { lat: 1.390, lng: 103.810 },
                paths: [
                    [ {lat: 1.380, lng: 103.800}, {lat:1.380, lng: 103.810}, {lat: 1.390, lng: 103.810}, {lat: 1.390, lng: 103.800} ]
                ]
            };
        }
    };
</script>
