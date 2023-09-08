<template>

    <head>

        <meta charset="utf-8"/>
        <title>Zones and Allocations</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Keep your finances and membership up to date" name="description"/>
        <meta content="Kelvin Njuguna Ndungu" name="author"/>
        <!-- App favicon -->
        <link href="assets/images/favicon.svg" rel="shortcut icon">
        <!-- droping file -->
        <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css"/>

        <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet"
              type="text/css"/>
        <link href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css" rel="stylesheet">

        <!-- DataTables -->
        <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
              type="text/css"/>

        <!-- Bootstrap Css -->
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css"/>
        <!-- Bootstrap select styling -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css"
              rel="stylesheet">
        <!-- Icons Css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css"/>
        <!-- App Css-->
        <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css"/>
        <!-- custom Css-->
        <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css"/>


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
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Zone/Collection Point mapping</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Reports</li>
                                        <li class="breadcrumb-item active">Zone mapping</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">

                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">
                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100"
                                         role="toolbar">
                                        <h4 class="mb-0">Registered collection points/Zones</h4>
                                        <div v-if="permission==='WRITE'" class="d-flex">
                                            <a  @click="createZone(false)" class="btn btn-primary dropdown-toggle option-selector"
                                               data-bs-target=".add-modal" data-bs-toggle="modal" href="#"
                                               type="button">
                                                <i class="mdi mdi-account-multiple-plus-outline  font-size-16"></i>
                                                <span class="pl-1 d-md-inline">Add Zone</span>
                                            </a>
                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar"
                                         role="toolbar">

                                        <button class="btn btn-primary waves-effect btn-label waves-light me-3"
                                                type="button"><i class="bx  bx-trash label-icon"></i> Delete Contact(s)
                                        </button>
                                        <button class="btn btn-primary waves-effect btn-label waves-light me-3"
                                                type="button"><i class="mdi mdi-plus label-icon"></i> Compose Message
                                        </button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-striped table-nowrap table-hover dt-responsive contacts-table"
                                               id="">
                                            <thead class="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Zone Name</th>
                                                <th>Zone category</th>
                                                <th class="" scope="col">Subcounty</th>
                                                <th scope="col">Ward</th>
                                                <th class="" scope="col">Officers</th>
                                                <th></th>
                                            </tr>
                                            </thead>

                                            <tbody :key="index" :value="item" v-for="(item, index) in zonesData">

                                            <tr class="table-success">
                                                <th>{{index+1}}.</th>
                                                <th colspan="6">{{item.subCounty.subCountyName}}</th>
                                            </tr>

                                            <tr class="table-info">
                                                <th>{{toAlpha(index + 1)}}.</th>
                                                <th colspan="6">{{item.ward.wardName}}</th>
                                            </tr>

                                            <tr :key="index" :value="item2" v-for="(item2, index) in item.zones">
                                                <td>{{toRoman(index + 1)}}</td>
                                                <td>{{item2.zone}}</td>
                                                <td>{{item2.zoneCategory}}</td>
                                                <td>{{item2.subCountyName}}</td>
                                                <td>{{item2.wardName}}</td>
                                                <td>{{item2.agents}} Officer(s)</td>
                                                <td>
                                                    <button v-if="permission==='WRITE'"  @click="zoneSelected(item2)" class="btn btn-info btn-sm"
                                                            data-bs-target=".add-modal" data-bs-toggle="modal"><i
                                                            class="bx bx-edit-alt"></i> Edit
                                                    </button>
                                                </td>
                                            </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end col -->
                    </div>


                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <!-- registration and editing modal -->
            <div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal fade add-modal" role="dialog"
                 tabindex="-1">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 v-if="updateRecord===true" class="modal-title text-capitalize">Edit {{selectedZone.zone}} zone details</h5>
                            <h5 v-if="updateRecord===false"  class="modal-title">Register A New Zone</h5>
                            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label for="">Zone Name</label>
                                        <input v-model="zone" class="form-control" placeholder="Enter The zone Name" type="text">
                                    </div>
                                </div>

                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label class="mb-0 pb-0" for="">Zone Type</label>
                                        <p><small>Select the zone type from the list below</small></p>
                                        <select class="form-select" v-model="category">
                                            <option :key="`${index}`" :value="item" v-for="(item, index) in zoneCategories"><a class="dropdown-item" href="#">{{item.zoneCategory}}</a></option>

                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label class="mb-0 pb-0" for="">SubCounty</label>
                                        <p><small>Select the sub county from below</small></p>
                                        <select @change="getWards(subCounty.subCountyID)" class="form-select"
                                                id="country" v-model="subCounty">
                                            <option :key="`${index}`" :value="item" v-for="(item, index) in subCounties"><a class="dropdown-item"
                                                                                            href="#">{{item.subCountyName}}</a>
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label class="mb-0 pb-0" for="">Ward</label>
                                        <p><small>Select the ward from below</small></p>
                                        <select class="form-select" v-model="ward">
                                            <option :key="`${index}`" :value="item" v-for="(item, index) in wards"><a
                                                    class="dropdown-item" href="#">{{item.wardName}}</a></option>
                                        </select>
                                    </div>
                                </div>


                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label for="">Longitude & Latitude</label>
                                        <p><small>Enter the location coodinates in the format shown below.</small></p>
                                        <input class="form-control" placeholder="Longitude, Latitude" type="text"
                                               v-model="latLng">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="message!==null" class="alert alert-danger" role="alert">
                            {{message}}
                        </div>

                        <div class="modal-footer">
                            <button v-if="updateRecord === true" @click="updateZone()" class="btn btn-primary w-100" title="Click to save" data-bs-dismiss="modal">Save</button>
                            <button v-if="updateRecord === false" @click="createZone(true)" class="btn btn-primary w-100" title="Click to save" data-bs-dismiss="modal">Create</button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- end of edditing modal -->


            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                            © Best Birdy
                        </div>
                        <div class="col-sm-6 ">
                            <div class="text-sm-end d-sm-block ">
                                Best Birdy Billing system.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay "></div>

    </body>

</template>

<script>
    import NavigationBar from "@/components/Navigation";
    import {execute, biller, authUrl} from "@/api";

    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return {
                permission:"",
                updateRecord: false,
                zone:'',
                zoneCategories:[],
                selectedZone: null,
                category:{
                    id:null,
                    zoneCategory:null,
                    zoneCategoryID:null
                },
                ward: {
                    id: "",
                    countyID: "",
                    countyName: "",
                    subCountyID: "",
                    subCountyName: "",
                    wardID: "",
                    wardName: "",
                    status: ""
                },
                subCounty: {
                    id: "",
                    countyID: "",
                    countyName: "",
                    subCountyID: "",
                    subCountyName: "",
                    wardID: "",
                    wardName: "",
                    status: ""
                },
                wardName: '',
                subCountyName: '',
                message: null,
                zonesData: [],
                subCounties: [{
                    id: "",
                    countyID: "",
                    countyName: "",
                    subCountyID: "",
                    subCountyName: "",
                    wardID: "",
                    wardName: "",
                    status: ""
                }],
                wards: [],
                latLng: '',
            }
        },
        computed: {},
        watch: {},

        mounted() {
            this.permission = sessionStorage.getItem("permission")
            this.getZonesData()

        },
        methods: {
            createZone(create){
                this.message = null
                this.updateRecord = false
                if(!create){
                    this.zone =""
                    this.getZoneCategories()
                    this.getSubCounties()
                    return
                }
                this.message = null
                if(this.latLng.split(',').length>0){
                    this.lat = this.latLng.split(',')[0]
                    this.lng = this.latLng.split(',')[1]
                }
                this.message = null
                const data = new FormData();
                data.append("function", "createZone");
                data.append("subCountyID", this.subCountyID);
                data.append("zone", this.zone);
                data.append("lat", this.lat);
                data.append("lng", this.lng);
                data.append("subCountyID",this.subCounty.subCountyID);
                data.append("subCountyName",this.subCounty.subCountyName);
                data.append("wardID",this.ward.wardID);
                data.append("wardName",this.ward.wardName);
                data.append("zoneCategoryID",this.category.zoneCategoryID);
                data.append("zoneCategory",this.category.zoneCategory);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.getZones()
                            this.zone =''
                            this.latLng =''
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            updateZone(){
                this.message = null
                if(this.latLng.split(',').length>0){
                    this.lat = this.latLng.split(',')[0]
                    this.lng = this.latLng.split(',')[1]
                }
                const data = new FormData();
                data.append("function", "updateZone");
                data.append("id", this.selectedZone.id);
                data.append("zone", this.zone);
                data.append("lat", this.lat);
                data.append("lng", this.lng);
                data.append("subCountyID",this.subCounty.subCountyID);
                data.append("subCountyName",this.subCounty.subCountyName);
                data.append("wardID",this.ward.wardID);
                data.append("zoneCategoryID",this.category.zoneCategoryID);
                data.append("zoneCategory",this.category.zoneCategory);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.getZones()
                            this.zone =''
                            this.latLng =''
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            zoneSelected(selectedZone) {
                this.updateRecord = true
                this.selectedZone = selectedZone;
                this.zone = selectedZone.zone
                this.getSubCounties()
                this.getWards(this.selectedZone.subCountyID)
                this.getZoneCategories()

            },
            getZoneCategories() {
                this.message = null
                const data = new FormData();
                data.append("function", "getZoneCategories");
                execute(data, biller)
                    .then((res) => {
                        if (res.data.success) {
                            this.zoneCategories = res.data.data.categories
                            //zoneCategory

                            //preselection
                            this.zoneCategories.forEach((value, index) => {
                                if (this.selectedZone.zoneCategoryID === value.zoneCategoryID) {
                                    this.category = this.zoneCategories[index];
                                }
                            });

                        } else {
                            this.message = res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message = e.message
                    });
            },
            getWards(subCountyID) {
                this.wards = []
                this.message = null
                const data = new FormData();
                data.append("function", "getWards");
                data.append("subCountyID", subCountyID);
                execute(data, authUrl)
                    .then((res) => {
                        if (res.data.success) {
                            this.wards = res.data.data.wards

                            this.wards.forEach((value, index) => {
                                if (this.selectedZone.wardID === value.wardID) {
                                    this.ward = this.wards[index];
                                }
                            });

                        } else {
                            this.message = res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message = e.message
                    });
            },
            getSubCounties() {
                this.message = null
                this.subCounties.splice(0)
                this.message = null
                const data = new FormData();
                data.append("function", "getSubCounties");
                data.append("countyId", "getSubCounties");
                execute(data, authUrl)
                    .then((res) => {
                        if (res.data.success) {
                            this.subCounties = res.data.data.subCounties

                            //preselection
                            this.subCounties.forEach((value, index) => {
                                if (this.selectedZone.subCountyID === value.subCountyID) {
                                    this.subCounty = this.subCounties[index];
                                }
                            });

                        } else {
                            this.message = res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message = e.message
                    });
            },
            toRoman(num) {
                let result = '';
                let map = {
                    M: 1000,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                };
                for (let key in map) {
                    while (num >= map[key]) {
                        result += key;
                        num -= map[key];
                    }
                }
                return result;
            },
            toAlpha(num) {
                let alpha = "";
                while (num > 0) {
                    let remainder = (num - 1) % 26;
                    alpha = String.fromCharCode(65 + remainder) + alpha;
                    num = Math.floor((num - 1) / 26);
                }
                return alpha;
            },
            getZonesData() {
                this.message = null
                const data = new FormData();
                data.append("function", "getZonesData");
                execute(data, biller)
                    .then((res) => {
                        if (res.data.success) {
                            this.zonesData = res.data.data
                        } else {
                            this.message = res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message = e.message
                    });
            }
        },
    }
</script>

<style scoped>

</style>