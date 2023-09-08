<template>

<head>

    <meta charset="utf-8" />
    <title>NTSA | Users </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="./assets/images/favicon.svg">

    <!-- DataTables -->
    <link href="./assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="./assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css -->
    <link href="./assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="./assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="./assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="./assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />


</head>

<body data-sidebar="dark">

    <!-- Loader -->

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
                                <h4 class="mb-sm-0 font-size-18">Users register</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a></li>
                                        <li class="breadcrumb-item active">User's Register</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- eTransactions table -->

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">
                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <h4 class="mb-0">Registered Users</h4>
                                        <div v-if="permission==='WRITE'" class="d-flex">
                                            <a @click="gotTo('add-users')" type="button" class="btn btn-primary dropdown-toggle option-selector" data-bs-toggle="offcanvas" data-bs-target="#dt__filter" aria-controls="offcanvasRight">
                                                <i class="mdi mdi-account-multiple-plus-outline  font-size-16"></i> <span class="pl-1 d-md-inline">Add User(s)</span>
                                            </a>
                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">

                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="bx  bx-trash label-icon"></i> Delete Contact(s)</button>
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-plus label-icon"></i> Compose Message</button>
                                    </div>
                                </div>
                                <div class="card-header bg-white w-100 border-bottom d-flex">

                                    <div class="mr-15px">

                                        <select class="form-select form-control bg-white mr-15px" title="Select System User Type" data-live-search="true" data-style="" v-model="selectedItem">
                                             <option selected value="All users (100)">All users ({{users.length}})</option>
                                            <option  v-for="(item, index) in categories" :value="item.category" :key="index">{{item.category}}(<b>{{item.count}}</b>)</option>
                                        </select>

                                    </div>

                                  <div class="flex-grow-1">
                                    <div class="search-box mb-0 me-2 flex-grow-1">
                                        <div class="position-relative">
                                            <input v-model="search" type="text" class="form-control bg-light border-light rounded" placeholder="Search User">
                                            <i class="bx bx-search-alt search-icon"></i>
                                        </div>
                                    </div>
                                   </div>


                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-hover contacts-table table-striped" id="">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Sub County</th>
                                                    <th scope="col">Ward</th>
                                                    <th scope="col">Zone</th>
                                                    <th scope="col">Last Seen</th>
                                                    <th scope="col">Last Seen Address</th>
                                                    <th scope="col">Status</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in users" :value="item" :key="index">
                                                    <td>
                                                        <a  @click="logs(item.idNo,item.names)" title="click to vie user logs and activities">
                                                            <div class=" d-flex align-items-center ">
                                                                <div class="avatar-xs mr-15px ">
                                                                    <span class="avatar-title rounded-circle ">
                                                                        {{item.names[0]}}
                                                                        </span>
                                                                </div>
                                                                <div>
                                                                    <h5 class="font-size-14 mb-1 "><a href="javascript: void(0); " class="text-dark text-capitalize">{{item.names}}</a></h5>
                                                                    <p class="text-muted mb-0 ">{{item.category}}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex justify-conten flex-column">
                                                            <p class="text-muted mb-0">
                                                                <a href="tell:{{item.subCountyName}}">  {{item.phoneNumber}}</a>
                                                            </p>
                                                            <p class="mb-0">
                                                                <a href="mailto:sharonwanjiku34@gmail.com">{{item.email}}</a>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td class="text-capitalize">
                                                        {{item.subCountyName}}
                                                    </td>
                                                    <td class="text-capitalize">
                                                        {{item.wardName}}
                                                    </td>
                                                    <td class="text-capitalize">
                                                        {{item.zone}}

                                                    </td>
                                                    <td class="text-capitalize">
                                                        {{getHumanDate(item.lastSeen)}}

                                                     </td>
                                                    <td>
                                                       <small>
                                                            {{item.address}}
                                                       </small>
                                                    </td>
                                                    <td>
                                                        <span  @click="selectUser(item)" v-if="item.status==='Active'" style="cursor: pointer;" class="badge badge-soft-success text-uppercase" data-bs-toggle="modal" data-bs-target=".disable-user-modal">{{item.status}}</span>
                                                        <span @click="selectUser(item)" v-if="item.status !=='Active'" style="cursor: pointer;" class="badge badge-soft-danger text-uppercase" data-bs-toggle="modal" data-bs-target=".disable-user-modal">{{item.status}}</span>
                                                    </td>
                                                    <td>

                                                        <button @click="selectUser(item)" class="btn btn-danger btn-sm mx-3" data-bs-toggle="modal" data-bs-target=".reset-password-modal">
                                                            <i class="bx bx-edit-alt"></i>Reset Password
                                                        </button>

                                                        <button @click="selectUser(item)" class="btn btn-success btn-sm mx-3" data-bs-toggle="modal" data-bs-target=".edit-user-modal">
                                                            <i class="bx bx-edit-alt"></i> Edit Details
                                                        </button>


                                                        <a  @click="logs(item.idNo,item.names)" class="btn btn-sm btn-primary" title="Click to view user logs">
                                                            <i class="mdi mdi-account-details"></i> User Logs
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div v-if="loading" class="card-body px-5 d-flex flex-column justify-items-center align-items-center text-center d-flex justify-content-center">
                                            <div class="p-5 py-0 pt-3">
                                                <div class="p-5">
                                                    <div class="spinner-border text-info m-1" role="status">
                                                        <span class="sr-only text-uppercase">Loading...</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="text-uppercase">Loading Data</h4>
                                            <div class="col-sm-12 col-md-8 col-lg-5">
                                                <p>We are fetching the data for you. It will be ready soon. Please wait and have fun. Thank you for your interest.</p>

                                            </div>
                                        </div>
                                        <div v-if="users.length<1 & loading===false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
                                            <div class="p-5 py-0 pt-3">
                                                <img :src="'./assets/images/no-results.png'" class="img mb-4"  alt="No search results"/>
                                            </div>
                                            <h4>No Results To Show</h4>
                                            <p>Sorry, we could not find any results that match your search or filter criteria. Please try using different keywords or filters.</p>
                                        </div>

                                        <div class="card-footer bg-white">
                                            <nav aria-label="Page navigation example "
                                                 class="d-flex align-items-center justify-content-between">

                                                <div class="d-flex align-items-center">
                                            <span class="pr-3 pb-0 mb-0 font-13px">
                                                <span>Rows Per Page</span>
                                            </span>
                                                    <select class="form-select w-auto font-13px " v-model="pageSize">
                                                        <option value="10">10 Rows</option>
                                                        <option value="25">25 Rows</option>
                                                        <option value="50">50 Rows</option>
                                                        <option value="100">100 Rows</option>
                                                        <option value="150">150 Rows</option>
                                                        <option value="200">200 Rows</option>
                                                    </select>
                                                </div>

                                                <ul class="pagination">
                                                    <!-- add a class of disabled and an attribute of disabled when the current page is the first page -->
                                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                                        <a class="page-link" tabindex="-1" @click="prevPage" :disabled="currentPage === 1">Previous</a>
                                                    </li>
                                                    <!-- replace the v-for directive with the pagination function call -->
                                                    <li v-for="page in pagination(currentPage, totalPages, 3)" :key="page" class="page-item" :class="{ active: currentPage === page }">
                                                        <!-- check if the page is an ellipsis and display it as plain text -->
                                                        <span v-if="page === '...'" class="page-link">{{ page }}</span>
                                                        <!-- otherwise, display it as a clickable link -->
                                                        <a v-else class="page-link" @click="goToPage(page)">{{ page }}</a>
                                                    </li>
                                                    <!-- add a class of disabled and an attribute of disabled when the current page is the last page -->
                                                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                                        <a class="page-link"  @click="nextPage" :disabled="currentPage === totalPages">Next</a>
                                                    </li>
                                                </ul>


                                            </nav>
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

            <!-- Transaction Modal -->
            <div class="modal fade transaction-detailModal " tabindex="-1 " role="dialog " aria-labelledby="transaction-detailModalLabel " aria-hidden="true ">
                <div class="modal-dialog modal-dialog-centered " role="document ">
                    <div class="modal-content ">
                        <div class="modal-header ">
                            <h5 class="modal-title " id="transaction-detailModalLabel ">Transactions Details</h5>
                            <button type="button " class="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
                        </div>
                        <div class="modal-body ">


                            <div class="table-responsive mt-4 ">
                                <table class="table align-middle table-nowrap ">
                                    <tbody>
                                        <tr>
                                            <td style="width: 30% ">
                                                <p class="mb-0 ">Car Plate Number</p>
                                            </td>
                                            <td style="width: 25% ">
                                                <h5 class="mb-0 text-uppercase ">UAG 1235p</h5>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mb-0 ">Vehicle Category</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0 ">Salon Car</h5>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mb-0 ">Payment Date</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0 ">22 Apr 2022 06:54PM</h5>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mb-0 ">San Diego</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0 ">1,026</h5>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td colspan="2 ">
                                                <p class="mb-0 pb-0 ">Amount Paid</p>
                                                <h3>UGX 2,000</h3>
                                            </td>
                                        </tr>
                                        <TR>
                                            <td col-span="2 ">
                                                <p class="mb-2 ">Attended By<span class="text-primary "> Alex Sebeye</span></p>
                                                <p class="mb-4 ">Toll taker's No. <span class="text-primary ">0704549859</span></p>
                                            </td>
                                        </TR>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <button type="button " class="btn btn-secondary " data-bs-dismiss="modal ">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end modal -->

            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                          <!--  <script>
                                document.write(new Date().getFullYear())
                            </script>--> © Best Birdy
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

        <!-- editing user details modals start here -->
        <div class="modal fade edit-user-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="myLargeModalLabel">Editing User Details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="">Full Names</label>
                                            <input v-model="names" type="text" class="form-control" placeholder="Enter The Full Names">
                                        </div>
                                    </div>



                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="">ID Number</label>
                                            <input v-model="idNo" type="text" class="form-control" placeholder="Enter ID No.">
                                        </div>
                                    </div>

                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label for="" class="mb-0 pb-0">User Role/Designation</label>
                                           <p> <small>Select The role that this user is expected to undertake while using the system</small></p>
                                            <select class="form-select"  v-model="selectedCategory">
                                                <option v-for="(item, index) in categories" :key="`${index}`"><a class="dropdown-item" href="#">{{item.category}}</a></option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="">Phone Number</label>
                                            <input v-model="phoneNumber" type="text" class="form-control" placeholder="Enter Phone Number">
                                        </div>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="">Email Address</label>
                                            <input v-model="email" type="email" class="form-control" placeholder="email@email,com">
                                        </div>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="" class="mb-0 pb-0">SubCounty</label>
                                           <p> <small>Select the sub county</small></p>

                                            <select class="form-select" id="country"  @change="getWards(subCounty.subCountyID)"  v-model="subCounty">
                                                <option v-for="(item, index) in subCounties" :key="`${index}`" :value="item"><a class="dropdown-item" href="#">{{item.subCountyName}}</a></option>
                                            </select>

                                        </div>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <div class="form-group">
                                            <label for="" class="mb-0 pb-0">Ward</label>
                                           <p> <small>Select the ward</small></p>
                                            <select class="form-select" v-model="ward">
                                                <option :key="`${index}`" :value="item" v-for="(item, index) in wards"><a
                                                        class="dropdown-item" href="#">{{item.wardName}}</a></option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-3">
                                        <div class="form-group">
                                            <label for="" class="mb-0 pb-0">Zone(5)</label>
                                           <p> <small>Select the zone(s) the user has been assigned to. To select multiple zones hold {{zone}} <strong class="fw-semibold">CTRL</strong> and select the zones.</small></p>
                                            <select class="form-select"  v-model="zone" multiple>
                                                <option v-for="(item, index) in zones" :key="`${index}`"><a class="dropdown-item" href="#">{{item.zone}}</a></option>
                                                Fill all the places
                                            </select>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="modal-footer">
                               <button @click="updateUser()"  data-bs-dismiss="modal" class="btn btn-primary w-100" title="Click to save">SAVE</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
        <!-- editing user details modals start here -->

        <!-- Reset Password -->
        <div class="modal fade reset-password-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myLargeModalLabel">Reset Password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">


                            <div class="col-12 mb-3">
                                <div class="form-group">
                                    <label for="" class="mb-0 pb-0">{{names}}</label>
                                    <p> <small>The new password will be sent to <b>{{names.split(" ")[0].toUpperCase()[0]+''+ names.split(" ")[0].slice(1).toLowerCase()}}'s</b> phone number <b>+{{phoneNumber}}</b></small></p>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="resetPassword()"  data-bs-dismiss="modal" class="btn btn-danger w-100" title="Click to save">Reset</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- Reset Password -->

        <!--Disable User-->
        <div class="modal fade disable-user-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="selectedUser.status==='Active'" class="modal-title">Disable {{names.split(" ")[0]}}</h5>
                        <h5 v-if="selectedUser.status!=='Active'" class="modal-title">Activate {{names.split(" ")[0]}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">


                            <div class="col-12 mb-3">
                                <div class="form-group">
                                    <label for="" class="mb-0 pb-0">{{names}}</label>
                                    <p  v-if="selectedUser.status==='Active'"> <small><b>{{names.split(" ")[0].toUpperCase()[0]+''+ names.split(" ")[0].slice(1).toLowerCase()}}'s</b> account will be disabled and he/she will not be able to login</small></p>
                                    <p v-if="selectedUser.status!=='Active'"> <small><b>{{names.split(" ")[0].toUpperCase()[0]+''+ names.split(" ")[0].slice(1).toLowerCase()}}'s</b> account will be activated and he/she will be able to login</small></p>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div class="modal-footer">
                        <button v-if="selectedUser.status==='Active'" @click="disable('Disabled')"  data-bs-dismiss="modal" class="btn btn-danger w-100" title="Click to save">Disable</button>
                        <button v-if="selectedUser.status!=='Active'" @click="disable('Active')"  data-bs-dismiss="modal" class="btn btn-success w-100" title="Click to save">Activate</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- Disable User -->


    </div>
    <!-- END layout-wrapper -->



    <!-- Right bar overlay-->
    <div class="rightbar-overlay "></div>


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
                permission:'',
                loading: false,
                // set the initial current page as 1
                currentPage: 1,
                // set the total number of pages as 10 (you can change this according to your data source)
                totalPages: 0,
                // set the number of items per page as 5 (you can change this according to your preference)
                pageSize: 10,
                summary: {
                    count: 0
                },
                selectedUser:{
                    id:null,
                    names:null,
                    idNo:null,
                    category:null,
                    phoneNumber:null,
                    email:null,
                    zone:null,
                    subCountyID:null,
                    subCountyName:null,
                    wardID:null,
                    wardName:null,
                    status:null,
                },
                search:"",
                selectedItem: "All users (100)",// The default value
                idNo:"",
                message:null,
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
                wards:[],
                users:[
                    {
                        id: "",
                        names: "",
                        gender: "",
                        email: "",
                        phoneNumber: "",
                        idNo: "",
                        password: "",
                        roles: "",
                        dateCreated: "",
                        zone: "",
                        subCountyID: "",
                        subCountyName: "",
                        lat: "",
                        lng: "",
                        lastSeen:"",
                        address:"",
                        status:""
                    }
                ],
                //

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
                email:'',
                categories:[{
                    id: "",
                    category: ""
                }],
                selectedCategory:'',
                selectedRoles:[],
                zones: [],
                roles: [],
                zone:[],
                subCounties:[],

            }
        },
        computed: {
            //pagination code
            // calculate the start index of the items for the current page
            startIndex() {
                return (this.currentPage - 1) * this.pageSize;
            },
            // calculate the end index of the items for the current page
            endIndex() {
                return this.currentPage * this.pageSize;
            },

        },
        watch: {
            //pagination code
            // define a watcher for the pageSize property
            pageSize(newPageSize) {
                this.getUsers("")//todo change
                // get the total number of items from your data source (you can change this according to your logic)
                const totalItems = this.summary.count;
                // calculate the new total pages by dividing the total items by the new page size and rounding up
                const newTotalPages = Math.ceil(totalItems / newPageSize);
                // update the totalPages data property with the new value
                this.totalPages = newTotalPages;
                // reset the current page to 1
                this.currentPage = 1;

            },
            selectedItem: {
                handler() {
                    this.getUsers(this.selectedItem);
                }
            },
            search: {
                handler() {

                    this.getUsers("");
                }
            }
        }
       ,

        mounted() {
            this.permission = sessionStorage.getItem("permission")
            this.getUsers("")

        },
        methods:{
            //pagination code
            pagination(currentPage, totalPages, maxVisibleButtons) {
                //initialize an empty array for the pages
                let pages = [];
                //calculate the start and end indices of the visible buttons
                let start = currentPage - Math.floor(maxVisibleButtons / 2);
                let end = currentPage + Math.floor(maxVisibleButtons / 2);
                //adjust the start and end indices if they are out of bounds
                if (start < 1) {
                    start = 1;
                    end = start + maxVisibleButtons - 1;
                    if (end > totalPages) {
                        end = totalPages;
                    }
                }
                if (end > totalPages) {
                    end = totalPages;
                    start = end - maxVisibleButtons + 1;
                    if (start < 1) {
                        start = 1;
                    }
                }
                //loop through the start and end indices and push the pages to the array
                for (let i = start; i <= end; i++) {
                    pages.push(i);
                }
                //add an ellipsis at the beginning if there are more pages before the start index
                if (start > 1) {
                    pages.unshift("...");
                }
                //add an ellipsis at the end if there are more pages after the end index
                if (end < totalPages) {
                    pages.push("...");
                }
// return the array of pages
                return pages;
            },
            // define a method to go to the previous page
            prevPage() {
                // check if the current page is not the first page
                if (this.currentPage > 1) {
                    // decrement the current page by 1
                    this.currentPage--;
                    this.getUsers("")
                }
            },
            // define a method to go to the next page
            nextPage() {
                // check if the current page is not the last page
                if (this.currentPage < this.totalPages) {
                    // increment the current page by 1
                    this.currentPage++;
                    this.getUsers("")
                }
            },
            // define a method to go to a specific page
            goToPage(page) {
                // check if the page is valid and not equal to the current page
                if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
                    // set the current page to the given page
                    this.currentPage = page;
                    this.getUsers("")
                }
            },
            selectUser(item){
                this.selectedUser = item
                this.names = this.selectedUser.names
                this.idNo = this.selectedUser.idNo
                this.phoneNumber = this.selectedUser.phoneNumber
                this.email = this.selectedUser.email
                this.getSubCounties()
                this.getWards(this.selectedUser.subCountyID)
                this.getCategories()
            },
            getHumanDate(dateData){
                //  const res = dateData.split(" ");
                const dateObject = new Date(Date.parse(dateData));
                return dateObject.toDateString();

            },
            logs(idNoUser,logsName){
                sessionStorage.setItem("idNoUser",idNoUser)
                sessionStorage.setItem("logsName",logsName)
                this.gotTo('user-logs')
            },
            gotTo(route){

                router.push(route)
            },
            getUsers(category){
                this.loading = true
                this.users.splice(0)
                const data = new FormData();
                data.append("function", "getUsersPaginated");
                data.append("page", this.currentPage);
                data.append("rows_per_page", this.pageSize);
                data.append("category", category);
                data.append("search", this.search);
                execute(data,authUrl)
                    .then((res) =>{
                        this.loading = false
                        if (res.data.success) {
                            this.users = res.data.data.users
                            if(res.data.data.summary!=null){
                                this.summary = res.data.data.summary
                                this.totalPages =  Math.ceil(this.summary.count / this.pageSize);
                            }

                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },

            getWards(subCountyID){
                const data = new FormData();
                data.append("function", "getWards");
                data.append("subCountyID",subCountyID);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.wards = res.data.data.wards

                            this.wards.forEach((value, index) => {
                                if (this.selectedUser.wardID === value.wardID) {
                                    this.ward = this.wards[index];
                                }
                            });

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

                            //preselection
                            this.subCounties.forEach((value, index) => {
                                if (this.selectedUser.subCountyID === value.subCountyID) {
                                    this.subCounty = this.subCounties[index];
                                }
                            });

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

                            //preselection
                            this.categories.forEach((value, index) => {
                                if (this.selectedUser.category === value.category) {
                                    this.selectedCategory = this.categories[index].category;
                                }
                            });
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
                this.zone.splice(0)
                const data = new FormData();
                data.append("function", "getZones");
                data.append("subCountyID", subCountyID);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.zones = res.data.data.zones


                            this.zones.forEach((value, index) => {
                                if (this.selectedUser.zone.includes(value.zone)) {
                                    this.zone.push(this.zones[index].zone)

                                }
                            });

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
            updateUser(){
                this.message = null
                if(
                    this.names === '' ||
                    this.phoneNumber === '' ||
                    this.idNo === '' ||
                    this.selectedCategory === '' ||
                    this.zone.length<0){
                    this.message ="Fill all the places"
                    return
                }
                const data = new FormData();
                data.append("function", "updateUser");
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
                data.append("id", this.selectedUser.id);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.search = this.names
                            this.getUsers("")
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            resetPassword(){
                this.message = null
                if(
                    this.names === '' ||
                    this.phoneNumber === '' ||
                    this.idNo === '' ||
                    this.selectedCategory === '' ||
                    this.zone.length<0){
                    this.message ="Fill all the places"
                    return
                }
                const data = new FormData();
                data.append("function", "resetPassword");
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
                data.append("id", this.selectedUser.id);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.search = this.names
                            this.getUsers("")
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            disable(status){
                this.message = null
                if(
                    this.names === '' ||
                    this.phoneNumber === '' ||
                    this.idNo === '' ||
                    this.selectedCategory === '' ||
                    this.zone.length<0){
                    this.message ="Fill all the places"
                    return
                }
                const data = new FormData();
                data.append("function", "disable");
                data.append("status", status);
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
                data.append("id", this.selectedUser.id);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.search = this.names
                            this.getUsers("")
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