<template>
<head>

    <meta charset="utf-8" />
    <title>NTSA | User registration</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


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
                                <h4 class="mb-sm-0 font-size-18">Zones Configurations</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a></li>
                                        <li class="breadcrumb-item active">Zones</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- eTransactions table -->

                    <div class="row">
                        <div class="col-6">

                            <div class="card p-4">
                                <div class="card-body">
                                    <h4 class="card-title text-capitalize">Create new zones below</h4>
                                    <p class="pb-4">Fill in below to register zones and their respective sub counties and wards
                                    </p>
                                    <hr class="mb-5 d-none">
                                        <div class="row form-space">

                                            <div class="col-6"  >
                                                <div class="form-group">
                                                    <label for="">Sub County<strong class="text-danger">*</strong></label>

                                                    <select class="form-select" @change="getWards(subCounty.subCountyID)"  v-model="subCounty">
                                                        <option ><a class="dropdown-item" href="#">Clear Filter</a></option>
                                                        <option v-for="(item, index) in subCounties" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.subCountyName}}</a></option>
                                                    </select>
                                                    <small>Select the sub county where the zone is situated</small>
                                                </div>

                                            </div>

                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Wards<strong class="text-danger">*</strong></label>

                                                    <select class="form-select"  v-model="ward">
                                                        <option v-for="(item, index) in wards" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.wardName}}</a></option>
                                                    </select>

                                                    <small>Select the ward for the zone</small>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Zone Name<strong class="text-danger">*</strong></label>
                                                    <input v-model="zone" type="text" class="form-control" placeholder="Enter zone name">
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Latitude,Longitude<strong class="text-danger">*</strong></label>
                                                    <input v-model="latLng" type="text" class="form-control" placeholder="Latitude,Longitude">
                                                </div>
                                            </div>

                                        </div>

                                    <div v-if="message!==null" class="alert alert-danger" role="alert">
                                        {{message}}
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-10">
                                                <button  @click="createZone()" type="submit" class="btn btn-primary"><i class="mdi mdi-account-plus-outline me-1"></i>Save</button>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-6">

                            <div class="card p-4">

                                <div class="col-6"  >
                                    <div class="form-group">
                                        <div v-if="message!==null" class="alert alert-danger" role="alert">
                                            {{message}}
                                        </div>
                                        <label for="">All zones<strong class="text-danger">*</strong></label>
                                        <ul style="cursor: pointer;">
                                            <li v-for="(item, index) in zones" :key="`${index}`" v-on:click="selectItem(item)" data-toggle="modal" data-target="#changeWard">
                                                {{item.zone}} <small> Sub county:{{item.subCountyName}}</small> <small>  Ward: {{item.wardName}}</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <!-- end row -->
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <div class="modal fade" id="changeWard" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Update Demographics</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Zone Name<strong class="text-danger">*</strong></label>
                                        <input v-model="zone" type="text" class="form-control" placeholder="Enter zone name">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for=""><strong class="text-danger">*</strong>Latitude,Longitude</label>
                                        <input v-model="latLng" type="text" class="form-control" placeholder="Latitude,Longitude">
                                    </div>
                                </div>

                                <div class="col-6"  >
                                    <div class="form-group">
                                        <label for="">Sub County<strong class="text-danger">*</strong></label>

                                        <select class="form-select" @change="getWards(subCounty.subCountyID)"  v-model="subCounty">
                                            <option ><a class="dropdown-item" href="#">Clear Filter</a></option>
                                            <option v-for="(item, index) in subCounties" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.subCountyName}}</a></option>
                                        </select>
                                        <small>Select the sub county where the zone is situated</small>
                                    </div>

                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Wards<strong class="text-danger">*</strong></label>

                                        <select class="form-select"  v-model="ward">
                                            <option v-for="(item, index) in wards" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.wardName}}</a></option>
                                        </select>

                                        <small>Select the ward for the zone</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button @click="updateZone()" type="button" class="btn btn-primary w-100 text-center">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>




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

    </body>


</template>

<script>
    import NavigationBar from "@/components/Navigation";
    import router from "@/router";
    import {authUrl, execute,biller} from "@/api";
    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return{
                selectedItem:{
                    id:null,
                    subCountyID:null,
                    subCountyName:null,
                    zone:null,
                    wardID:null,
                    wardName:null,
                    lat:null,
                    lng:null
                },
                clear:"",
                ward: {
                    id:"",
                    countyID:"",
                    countyName:"",
                    subCountyID:"",
                    subCountyName:"",
                    wardID:"",
                    wardName:"",
                    status:""
                },
                subCounty:{
                    id:"",
                    countyID:"",
                    countyName:"",
                    subCountyID:"",
                    subCountyName:"",
                    wardID:"",
                    wardName:"",
                    status:""
                },
                latLng:'',
                wardName:'',
                subCountyName:'',
                gender:'Female',
                names:'',
                phoneNumber:'',
                idNo:'',
                email:'',
                categories:[],
                selectedCategory:'',
                selectedRoles:[],
                message:null,
                zones: [],
                roles: [],
                zone:'',
                subCounties:[],
                wards:[]
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {

            this.getCategories()
            this.getZones()
            this.getRoles()
            this.getSubCounties()

            this.$watch('ward', function() {
                this.getZones()
            })

           this.$watch('subCounty', function() {
               if(this.subCounty ==="Clear Filter"){
                   this.ward.wardID =""
                   this.getCategories()
                   this.getZones()
                   this.getRoles()
                   this.getSubCounties()
               }
            })

        },
        methods:{
            selectItem(item) {
                this.selectedItem = item;
                this.zone = this.selectedItem.zone
                this.latLng = this.selectedItem.lat+","+this.selectedItem.lng
            },
            gotTo(route){
                router.push(route)
            },
            getWards(subCountyID){
                this.wards = []
                this.message = null
                const data = new FormData();
                data.append("function", "getWards");
                data.append("subCountyID",subCountyID);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.wards = res.data.data.wards
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getSubCounties(){
                this.subCounties.splice(0)
                this.message = null
                const data = new FormData();
                data.append("function", "getSubCounties");
                data.append("countyId", "getSubCounties");
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.subCounties = res.data.data.subCounties
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getCategories(){
                this.categories.splice(0)
                this.message = null
                const data = new FormData();
                data.append("function", "getCategories");
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.categories = res.data.data.categories
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getRoles(){
                this.roles.splice(0)
                this.message = null
                const data = new FormData();
                data.append("function", "getRoles");
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.roles = res.data.data.roles
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getZones(){
                this.message = null
                this.zones.splice(0)
                const data = new FormData();
                data.append("function", "getZones");
                data.append("wardID", this.ward.wardID);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.zones = res.data.data.zones
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            createZone(){
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
                data.append("id", this.selectedItem.id);
                data.append("zone", this.zone);
                data.append("lat", this.lat);
                data.append("lng", this.lng);
                data.append("subCountyID",this.subCounty.subCountyID);
                data.append("subCountyName",this.subCounty.subCountyName);
                data.append("wardID",this.ward.wardID);
                data.append("wardName",this.ward.wardName);
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
        },
    }
</script>

<style scoped>

</style>