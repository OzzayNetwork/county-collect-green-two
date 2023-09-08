<template>
    <head>

        <meta charset="utf-8"/>
        <title>Bill</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Keep your finances and membership up to date" name="description"/>
        <meta content="Kelvin Njuguna Ndungu" name="author"/>
        <!-- App favicon -->
        <link href="assets/images/favicon.svg" rel="shortcut icon">

        <!-- Bootstrap Css -->
        <link id="bootstrap-style" href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <!-- Icons Css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css"/>
        <!-- App Css-->
        <link id="app-style" href="assets/css/app.min.css" rel="stylesheet" type="text/css"/>
        <!-- custom Css-->
        <link id="app-style" href="assets/css/custom.css" rel="stylesheet" type="text/css"/>

    </head>
    <body data-sidebar="dark">

    <!-- Begin page -->
    <div id="layout-wrapper">

     <NavigationBar/>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->

                    <!-- quick stats -->
                    <div class="row">
                        <div class="col-xl-12 px-sm-30px">
                            <div class="card  member-wedges-card">
                                <div class="card-body p-0">

                                    <div id="app">
                                        <gmap-map
                                                :center="center"
                                                :zoom="13"
                                                style="width:100%;  height: 400px;"
                                        >
                                            <gmap-polygon :paths="paths"></gmap-polygon>
                                        </gmap-map>
                                    </div>

                                 <!--   <div id="map" dir="ltr" style="height: 800px"/>-->

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay "></div>


    </body>
</template>


<script>
    /* eslint-disable */

    import NavigationBar from "@/components/Navigation";
    import { GmapMap, GmapPolygon } from 'vue3-google-map'

    export default {
        name: 'App',
        components: {NavigationBar,GmapMap,GmapPolygon},
        data () {
            return {
                paths: [
                    {lat: 34.757298189144251, lng: -0.102352067210745},
                    {lat: 34.757226805314019, lng: -0.102780370191795},
                    {lat: 34.757033672395607, lng: -0.102965571573407},
                    {lat: 34.756670804592432, lng: -0.102549165897358},
                    {lat: 34.756860637169666, lng: -0.102372969091391},
                    {lat: 34.756962288565603, lng: -0.102305271144303},
                    {lat: 34.757027723743192, lng: -0.102311219796718},
                    {lat: 34.757298189144251, lng: -0.102352067210745}
                ],
                center: {lat: -0.091702, lng: 34.767956}, // The coordinates of Kisumu town

            }
        },
        methods: {
            handlePolygonComplete (polygon) {
// Handle the event when a polygon is drawn on the map
                console.log(polygon)
// You can set the polygon options and paths using the polygon object
                polygon.setOptions({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 3,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                })
                polygon.setPaths(this.coordinates)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>