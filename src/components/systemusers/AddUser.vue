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
                                <h4 class="mb-sm-0 font-size-18">User Registration</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a></li>
                                        <li class="breadcrumb-item active">User registration</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- eTransactions table -->

                    <div class="row">
                        <div class="col-12">
                            <div class="card p-4">

                                <div class="card-body">
                                    <h4 class="card-title text-capitalize">User registration</h4>
                                    <p class="pb-4">Fill in the form bellow to register the toll taker into the system. Once registered an <strong>OTP</strong> will be sent to the toll taker of which they are expected to use as their PIn for their very first log in.
                                    </p>
                                    <hr class="mb-5 d-none">
                                        <div class="row form-space">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Names<strong class="text-danger">*</strong></label>
                                                    <input v-model="names" type="text" class="form-control" placeholder="Enter the user's Names">
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">National Id Number <strong class="text-danger">*</strong></label>
                                                    <input v-model="idNo" type="number" class="form-control" placeholder="Enter the user's Id number">
                                                </div>
                                            </div>


                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Phone <strong class="text-danger">*</strong></label>
                                                    <input v-model="phoneNumber" type="tel" class="form-control" placeholder="Enter the user's phone number">
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Email Address <strong class="text-danger">*</strong></label>
                                                    <input v-model="email" type="email" class="form-control" placeholder="Enter the user's email Address">
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="Gender">Gender</label>
                                                <div class="d-flex mb-3">
                                                    <div class="form-check mb-3 pr-15px">
                                                        <input v-model="gender" value="Male" class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked="">
                                                        <label class="form-check-label" for="formRadios1">
                                                            Male
                                                        </label>
                                                    </div>


                                                    <div class="form-check mb-3">
                                                        <input v-model="gender" value="Female" class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked="">
                                                        <label class="form-check-label" for="formRadios1">
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="col-3"  >
                                                <div class="form-group">
                                                    <label for="">Subcounty <strong class="text-danger">*</strong></label>


                                                    <select class="form-select" id="country"  @change="getWards(subCounty.subCountyID)"  v-model="subCounty">
                                                        <option v-for="(item, index) in subCounties" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.subCountyName}}</a></option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="form-group">
                                                    <label for="">Wards<strong class="text-danger">*</strong></label>

                                                    <select class="form-select"  v-model="ward">
                                                        <option v-for="(item, index) in wards" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.wardName}}</a></option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div class="col-3"  >
                                                <div class="form-group">
                                                    <label for="">Zone<strong class="text-danger">*</strong></label>

                                                    <select class="form-select"  v-model="zone" multiple>
                                                        <option v-for="(item, index) in zones" :key="`${index}`"><a class="dropdown-item" href="#">{{item.zone}}</a></option>
                                                        Fill all the places
                                                    </select>

                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="form-group">
                                                    <label for="">Category<strong class="text-danger">*</strong></label>

                                                    <select class="form-select"  v-model="selectedCategory">
                                                        <option v-for="(item, index) in categories" :key="`${index}`"><a class="dropdown-item" href="#">{{item.category}}</a></option>
                                                    </select>

                                                </div>
                                            </div>



                                        </div>

                                    <div v-if="message!==null" class="alert alert-danger" role="alert">
                                        {{message}}
                                    </div>


                                        <div class="row">
                                            <div class="col-lg-10">
                                                <button  @click="createUser()" type="submit" class="btn btn-primary"><i class="mdi mdi-account-plus-outline me-1"></i>Register User</button>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                        <!-- end col -->
                    </div>

                    <!-- end row -->
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->




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
    import {authUrl, execute} from "@/api";
    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return{
                ward:{
                    id:"",
                    countyID:"",
                    countyName:"",
                    subCountyID:"",
                    subCountyName:"",
                    wardID:"",
                    wardName:"",
                    status:""
                },
                subCounty: {
                    id:"",
                    countyID:"",
                    countyName:"",
                    subCountyID:"",
                    subCountyName:"",
                    wardID:"",
                    wardName:"",
                    status:""
                },
                wardName:'',
                subCountyName:'',
                gender:'Female',
                names:'',
                phoneNumber:'',
                idNo:'',
                email:'',
                categories:[{
                    id: "",
                    category: ""
                }],
                selectedCategory:'',
                selectedRoles:[],
                message:null,
                zones: [],
                roles: [],
                zone:'',
                subCounties:[],
                wards:''
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {
            this.getRoles()
            this.getSubCounties()
            this.getCategories()

        },
        methods:{
            gotTo(route){
                router.push(route)
            },
            getWards(subCountyID){
                const data = new FormData();
                data.append("function", "getWards");
                data.append("subCountyID",subCountyID);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.wards = res.data.data.wards
                            this.getZones(subCountyID)
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
                const data = new FormData();
                data.append("function", "getSubCounties");
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
            getZones(subCountyID){
                const data = new FormData();
                data.append("function", "getZones");
                data.append("subCountyID", subCountyID);
                execute(data,authUrl)
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
            createUser(){
                this.message = null
                if(this.gender === '' ||
                    this.names === '' ||
                    this.phoneNumber === '' ||
                    this.idNo === '' ||
                    this.selectedCategory === '' ||
                    this.zone === ''){
                    this.message ="Fill all the places"
                    return
                }
                const data = new FormData();
                data.append("function", "createUser");
                data.append("names", this.names);
                data.append("email", this.email);
                data.append("phoneNumber", this.phoneNumber);
                data.append("category", this.selectedCategory)    ;
                data.append("idNo", this.idNo);
                data.append("zone", this.zone);
                data.append("subCountyID", this.subCounty.subCountyID);
                data.append("subCountyName", this.subCounty.subCountyName);
                data.append("wardID", this.ward.wardID);
                data.append("wardName", this.ward.wardName);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                           // this.message =res.data.message
                            this.gotTo('users')
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