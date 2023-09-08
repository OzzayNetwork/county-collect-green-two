<template>
<head>

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
                                <h4 class="mb-sm-0 font-size-18">Revenue Stream Configurations</h4>

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
                        <div v-if="permission==='WRITE'" class="col-6">

                            <div class="card p-4">



                                <div class="card-body">
                                    <h4 class="card-title text-capitalize">Create new revenue stream</h4>
                                    <p class="pb-4">Fill in below to add new revenue stream
                                    </p>
                                    <hr class="mb-5 d-none">
                                        <div class="row form-space">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-label">Select New Revenue Department</label>
                                                    <select v-model="departmentID" class="form-control bg-white" title="Select Revenue Stream" data-live-search="true" @click="getIncomeTypes(departmentID)">
                                                        <option v-for="(item, index) in departments" :key="`${index}`" :value="item.departmentID">{{item.department}}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="">Revenue Stream<strong class="text-danger">*</strong></label>
                                                    <input v-model="incomeTypeDescription" type="text" class="form-control" placeholder="Enter Revenue Stream">
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="">Prefix<strong class="text-danger">*</strong></label>
                                                    <input v-model="incomeTypePrefix" type="text" class="form-control" placeholder="Enter Prefix">
                                                </div>
                                            </div>


                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="">Description<strong class="text-danger">*</strong></label>
                                                    <input v-model="fundDescription" type="text" class="form-control" placeholder="Enter Description">
                                                </div>
                                            </div>





                                        </div>

                                    <div v-if="message!==null" class="alert alert-danger" role="alert">
                                        {{message}}
                                    </div>


                                        <div class="row">
                                            <div class="col-lg-10">
                                                <button  @click="addRevenueStream()" type="submit" class="btn btn-primary"><i class="mdi mdi-account-plus-outline me-1"></i>Save</button>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card p-4">

                                <div>
                                    <div class="form-group">
                                        <label for="">All Revenue Streams({{incomeTypes.length}})<strong class="text-danger">*</strong></label>

                                        <table class="table table-striped table-sm font-12 sources-table">
                                            <thead>
                                            <tr class="font-weight-bold text-black">
                                                <th scope="col">No</th>
                                                <th scope="col">Renue Stream</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style="cursor: pointer;" v-for="(item, index) in incomeTypes" :value="item" :key="index">
                                                <td scope="row">{{index+1}}.</td>

                                                <td>{{item.incomeTypeDescription}}</td>
                                            </tr>
                                            <tr style="background: #cee9d8;">
                                                <th><strong>Total {{incomeTypes.length}}</strong></th>
                                                <th></th>
                                            </tr>
                                            </tbody>
                                        </table>

<!--                                        <ul>-->
<!--                                            <li style="cursor: pointer;" v-for="(item, index) in departments" :key="`${index}`" @click="selectedDepartment(item.department,item.id)" > {{item.department}}</li>-->
<!--                                        </ul>-->
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
    import {biller, execute} from "@/api";
    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return{
                permission:"",
                incomeTypes:[],
                departmentID:'',
                incomeTypeDescription:'',
                incomeTypePrefix:'',
                fundDescription:'',
                message: null,
                id:'',
                update:false,
                departments:[],
                department:''
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {
            this.permission = sessionStorage.getItem("permission")
            this.getDepartment()
            this.getIncomeTypes('')
        },
        methods:{
            gotTo(route){
                router.push(route)
            },
            selectedDepartment(department,id){
                this.update = true
                this.department = department
                this.id = id

            },
            addRevenueStream(){
                if(this.incomeTypeDescription===''){
                   this.message ='Fill in '
                }
                this.message = null
                const data = new FormData();
                data.append("function", "addRevenueStream");
                data.append("incomeTypeDescription", this.incomeTypeDescription);
                data.append("incomeTypePrefix", this.incomeTypePrefix);
                data.append("fundDescription", this.fundDescription);
                data.append("departmentID", this.departmentID);
                data.append("update", this.update);
                data.append("id", this.id);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.department =''
                            this.update = false
                            this.getIncomeTypes(this.departmentID)
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getIncomeTypes(departmentID){
                this.message =null
                this.incomeTypes.splice(0)
                const data = new FormData();
                data.append("function", "getIncomeTypes");
                data.append("departmentID", departmentID);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.incomeTypes = res.data.data.incomeTypes
                            // alert(this.incomeTypes)
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getDepartment(){
                this.message = null
                const data = new FormData();
                data.append("function", "getDepartment");
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.departments = res.data.data.departments
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            deleteRevenueStream(){
                this.message = null
                const data = new FormData();
                data.append("function", "deleteRevenueStream    ");
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.departments = res.data.data.departments
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