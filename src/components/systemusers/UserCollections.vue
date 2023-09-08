<template>

<head>

    <meta charset="utf-8" />
    <title>NTSA | {{logsName}}'s Details</title>
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
                                <h4 class="mb-sm-0 font-size-18">Revenue Collections By {{logsName}}</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">


                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')" href="javascript: void(0)">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a @click="gotTo('users')" href="javascript: void(0)">All users</a></li>
                                        <li class="breadcrumb-item"><a>{{logsName}}</a></li>
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
                                                <a class="nav-item nav-link" @click="gotTo('user-logs')"  href="javascript: void(0)">User's Logs</a>
                                                <a class="nav-item nav-link active" @click="gotTo('user-collections')" href="javascript: void(0)">Revenue Collections<span class="sr-only">(current)</span></a>
                                              <!--  <a class="nav-item nav-link" href="user-daily.html">Daily Collections</a>-->
                                            </div>
                                          <!--  <div class="navbar-nav">
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

                                <div class="card-header bg-white w-100 border-bottom d-flex">
                                    <div class="mr-15px">
                                        <select v-model="stream" class="form-select form-control bg-white mr-15px" title="Select System User Type" data-live-search="true" data-style="">
                                            <option selected value="">All Revenue Streams</option>
                                            <option v-for="(item, index) in streams" :value="item.stream" :key="index">{{item.stream}}</option>
                                      </select>
                                    </div>

                                  <div class="flex-grow-1">
                                    <div class="search-box mb-0 me-2 flex-grow-1">
                                        <div class="position-relative">
                                            <input v-model="search" type="text" class="form-control bg-light border-light rounded" placeholder="Search ...">
                                            <i class="bx bx-search-alt search-icon"></i>
                                        </div>
                                    </div>
                                   </div>


                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-hover  contacts-table" id="">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th>Paid By</th>
                                                    <th>Transaction Code</th>
                                                    <th>Revenue Stream</th>
                                                    <th>Payment Mode</th>
                                                    <th>Payment Status</th>
                                                    <th>Paid At</th>
                                                    <th scope="col" class="text-right">Transaction Amount</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in receiptDetails" :value="item" :key="index">
                                                    <td scope="col">{{getHumanDate(item.dateCreated)}}</td>
                                                    <td>
                                                        <h5 class="font-size-14 mb-1 "><a href="javascript: void(0); " class="text-dark text-capitalize">{{item.paidBy}}</a></h5>
                                                      <!--  <p class="text-muted mb-0 ">0704*****9</p>-->
                                                    </td>
                                                    <td>{{item.transactionCode}}</td>
                                                    <td>{{item.incomeTypeDescription}}</td>
                                                    <td>{{item.source}}</td>
                                                    <td>
                                                        <span v-if="item.status=='PAID'" class="badge badge-soft-success text-uppercase">{{item.status}}</span>
                                                        <span v-if="item.status=='UNPAID'" class="badge badge-soft-danger text-uppercase">{{item.status}}</span></td>
                                                    <td><small>{{item.subCountyName}}  {{item.wardName}}  {{item.zone}} </small></td>
                                                    <td scope="col" class="text-right">
                                                        <strong class="fw-semibold text-black">{{item.currency}} {{item.receiptAmount}} </strong>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
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
                            <!--<script>
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
    import {biller, execute} from "@/api";
    export default {
        name: "BillsReceipted",
        components: {NavigationBar},
        data() {
            return{
                keyword:'',
                stream:'',
                logsName:'',
                search:'',
                monthNames: ['','January','February','March','April','May','June','July','August','September','October','November','December'],
                monthName:'',
                month:'',
                receiptNo:'',
                streams:[],
                receiptDetail:{
                    id: "151",
                    receiptNo: "BLL2023041621063411",
                    billNo: "BLL0416090620",
                    detailAmount: "20",
                    receiptAmount: "20",
                    billBalance: "0",
                    costCenterNo: "",
                    accountNo: ",",
                    incomeTypeDescription: "Market Fees,",
                    feeID: "274,",
                    wardID: "472761372",
                    subCountyID: "47276",
                    currency: "KES",
                    source: "CASH",
                    transactionCode: "BLL0416090620",
                    paidBy: "#",
                    dateCreated: "2023-04-16 09:06:34",
                    dateModified: "2023-04-16 09:06:34",
                    createdBy: "1",
                    modifiedBy: "#",
                    isActive: "1",
                    statu: "PAID"
                },
                receiptDetails:[],
                receiptInfos:[]
            }
        },
        computed:{
            totalReceiptAmount() {
                return this.formatPrice(this.receiptDetails.reduce((sum, billDetail) => sum + parseInt(billDetail.receiptAmount), 0));
            }
        },
        mounted() {
            this.logsName =  sessionStorage.getItem('logsName')
            const d = new Date();
            this.month =d.getMonth();
            this.monthName = this.getCurrentMonth()+" "+ this.getCurrentYear()

            this.getReceipts()
            this.$watch('search', function(newValue) {
                this.keyword = newValue
                this.getReceipts()
            })
            this.$watch('stream', function(newValue) {
                this.keyword = newValue
                this.getReceipts()
            })
        },
        methods: {
            getHumanDate(dateData){
                //  const res = dateData.split(" ");
                const dateObject = new Date(Date.parse(dateData));
                return dateObject.toDateString();

            },
            getCurrentMonth(){
                const d = new Date();
                const monthName = this.monthNames[d.getMonth()];
                console.log(monthName);
                return monthName;
            },
            getMonthName(){
                const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                const d = new Date();
                const monthName = monthNames[d.getMonth()];
                console.log(monthName);
                return monthName;
            },
            getCurrentYear(){
                const date = new Date();
                const currentYear = date.getFullYear();
                console.log(currentYear); // Output: 2023
                return currentYear;

            },
            formatPrice(value) {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'KES',
                    minimumFractionDigits: 2
                });
                return formatter.format(value);
            },
            gotTo(route){
                router.push(route)
            },
            getReceipts(){
                this.receiptDetails = []
                const data = new FormData();
                data.append("function", "getReceipts");
                data.append("keyword", this.keyword);
                data.append("idNo", sessionStorage.getItem('idNoUser'));
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.receiptDetails = res.data.data.receiptDetails
                            this.streams = res.data.data.streams
                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getReceipt(receiptNo){
                this.receiptNo = receiptNo
                const data = new FormData();
                data.append("function", "getReceipt");
                data.append("receiptNo", receiptNo);
                execute(data,biller)
                    .then((res) =>{
                        this.streams.splice(0)
                        if (res.data.success) {
                            this.receiptInfos = res.data.data.receiptInfos
                            this.receiptDetail = res.data.data.receiptDetails

                        }else{
                            this.message =res.data.message
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            printBill(){
                localStorage['params'] = JSON.stringify({
                    billNo: this.billDetail.billNo
                })
                const routeData = this.$router.resolve({name: 'bill'});
                window.open(routeData.href, '_blank');
            },
            printReceipt() {
                if (this.receiptDetail.receiptNo == null) {
                    alert("Try again later");
                } else {
                    //  this.$refs.closeReceived.click();
                    localStorage['params'] = JSON.stringify({
                        receiptNo: this.receiptDetail.receiptNo
                    })
                    const routeData = this.$router.resolve({name: 'receipt'});
                    window.open(routeData.href, '_blank');
                }
            },
        }
    }
</script>

<style scoped>

</style>