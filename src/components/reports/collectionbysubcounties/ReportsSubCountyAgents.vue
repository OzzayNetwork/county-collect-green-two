<template>
    <head>

    <meta charset="utf-8" />
    <title>Hotline Transporters Sacco | All invoices</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description" />
    <meta content="Kelvin Njuguna" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

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
                                <h4 class="mb-sm-0 font-size-18">Revenue Collections For {{subCountyName}} for the period {{formatDate(dateFrom)}} to {{formatDate(dateTo)}}</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a @click="gotTo('reports-sub-county')" href="javascript: void(0)">Reports</a></li>
                                        <li class="breadcrumb-item"><a @click="gotTo('reports-sub-county')" href="javascript: void(0)">Revenue collection by county</a></li>
                                        <li class="breadcrumb-item" ><a @click="gotTo('reports-sub-counties-details')" href="javascript: void(0)">{{subCountyName.toLocaleLowerCase()}}</a></li>
                                        <li class="breadcrumb-item active">Revenue Team</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- toolbar start -->
                   <SubCountyReportsToolBar/>
                    <!-- toobar end -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                      <div class="flex-grow-1">
                                        <div class="search-box mb-0 me-3">
                                            <div class="position-relative">
                                                <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l">
                                                <i class="bx bx-search-alt search-icon"></i>
                                            </div>
                                        </div>
                                      </div>

                                        <div class="d-flex">
                                            <div class="d-flex align-items-center me-3 pe-3">
                                                <span class="pr-3 fw-semibold">From:</span>
                                                <input v-model="dateFrom" class="form-control" placeholder="Start date" type="date">
                                                <span class="px-3 fw-semibold">TO:</span>
                                                <input v-model="dateTo" class="form-control" placeholder="Start date" type="date">
                                            </div>
                                            <button  @click="downloadAgents()" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                                                <i class="bx bxs-download  font-size-16"></i> <span class="pl-1 d-md-inline">Download Report</span>
                                            </button>

                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button"  class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive overflow-visible">

                                        <table class="table align-middle table-hover  contacts-table table-striped " id="">
                                            <thead class="table-light">
                                                <tr class="table-dark">
                                                    <th>#</th>
                                                    <th scope="col">Name</th>
                                                    <th>Zone(s)</th>
                                                    <th>Ward</th>
                                                    <th>Sub County</th>
                                                    <th>Total Transactions</th>
                                                    <th scope="col" class="text-right">Amount collected</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in agents" :value="item.zone" :key="index">
                                                    <td class="text-capitalize text-nowrap"><strong>{{index+1}}.</strong></td>
                                                    <td class="text-capitalize text-nowrap">
                                                        <a @click="gotToDetail('reports-sub-county-agent-details',item.idNo,item.names)" href="javascript: void(0)">{{capitalizeName(item.names)}}</a>
                                                    </td>
                                                    <td>{{capitalizeName(item.zone)}}</td>
                                                    <td>{{capitalizeName(item.wardName)}}</td>
                                                    <td>{{capitalizeName(item.subCountyName)}}</td>
                                                    <td class="text-capitalize text-nowrap">{{numberFormat(item.count)}}</td>
                                                    <td class="text-capitalize text-nowrap text-right">KES {{numberFormat(item.amount)}}</td>
                                                    <td>
                                                        <div class="d-flex justify-content-end">
                                                            <a type="button" @click="gotToDetail('reports-sub-county-agent-details',item.idNo,item.names)" href="javascript: void(0)" class="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3">View Details</a>
                                                            <div class="dropdown">
                                                                <div class="dropdown-menu dropdown-menu-end ">
                                                                    <a class="dropdown-item " data-bs-toggle="modal" data-bs-target=".receipting-modal" href="# "><i class="font-size-15 mdi mdi-eye me-3 "></i>View</a>
                                                                    <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-printer me-3 "></i>Print</a>
                                                                    <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-email me-3 "></i>Send Email Reminder</a>
                                                                    <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-chat me-3 "></i>Send SMS Reminder</a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot class="table-dark">
                                                <tr>

                                                    <th colspan="2">
                                                       <!-- {{numberFormat(totalAgents)}} Agents-->
                                                    </th>
                                                    <th></th>
                                                    <td></td>
                                                    <td></td>

                                                   <th><!--{{numberFormat(totalTransactions)}}--></th>

                                                    <td class="text-nowrap text-right " colspan="">
                                                        <span class="fw-semibold ">KES {{numberFormat(amountTotal)}}</span>
                                                    </td>
                                                    <td></td>


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
                                        <div v-if="agents.length<1 & loading===false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
                                            <div class="p-5 py-0 pt-3">
                                                <img :src="'./assets/images/no-results.png'" class="img mb-4"  alt="No search results"/>
                                            </div>
                                            <h4>No Results To Show</h4>
                                            <p>Sorry, we could not find any results that match your search or filter criteria. Please try using different keywords or filters.</p>
                                        </div>

                                    </div>

                                </div>

                                <div class="card-footer bg-white">
                                    <nav aria-label="Page navigation example " class="d-flex align-items-center justify-content-between">

                                        <div class="d-flex align-items-center">
                                            <span class="pr-3 pb-0 mb-0 font-13px">
                                                <span>Rows Per Page</span>
                                            </span>
                                            <select class="form-select w-auto font-13px" v-model="pageSize">
                                                <option value="5">5 Rows</option>
                                                <option value="10">10 Rows</option>
                                                <option value="25">25 Rows</option>
                                                <option value="50">50 Rows</option>
                                                <option value="100">100 Rows</option>
                                                <option value="150">150 Rows</option>
                                                <option value="200">200 Rows</option>
                                                <option value="500">500 Rows</option>
                                                <option value="1000">1000 Rows</option>
                                                <option value="10000">10000 Rows</option>
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

            <!-- receipting modal -->
            <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Bill details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <address>
                                        <strong class="text-capitalize">Bill Prepared for:</strong><br>
                                        Kelvin Njuguna AT Mombasa Road<br>
                                        email@mail.com, 0704 549 859<br>
                                        ID No. 12345689. Car Plate No. KAB 123P <br/>
                                        <br>
                                        On 1 Mar 2022, 10:20 AM

                                    </address>
                                </div>
                                <div class="col-sm-6 text-sm-end d-none">
                                    <address class="mt-2 mt-sm-0">
                                        <strong>Payment Method</strong><br>
                                        <span class="fw-medium">MPESA</span><br>
                                        Phone No. 0704 549 859<br> <br>
                                        On 1 Mar 2022, 10:20 AM
                                    </address>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="py-2 mt-3">
                                    <h3 class="font-size-15 fw-bold">ND12368</h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap vertical-align-middle">
                                        <thead class="bg-light">
                                            <tr>
                                                <th style="width: 70px;">No.</th>
                                                <th>Offense</th>
                                                <th class="text-end">Amount</th>

                                            </tr>
                                        </thead>
                                        <tfoot class="bg-light">
                                            <tr>
                                                <td colspan="2" class="border-0 text-end text-right">
                                                    <strong>Total</strong>
                                                </td>
                                                <td class="border-0 text-end">
                                                    <h5 class="m-0 text-uppercase fw-bold">KES 11,250</h5>
                                                </td>

                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                <td>01</td>
                                                <td>
                                                    <p class="the-bill-item mb-0 p-0 m-0">Driving Without identification plates affixed or plates not fixed in the prescribed manner</p>
                                                </td>
                                                <td class="text-end">KES 24,500</td>

                                            </tr>

                                            <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                                <td>02</td>
                                                <td>
                                                    <p class="the-bill-item mb-0 p-0 m-0">Drving a vehicle without a valid inspection certificate inspected</p>

                                                </td>
                                                <td class="text-end">KES 24,500</td>

                                            </tr>




                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-primary waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Bill
                            </button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- end of receipting modal -->

            <!-- invoice details -->
            <div class="modal fade invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Invoice Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="col-12">
                                <address>
                                    <strong>Billed To:</strong><br>
                                    Kelvin Njuguna<br>
                                    email@mail.com, 0704 549 859<br>
                                    Hse No. 410, 90 Degrees By Tsavo
                                    <br><br>
                                    1 Mar 2022, 10:20 AM
                                </address>
                            </div>
                            <div class="col-12">
                                <div class="py-2 mt-3">
                                    <h3 class="font-size-15 fw-bold">Invoice Details ( <span class="text-primary fw-medium">No. 1237</span> )</h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style="width: 70px;">No.</th>
                                                <th>Item</th>
                                                <th class="text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Rent Deposit</td>
                                                <td class="text-end">KES 24,500</td>
                                            </tr>

                                            <tr>
                                                <td>02</td>
                                                <td>Monthly Rent</td>
                                                <td class="text-end">KES 12,000</td>
                                            </tr>

                                            <tr>
                                                <td>03</td>
                                                <td>TAX (18%)</td>
                                                <td class="text-end">KES 250</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="text-end">Total</td>
                                                <td class="text-end fw-bold">KES 36,750</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="text-end">Paid</td>
                                                <td class="text-end  fw-bold">KES 0.00</td>
                                            </tr>

                                            <tr>
                                                <td colspan="2" class="border-0 text-end">
                                                    <strong>Balance</strong></td>
                                                <td class="border-0 text-end">
                                                    <h5 class="m-0 text-uppercase fw-bold">KES 36,750</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="col-12 d-none">
                                <div class="table-resposive p-4 px-2 pt-2 overflow-visible">
                                    <table class="w-100">
                                        <tbody>
                                            <tr data-id="1">
                                                <td>
                                                    <label for="" class="">Payment Method</label>
                                                    <select class="form-control selectpicker w-100 payment-method" data-style="btn-secondary w-100" data-live-search="true" title="Select payment Method">
                                                        <option value="Mpesa">MPESA</option>
                                                        <option value="Cash">CASH</option>
                                                     </select>
                                                </td>
                                                <td class="px-3 ">
                                                    <div class="phone-num d-none">
                                                        <label for="">Phone No.</label>
                                                        <input type="text " class="form-control w-100 d-flex " placeholder="Phone No." spellcheck="false" data-ms-editor="true">
                                                    </div>

                                                </td>
                                                <td class="px-3">
                                                    <label for="">Amount To Be Paid</label>
                                                    <input type="text " class="form-control w-100 d-flex" placeholder="KES" spellcheck="false" data-ms-editor="true">

                                                </td>
                                                <td class="text-right float-right">
                                                    <div class="d-flex flex-column">
                                                        <label class="opacity-0">Something</label>
                                                        <a href="#" class="btn btn-primary w-md waves-effect waves-light">Submit</a>
                                                    </div>
                                                </td>


                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div class="float-end">
                                <a href="javascript:window.print()" class="btn btn-success waves-effect waves-light me-1"><i class="mdi mdi-printer font-16px"></i></a>
                                <a href="javascript: void(0);" class="btn btn-primary w-md waves-effect waves-light">Receive Payment</a>
                            </div>
                        </div>

                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- invoice details -->

            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                             ©County
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
    import SubCountyReportsToolBar from "@/components/reports/collectionbysubcounties/SubCountyReportsToolBar";
    import {biller, execute, executeDownload} from "@/api";
    export default {
        name: "ReportsSubCountyAgents",
        components: {SubCountyReportsToolBar, NavigationBar},
        data() {
            return {
                loading: false,
                // set the initial current page as 1
                currentPage: 1,
                // set the total number of pages as 10 (you can change this according to your data source)
                totalPages: 0,
                // set the number of items per page as 5 (you can change this according to your preference)
                pageSize: 10,
                totalItems:0,
                subCountyName:'',
                subCountyID:'',
                dateRange:'For the period 1st Mar 2023 To 30th Mar 2023',
                dateTo:'',
                dateFrom:'',
                names:'',
                totalAmount:null,
                totalAgents:0,
                totalTransactions:0,
                agents: [],
            };
        },
        watch: {
            //pagination code
            //define a watcher for the pageSize property
            pageSize(newPageSize) {
                this.getAgents()//Todo to change here
                // get the total number of items from your data source (you can change this according to your logic)
                const totalItems = this.totalItems;
                // calculate the new total pages by dividing the total items by the new page size and rounding up
                const newTotalPages = Math.ceil(totalItems / newPageSize);
                // update the totalPages data property with the new value
                this.totalPages = newTotalPages;
                // reset the current page to 1
                this.currentPage = 1;

            },
            search(){
                this.getAgents()
            },
            documentType(){
                if(this.documentType === "pdf"){
                    // this.downloadReport()
                    alert('')
                }else if(this.documentType ==="excel"){
                    // this.downloadReport()
                    alert('')
                }else {
                    alert('')
                }
            }
        },
        computed:{
            //pagination code todo pagination
            // calculate the start index of the items for the current page
            startIndex() {
                return (this.currentPage - 1) * this.pageSize;
            },
            // calculate the end index of the items for the current page
            endIndex() {
                return this.currentPage * this.pageSize;
            },
        },
        mounted() {
            this.subCountyName = sessionStorage.getItem("subCountyName")
            this.subCountyID = sessionStorage.getItem("subCountyID")
            this.dateTo = sessionStorage.getItem("dateTo")
            this.dateFrom = sessionStorage.getItem("dateFrom")
            this.search = this.subCountyName

            //todo to check on the amount from apis
            this.totalTransactions = sessionStorage.getItem("totalTransactions")
            this.amountTotal = sessionStorage.getItem("amountTotal")
            this.totalAgents = sessionStorage.getItem("totalAgents")
            this.totalZones = sessionStorage.getItem("totalZones")

            this.$watch('dateFrom', function () {
                if (this.dateFrom !== '' || this.dateTo !== '') {
                    this.getAgents()
                }

            })
            this.$watch('dateTo', function () {
                if (this.dateFrom !== '' || this.dateTo !== '') {
                    this.getAgents()
                }
            })
            this.getAgents()
        },
        methods: {
            //pagination code todo pagination
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
                    this.getAgents()//Todo change
                }
            },
            // define a method to go to the next page
            nextPage() {
                // check if the current page is not the last page
                if (this.currentPage < this.totalPages) {
                    // increment the current page by 1
                    this.currentPage++;
                    this.getAgents()//Todo change
                }
            },
            goToPage(page) {
                // check if the page is valid and not equal to the current page
                if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
                    // set the current page to the given page
                    this.currentPage = page;
                    this.getAgents()//Todo change
                }
            },
            // pagination end
            gotTo(route){
                sessionStorage.setItem("currentPage",route)
                this.$router.push(route);
            },
            gotToDetail(route,idNo,names){
                sessionStorage.setItem("names",names)
                sessionStorage.setItem("idNo",idNo)
                this.$router.push(route);
            },
            formatDate(date) {
                let d = new Date(date);
                let day = d.getDate();
                let month = d.toLocaleString('en-US', { month: 'short' });
                let year = d.getFullYear();

                let suffix = '';
                if (day % 10 === 1 && day !== 11) {
                    suffix = 'st';
                } else if (day % 10 === 2 && day !== 12) {
                    suffix = 'nd';
                } else if (day % 10 === 3 && day !== 13) {
                    suffix = 'rd';
                } else {
                    suffix = 'th';
                }
                return `${day}${suffix} ${month} ${year}`;
            },
            showDate() {
                const dateObj = new Date();
                const currentDate =
                    dateObj.getDate() +
                    "/" +
                    dateObj.getMonth() +
                    "/" +
                    dateObj.getFullYear();
                return currentDate;
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace(".", ",");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            capitalizeName(name) {
     //split the name into an array of words
                let words = name.split(" ");
    //filter out any empty strings
                words = words.filter(word => word !== "");
    //map each word to a new word with the first letter capitalized and the rest lowercased
                let capitalizedWords = words.map(word => {
                    return word[0].toUpperCase() + word.slice(1).toLowerCase();
                });
     //join the array of words back into a single string
                return capitalizedWords.join(" ");
            },

    printBill(billNo) {
                localStorage['params'] = JSON.stringify({
                    billNo: billNo
                })
                const routeData = this.$router.resolve({name: 'bill'});
                window.open(routeData.href, '_blank');
            },
            getAgents() {
                this.agents.splice(0)
                this.loading = true
                const data = new FormData();
                data.append("function", "getAgents");
                data.append("page", this.currentPage);
                data.append("rows_per_page", this.pageSize);
                data.append("dateFrom", this.dateFrom);
                data.append("dateTo", this.dateTo);
                data.append("keyword", this.search)
                data.append("subCountyID", this.subCountyID)
                execute(data, biller)
                    .then((res) => {
                        this.loading = false

                        this.totalAmount = null
                        if (res.data.success) {
                            this.agents = res.data.data.agents
                            //todo pagination
                            this.totalItems =  res.data.data.count.count
                            this.totalPages =  Math.ceil(this.totalItems / this.pageSize);


                            //Initialize the accumulator to 0
                           /* this.totalAmount = this.agents.reduce((acc, cur) => {
                                let amount = Number(cur.amount);
                                return acc + amount;
                            }, 0);
                            this.totalAgents = this.agents.reduce((acc, cur) => {
                                let agents = Number(cur.agents);
                                return acc + agents;
                            }, 0);
                            this.totalTransactions = this.agents.reduce((acc, cur) => {
                                let count = Number(cur.count);
                                return acc + count;
                            }, 0);*/

                        } else {
                            this.message = res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message = e.message
                    });
            },
            downloadAgents(){
                const data = new FormData();
                data.append("function", "downloadAgents");
                data.append("page", this.currentPage);
                data.append("rows_per_page", this.pageSize);
                data.append("status", "PAID");
                data.append("dateFrom", this.dateFrom);
                data.append("dateTo", this.dateTo);
                data.append("keyword", this.search)
                data.append("subCountyID", this.subCountyID)
                executeDownload(data,biller).then(response => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(response.data);
                    link.download = this.dateFrom+' to '+ this.dateTo+' '+ this.search+" transactions.csv";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            },
            numberFormat(num) {
                const britishNumberFormatter = new Intl.NumberFormat("en-GB");
                return britishNumberFormatter.format(num)
            }
        }
    }
</script>
<style scoped>
    .capitalize {
        text-transform: capitalize;
    }
</style>
