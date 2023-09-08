<template>


    <head>

        <meta charset="utf-8" />
        <title>Desk Birdy | Business Permits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Rental management system by Nouveta LTD" name="description" />
        <meta content="Kelvin Njuguna" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.svg">
        <!-- droping file -->
        <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

        <!-- DataTables -->
        <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
              type="text/css" />

        <!-- Bootstrap Css -->
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Bootstrap select styling -->
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
        <!-- Icons Css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->

        <!-- owl.carousel css -->
        <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

        <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">

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
                                <h4 class="mb-sm-0 font-size-18">Live Monotoring</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a href="#">Live Monitoring</a></li>
                                         <li class="breadcrumb-item"><a href="#">All Users</a></li>

                                    </ol>
                                </div>


                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                  <!-- tool bar -->
                    <div class="row">
                        <div class="col-12 active">
                            <div class="card active">
                                <div class="card-body mini-nav bg-primary pt-2 pb-3 active ">
                                    <nav class="navbar navbar-expand-md navbar navbar-dark bg-primary py-2 active">
                                        <button
                                            class="navbar-toggler btn btn-sm px-3 font-size-16 header-item waves-effect h-auto text-primary"
                                            type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                            aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="mdi mdi-menu"></span>
                                        </button>
                                        <div class="collapse navbar-collapse justify-content-between active"
                                            id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <a class="nav-item nav-link" href="live-monitoring.html">All Users</a>
                                                <a class="nav-item nav-link" href="live-monitoring-active.html">Active Users</a>

                                                    <a class="nav-item nav-link" href="live-monitoring-dormant.html">Dormant Users</a>
                                                <a class="nav-item nav-link" href="live-monitoring-out.html">Logged Out Users</a>
                                                <a class="nav-item nav-link" href="live-monitoring-never.html">Never Logged In</a>

                                            </div>


                                        </div>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- end of toolbar -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div
                                    class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center"
                                        role="toolbar">
                                        <h4 class="card-title text-capitalize mb-0 ">
                                            All users
                                        </h4>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center p-3"  role="toolbar">


                                        <label class="text-nowrap mb-0 mx-2">System Roles:</label>
                                        <select class="form-select" title="Select Subcounty">
                                            <option>All Roles</option>
                                            <option>Revenue Collectors</option>
                                            <option>Revenue Inspectors</option>
                                            <option>Revenue Enforcers</option>
                                            <option>Revenue Officers</option>
                                        </select>

                                        <select class="form-select mx-3" title="Select Subcounty ">
                                            <option>All of Sub counties</option>
                                            <option>Homabay Town</option>
                                            <option>Ndhiwa</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive ">

                                        <table class="table align-middle table-hover  contacts-table table-striped "
                                            id="datatable-buttons">
                                            <thead class="table-light">
                                                <tr class="table-dark">
                                                    <th scope="col">#</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th>Status</th>
                                                    <th>Idle Time</th>
                                                    <th scope="col">Log ins</th>
                                                    <th scope="col">Pending Bills</th>
                                                    <th scope="col">Receipted Bills</th>
                                                    <th scope="col">Inspections</th>
                                                    <th scope="col" class="text-right">Value Of Inspections</th>
                                                    <th scope="col" class="text-right">Value Of Collections</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in users" :value="item" :key="index">
                                                    <td class="text-capitalize text-nowrap">{{index+1}}</td>
                                                    <td class="text-capitalize text-nowrap">
                                                        <p class="mb-0">{{item.names}}</p>
                                                        <small>Revenue Collector</small>
                                                    </td>
                                                    <td class="text-capitalize text-nowrap">
                                                        <a href="tel:{{item.phoneNumber}}">{{item.phoneNumber}}</a>
                                                    </td>
                                                    <td>
                                                        <span class="text-uppercase badge badge-soft-success">online</span>
                                                    </td>
                                                    <td>0 Min</td>
                                                   <td>{{item.logins}}</td>
                                                   <td>4</td>
                                                   <td>45</td>
                                                    <td>{{item.inspections}}</td>
                                                    <td class="text-right text-uppercase fw-semibold">KES 0</td>
                                                    <td class="text-right text-uppercase fw-semibold">kes 0</td>
                                                </tr>

                                            </tbody>
                                            <tfoot class="table-dark">
                                                <tr>
                                                    <th  colspan="4">0 Users</th>
                                                    <th>0 Min</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <th class="text-right">KES 0.0</th>
                                                    <th class="text-right">KES 0.0</th>
                                                </tr>

                                            </tfoot>
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

                                    </div>
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
                             ©county
    </div>
    <div class="col-sm-6 ">
        <div class="text-sm-end d-sm-block ">
             County Government
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
    import {authUrl, execute} from "@/api";
    export default {
        name: "LiveMonitoring",
        components: {NavigationBar},
        data(){
            return{
                loading: false,
                // set the initial current page as 1
                currentPage: 1,
                // set the total number of pages as 10 (you can change this according to your data source)
                totalPages: 0,
                // set the number of items per page as 5 (you can change this according to your preference)
                pageSize: 10,

                users:[],
                message:null
            }
        },
        watch: {
            //pagination code
            // define a watcher for the pageSize property
            pageSize(newPageSize) {
                this.getBills("")
                // get the total number of items from your data source (you can change this according to your logic)
                const totalItems = this.summary.count;
                // calculate the new total pages by dividing the total items by the new page size and rounding up
                const newTotalPages = Math.ceil(totalItems / newPageSize);
                // update the totalPages data property with the new value
                this.totalPages = newTotalPages;
                // reset the current page to 1
                this.currentPage = 1;

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
            }
        },
        mounted() {
            this.getUsersBySubCounty()
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
                    this.getBills("")
                }
            },
            // define a method to go to the next page
            nextPage() {
                // check if the current page is not the last page
                if (this.currentPage < this.totalPages) {
                    // increment the current page by 1
                    this.currentPage++;
                    this.getBills("")
                }
            },
            // define a method to go to a specific page
            goToPage(page) {
                // check if the page is valid and not equal to the current page
                if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
                    // set the current page to the given page
                    this.currentPage = page;
                    this.getBills("")
                }
            },

            //number format
            numberFormat(num) {
                const britishNumberFormatter = new Intl.NumberFormat("en-GB");
                return britishNumberFormatter.format(num)
            },
            formatPrice(value) {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'KES',
                    minimumFractionDigits: 2
                });
                return formatter.format(value);
            },
            getUsersBySubCounty(){
                const data = new FormData();
                data.append("function", "getUsersMonitoring");
                data.append("subCountyID", "43246");
                data.append("status", "Inactive");
                data.append("versionCode", "35");
                data.append("page", this.currentPage);
                data.append("rows_per_page", this.pageSize);
                execute(data,authUrl)
                    .then((res) =>{
                        if (res.data.success) {
                            this.users = res.data.data.users
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });

            }

        }
    }
</script>

<style scoped>

</style>