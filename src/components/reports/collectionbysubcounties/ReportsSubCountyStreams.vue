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
                                        <li class="breadcrumb-item active">Revenue Streams</li>

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
                                                    <input v-model="search" type="text" class="form-control bg-light border-light rounded" placeholder="Search..." fdprocessedid="husj3l">
                                                    <i class="bx bx-search-alt search-icon"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <div class="d-flex align-items-center me-3 pe-3">
                                                <span class="pr-3 fw-semibold">From:</span>
                                                <input v-model="dateFrom" class="form-control" placeholder="Start date" type="date">
                                                <span class="px-3 fw-semibold">TO:</span>
                                                <input v-model="dateTo"  class="form-control" placeholder="Start date" type="date">
                                            </div>
                                            <button @click="downloadReceiptedByRevenueStreamPaginated()"  data-bs-toggle="modal" data-bs-target=".download-modal" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                                                <i class="bx bxs-download  font-size-16"></i> <span class="pl-1 d-md-inline">Download Report</span>
                                            </button>

                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button"  data-bs-toggle="modal" data-bs-target=".download-modal" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive overflow-visible">

                                        <table class="table align-middle table-hover  contacts-table table-striped " id="">
                                            <thead class="table-light">
                                            <tr class="table-dark">
                                                <th>#</th>
                                                <th scope="col">Stream</th>
                                                <th>Total Transactions</th>
                                                <th scope="col">Collectors</th
                                                ><th scope="col">Inspectors</th>
                                                <th scope="col">Enforcers</th>
                                                <th scope="col" class="text-right">Amount collected</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, index) in revenueStreams" :value="item" :key="index">
                                                <td class="text-capitalize text-nowrap"><strong>{{index+1}}.</strong></td>
                                                <td class="text-capitalize text-nowrap">
                                                    <a @click="gotTo('reports-sub-county-streams-break-down',item.incomeTypeDescription)" href="javascript:void(0)">{{item.incomeTypeDescription}}</a>
                                                </td>
                                                <td class="text-capitalize text-nowrap">{{numberFormat(item.count)}}</td>
                                                <td class="text-capitalize text-nowrap">{{numberFormat(item.collectors)}}</td>
                                                <td class="text-capitalize text-nowrap">{{numberFormat(item.inspectors)}}</td>
                                                <td class="text-capitalize text-nowrap">{{numberFormat(item.enforcers)}}</td>
                                                <td class="text-capitalize text-nowrap text-right">KES {{numberFormat(item.amount)}}</td>
                                                <td>
                                                    <div class="d-flex justify-content-end">
                                                        <a type="button" @click="gotTo('reports-sub-county-streams-break-down',item.incomeTypeDescription)" href="javascript:void(0)" class="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3">View Details</a>
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
                                                   <!-- {{numberFormat(totalTransactions)}}-->
                                                </th>
                                                <th>
                                                    <!--{{numberFormat(totalTransactions)}}-->
                                                </th>
                                                <th><!--{{numberFormat(totalAgents)}}--></th>
                                                <th></th>
                                                <th></th>

                                                <td class="text-nowrap text-right " colspan="">
                                                    <span class="fw-semibold ">KES {{numberFormat(amountTotal)}}</span>
                                                </td>
                                                <TD></TD>


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
                                        <div v-if="revenueStreams.length<1 & loading===false" class="card-body d-sm-none d-md-block px-5 d-flex flex-column justify-items-center align-items-center text-center">
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


            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                            © County Revenue
                        </div>
                        <div class="col-sm-6 ">
                            <div class="text-sm-end d-sm-block ">
                                Developed by County
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
    /* eslint-disable */
    import {biller, execute, executeDownload} from "@/api";
    import NavigationBar from "@/components/Navigation";
    import SubCountyReportsToolBar from "@/components/reports/collectionbysubcounties/SubCountyReportsToolBar";

    export default {
        name: "SubCountyReport",
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
                revenueStreams: [],
            };
        },
        watch: {
            //pagination code
            // define a watcher for the pageSize property
            pageSize(newPageSize) {
                this.getReceiptedByRevenueStreamPaginated()//Todo to change here
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
                this.getReceiptedByRevenueStreamPaginated()
            },

            documentType(){
                if(this.documentType === "pdf"){
                    // this.downloadReport()
                }else if(this.documentType ==="excel"){
                    // this.downloadReport()
                }else {

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
            this.$watch('dateFrom', function (newValue) {
                if (this.dateFrom === '' || this.dateTo === '') {

                } else {
                    this.getReceiptedByRevenueStreamPaginated()
                }

            })
            this.$watch('dateTo', function (newValue) {
                if (this.dateFrom === '' || this.dateTo === '') {

                } else {
                    this.getReceiptedByRevenueStreamPaginated()
                }
            })

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

            this.getReceiptedByRevenueStreamPaginated()
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
                    this.getReceiptedByRevenueStreamPaginated()//Todo change
                }
            },
            // define a method to go to the next page
            nextPage() {
                // check if the current page is not the last page
                if (this.currentPage < this.totalPages) {
                    // increment the current page by 1
                    this.currentPage++;
                    this.getReceiptedByRevenueStreamPaginated()//Todo change
                }
            },
            goToPage(page) {
                // check if the page is valid and not equal to the current page
                if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
                    // set the current page to the given page
                    this.currentPage = page;
                    this.getSubCountiesRevenue()//Todo change
                }
            },
            // pagination end
            gotTo(route,incomeTypeDescription){
                sessionStorage.setItem("currentPage",route)
                sessionStorage.setItem("incomeTypeDescription",incomeTypeDescription)
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

            printBill(billNo) {
                localStorage['params'] = JSON.stringify({
                    billNo: billNo
                })
                const routeData = this.$router.resolve({name: 'bill'});
                window.open(routeData.href, '_blank');
            },
            getReceiptedByRevenueStreamPaginated() {
                this.revenueStreams.splice(0)
                this.loading = true
                const data = new FormData();
                data.append("function", "getReceiptedByRevenueStreamPaginated");
                data.append("page", this.currentPage);
                data.append("rows_per_page", this.pageSize);
                data.append("status", "PAID");
                data.append("dateFrom", this.dateFrom);
                data.append("dateTo", this.dateTo);
                data.append("keyword", this.search)
                data.append("subCountyID", this.subCountyID)
                execute(data, biller)
                    .then((res) => {
                        this.loading = false

                        this.totalAmount = null
                        if (res.data.success) {
                            this.revenueStreams = res.data.data.revenueStreams

                            //todo pagination
                            this.totalItems =  res.data.data.count.count
                            this.totalPages =  Math.ceil(this.totalItems / this.pageSize);


                           /* //Initialize the accumulator to 0
                            this.totalAmount = this.revenueStreams.reduce((acc, cur) => {
                                let amount = Number(cur.amount);
                                return acc + amount;
                            }, 0);
                            this.totalAgents = this.revenueStreams.reduce((acc, cur) => {
                                let agents = Number(cur.agents);
                                return acc + agents;
                            }, 0);
                            this.totalTransactions = this.revenueStreams.reduce((acc, cur) => {
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
            downloadReceiptedByRevenueStreamPaginated(){
                const data = new FormData();
                data.append("function", "downloadReceiptedByRevenueStreamPaginated");
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

</style>