<template>
    <head>

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

        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Finance Act</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                                        <li class="breadcrumb-item active">User's Register</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- eTransactions table -->

                    <div class="row">
                        <div class="col-4">
                            <div class="card p-4">

                                <div>
                                    <div class="form-group">
                                        <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">
                                            <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                                <label >All Departments({{departments.length}})<strong class="text-danger">*</strong></label>
                                                <div v-if="permission==='WRITE'" class="d-flex">
                                                    <a @click="gotTo('department')" type="button" class="btn btn-primary dropdown-toggle option-selector" data-bs-toggle="offcanvas" data-bs-target="#dt__filter" aria-controls="offcanvasRight">
                                                        <i class="mdi mdi-account-multiple-plus-outline  font-size-6"></i> <span class="pl-1 d-md-inline">Add Department</span>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>


                                        <table class="table table-striped table-sm font-12 sources-table">
                                            <thead>
                                            <tr class="font-weight-bold text-black">
                                                <th scope="col">No</th>
                                                <th scope="col">Department</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style="cursor: pointer;" v-for="(item, index) in departments" :value="item" :key="index" @click="getIncomeTypes(item.departmentID)">
                                                <td scope="row">{{index+1}}.</td>

                                                <td>{{item.department}}</td>
                                            </tr>
                                            <tr style="background: #cee9d8;">
                                                <th><strong>Total {{departments.length}}</strong></th>
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
                        <div class="col-4">
                            <div class="card">
                                <div class="calc-30px">
                                    <div class="card">

                                        <div class="card-body">
                                            <button @click="getIncomeTypes('')" class="btn btn-warning btn-sm text-nowrap" title="View unmapped streams to department">unmapped</button>

                                            <div class="table-responsive font-12">
                                                <table class="table table-striped table-sm font-12 sources-table">
                                                    <thead>
                                                    <tr class="font-weight-bold text-black">
                                                        <th scope="col">No</th>
                                                        <th scope="col">Revenue streams</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr style="cursor: pointer;" v-for="(item, index) in incomeTypes" :value="item" :key="index">
                                                        <td scope="row">{{index+1}}</td>
                                                        <td scope="row" @click="getFeesAndCharges(item.incomeTypeId,item.incomeTypeDescription)">{{item.incomeTypeDescription}}

                                                        </td>

                                                        <td v-if="permission==='WRITE'">
                                                            <button @click="selectStream(item.incomeTypeId)" class="btn btn-success btn-sm text-nowrap" title="change department" data-toggle="modal" data-target="#changeStream">Change</button>

                                                        </td>

                                                    </tr>
                                                    <tr style="background: #cee9d8;">
                                                        <th><strong>Total {{incomeTypes.length}}</strong></th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-4">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">
                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <h6 class="mb-0">Fees and charges</h6>
<!--                                        <div class="d-flex">-->
<!--                                            <a @click="gotTo('add-users')" type="button" class="btn btn-primary dropdown-toggle option-selector" data-bs-toggle="offcanvas" data-bs-target="#dt__filter" aria-controls="offcanvasRight">-->
<!--                                                <i class="mdi mdi-account-multiple-plus-outline  font-size-10"></i> <span class="pl-1 d-md-inline">Add User(s)</span>-->
<!--                                            </a>-->
<!--                                        </div>-->


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">

                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="bx  bx-trash label-icon"></i> Delete Contact(s)</button>
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-plus label-icon"></i> Compose Message</button>
                                    </div>
                                </div>
                                <div class="card-body">

                                    <table class="table table-striped table-sm font-12 sources-table">
                                        <thead>
                                        <tr class="font-weight-bold text-black">
                                            <th scope="col">No</th>
                                            <th scope="col">Stream({{incomeTypeDescription}})</th>
                                            <th scope="col">Amount (KES)</th>


                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr style="cursor: pointer;" v-for="(item, index) in feesAndCharges" :value="item" :key="index">
                                            <td>{{index+1}}</td>

                                            <td scope="row">{{item.feeDescription}}</td>

                                            <td><b>{{item.unitFeeAmount}}</b></td>
                                        </tr>
                                        <tr style="background: #cee9d8;">
                                            <th><strong>Total {{feesAndCharges.length}}</strong></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        </tbody>
                                    </table>

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

            <!-- bootstrap modal -->
            <div class="modal fade" id="changeStream" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Change Department</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div>
                                        <label class="form-label">Select New Revenue Department</label>
                                        <select class="form-control bg-white" title="Select Revenue Stream" data-live-search="true" @change="handleChange">
                                            <option v-for="(item, index) in departments" :key="`${index}`" :value="item.departmentID">{{item.department}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="message!==null" class="alert alert-danger" role="alert">
                            {{message}}
                        </div>
                        <div class="modal-footer">
                            <button @click="changeDepartment()" type="button" class="btn btn-primary w-100 text-center">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of changing revenue stream modal -->
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
    /* eslint-disable */
    import NavigationBar from "@/components/Navigation";
    import router from "@/router";
    import {biller, execute} from "@/api";



    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return{
                permission:'',
                message:null,
                departmentID:'',
                incomeTypeId:'',
                departments:[],
                incomeTypeDescription:'',
                incomeTypes:[],
                feesAndCharges:[
                    {
                        feeId: "731",
                        feeDescription: "Up to 7 tons",
                        unitOfMeasure: "Per Trip",
                        unitFeeAmount: "1000",
                        accountNo: "",
                        incomeTypeId: "45",
                        feeType: "",
                        accountDesc: "Cess on Building Stones",
                        costCenterNo: "",
                        zone: "ALL SUB COUNTIES",
                        typeDescription: ""
                    }
                ]
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {
            this.feesAndCharges.splice(0)
            this.departments.splice(0)
            this.getDepartment()
            this.getIncomeTypes("")
            this.permission = sessionStorage.getItem("permission")

        },
        methods:{
            gotTo(route){
                router.push(route)
            },
            handleChange(event) {
                this.departmentID = event.target.value;
            },selectStream(incomeTypeId) {
                this.incomeTypeId = incomeTypeId;
            },
            changeDepartment(){
                this.message = null
                if(this.departmentID ===''){
                    this.message ='Select department to change'
                    return
                }
                this.message = null
                const data = new FormData();
                data.append("function", "changeDepartment");
                data.append("departmentID", this.departmentID);
                data.append("incomeTypeId", this.incomeTypeId);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.message =res.data.message
                            //this.departments = res.data.data.departments
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
            getIncomeTypes(departmentID){
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
            getFeesAndCharges(incomeTypeId,incomeTypeDescription){
                this.incomeTypeDescription = incomeTypeDescription
                this.feesAndCharges.splice(0)
                const data = new FormData();
                data.append("function", "getFeesAndCharges");
                data.append("incomeTypeId", incomeTypeId);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.feesAndCharges = res.data.data.feesAndCharges
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            }
        },
    }
</script>

<style scoped>

</style>