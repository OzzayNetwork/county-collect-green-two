<template>


<head>

    <meta charset="utf-8" />
    <title>Biller | {{logsName}}'s Details</title>
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
                                <h4 class="mb-sm-0 font-size-18">{{logsName}}'s User logs</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')" href="javascript: void(0)">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a @click="gotTo('users')" href="javascript: void(0)">All users</a></li>
                                        <li class="breadcrumb-item"><a  href="javascript: void(0)">{{logsName}}</a></li>
                                        <li class="breadcrumb-item active">User logs</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- tool bar -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body pt-2 pb-3">
                                    <nav class="navbar navbar-expand-md navbar-white bg-white py-2">
                                        <button class="navbar-toggler btn btn-sm px-3 font-size-16 header-item waves-effect h-auto text-primary" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                          <span class="mdi mdi-menu"></span>
                                        </button>
                                        <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <a class="nav-item nav-link active" @click="gotTo('user-logs')"  href="javascript: void(0)">User's Logs</a>
                                                <a class="nav-item nav-link" @click="gotTo('user-collections')" href="javascript: void(0)">Revenue Collections<span class="sr-only">(current)</span></a>
                                               <!-- <a class="nav-item nav-link" href="user-daily.html">Daily Collections</a>-->
                                            </div>
                                         <!--   <div class="navbar-nav">
                                                <a href="collector-new.html" type="button" class="btn btn-primary waves-effect waves-light text-white">
                                                    <i class="bx bx bxs-edit-alt font-size-16 align-middle me-2"></i> Edit Account
                                                </a>
                                            </div>-->

                                        </div>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- end of tool bar -->

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">

                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="bx  bx-trash label-icon"></i> Delete Contact(s)</button>
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-plus label-icon"></i> Compose Message</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <table class="table align-middle table-nowrap table-hover dt-responsive contacts-table" id="datatable-buttons">
                                        <thead class="table-light">
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Details</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in logs" :value="item" :key="index">
                                                <td><span class="fw-semibold">{{getHumanDate(item.date)}}</span></td>
                                                <td>{{item.description}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
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
                           <!-- <script>
                                document.write(new Date().getFullYear())
                            </script> -->© Best Birdy
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
    <div class="rightbar-overlay"></div>

    </body>

</template>

<script>
    /* eslint-disable */
    import NavigationBar from "@/components/Navigation";
    import router from "@/router";
    import {authUrl, execute} from "@/api";
    export default {
        name: "AddUser",
        components: {NavigationBar},
        data() {
            return{
                logsName:'',
                message:null,
                logs:[]
            }
        },
        computed: {

        },
        watch: {

        },

        mounted() {
            this.logsName =  sessionStorage.getItem('logsName')
            this.getLogs()


        },
        methods:{
            gotTo(route){
                router.push(route)
            },
            getHumanDate(dateData){
                //  const res = dateData.split(" ");
                const dateObject = new Date(Date.parse(dateData));
                return dateObject.toDateString();

            },
            getLogs(){
                const data = new FormData();
                data.append("function", "getLogs");
                data.append("idNo", sessionStorage.getItem('idNoUser'));
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.logs = res.data.data.logs
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