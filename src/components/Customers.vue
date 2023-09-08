<template>
    <div>
        <head>

            <meta charset="utf-8" />
            <title>Biller Keep Our Roads safe</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta content="Rental management system by Nouveta LTD" name="description" />
            <meta content="Kelvin Njuguna" name="author" />
            <!-- App favicon -->
            <link rel="shortcut icon" href="assets/images/favicon.png">
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
        <NavigationBar/>
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Receipts</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a @click="gotTo('dashboard')">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a href="#">Receipts</a></li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <div class="row">
                        <div class="col-3">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <h4 class="card-title text-capitalize mb-0 ">
                                            All receipts for {{monthName}}
                                        </h4>

                                        <div class="d-flex">
                                            <select @change="getReceipts($event)" v-model="month" class="form-control selectpicker w-auto  show-tick" data-style="btn btn-primary waves-light waves-effect month-picker" data-live-search="true" title="Select A month">
                                                <!--  <option value="" selected>Mar 2022</option>-->
                                                <option value="1" selected>Jan {{getCurrentYear()}}</option>
                                                <option value="2">Feb {{getCurrentYear()}}</option>
                                                <option value="3">Mar {{getCurrentYear()}}</option>
                                                <option value="4">Apr {{getCurrentYear()}}</option>
                                                <option value="5">May {{getCurrentYear()}}</option>
                                                <option value="6">Jun {{getCurrentYear()}}</option>
                                                <option value="7">Jul {{getCurrentYear()}}</option>
                                                <option value="8">Aug {{getCurrentYear()}}</option>
                                                <option value="9">Sep {{getCurrentYear()}}</option>
                                                <option value="10">Oct {{getCurrentYear()}}</option>
                                                <option value="11">Nov {{getCurrentYear()}}</option>
                                                <option value="12">Dec {{getCurrentYear()}}</option>
                                            </select>

                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form class="app-search d-none d-lg-block">
                                        <div class="position-relative">
                                            <input v-model="searchValue" class="form-control" placeholder="Search..." type="text">
                                            <span class="bx bx-search-alt"></span>
                                        </div>
                                    </form>

                                    <div class="table-responsive overflow-visible">

                                        <table class="table align-middle table-hover  contacts-table table-striped " id="datatable-buttons">
                                            <thead class="table-light">
                                            <tr class="table-dark">
                                                <th scope="col">Customers({{customers.length}})</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, index) in customers" :value="item" :key="index">

                                                <td style="cursor: pointer;" class="text-capitalize text-nowrap" @click="getCustomersHistory(item.account_from)">
                                                    {{index+1}}.  {{item.account_from}} #<b>{{item.names}}</b> ({{item.count}})
                                                </td>

                                            </tr>
                                            </tbody>
                                            <tfoot class="table-dark">
                                            <tr>
                                                <th class="text-capitalize text-nowrap" colspan="2">{{customers.length}}</th>

                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <h4 class="card-title text-capitalize mb-0 ">
                                            All receipts for {{monthName}}
                                        </h4>

                                        <div class="d-flex">
                                            <select @change="getReceipts($event)" v-model="month" class="form-control selectpicker w-auto  show-tick" data-style="btn btn-primary waves-light waves-effect month-picker" data-live-search="true" title="Select A month">
                                                <!--  <option value="" selected>Mar 2022</option>-->
                                                <option value="1" selected>Jan {{getCurrentYear()}}</option>
                                                <option value="2">Feb {{getCurrentYear()}}</option>
                                                <option value="3">Mar {{getCurrentYear()}}</option>
                                                <option value="4">Apr {{getCurrentYear()}}</option>
                                                <option value="5">May {{getCurrentYear()}}</option>
                                                <option value="6">Jun {{getCurrentYear()}}</option>
                                                <option value="7">Jul {{getCurrentYear()}}</option>
                                                <option value="8">Aug {{getCurrentYear()}}</option>
                                                <option value="9">Sep {{getCurrentYear()}}</option>
                                                <option value="10">Oct {{getCurrentYear()}}</option>
                                                <option value="11">Nov {{getCurrentYear()}}</option>
                                                <option value="12">Dec {{getCurrentYear()}}</option>
                                            </select>

                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive overflow-visible">

                                        <table class="table align-middle table-hover  contacts-table table-striped">
                                            <thead class="table-light">
                                            <tr class="table-dark">
                                                <th>Payment Type</th>
                                                <th>Account From</th>
                                                <th>Transaction Code</th>
                                                <th>Amount</th>
                                                <th>Account Ref</th>
                                                <th>Date</th>
                                                <th>Names</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr  v-for="(item,index) in transactions" :key="item.id">

                                                <td>{{index+1}}. {{item.payment_type}}</td>
                                                <td class="text-capitalize">{{item.account_from}}</td>
                                                <td>{{item.transaction_code}}</td>
                                                <td class="text-capitalize"><b>KES {{item.amount}}</b></td>
                                                <td class="text-capitalize">{{item.account_ref}}</td>
                                                <td class="text-capitalize">{{item.date}}</td>
                                                <td class="text-capitalize"><b>{{item.names}}</b></td>

                                            </tr>
                                            </tbody>
                                            <tfoot class="table-dark">
                                            <tr>
                                                <th class="text-capitalize text-nowrap" colspan="2">{{receiptDetails.length}}</th>
                                                <td class="text-nowrap text-right " colspan="5">
                                                    <span class="fw-semibold ">TOTAL: {{totalReceiptAmount}}</span>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
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

            <!-- receipting modal -->
            <div id="receiptDetail" class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Receipt Details</h5>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <address>
                                        <strong class="text-capitalize">Received from:</strong><br>
                                        {{receiptDetail.paidBy}}<br>

                                    </address>
                                </div>
                                <div class="col-sm-6 text-sm-end">
                                    <address class="mt-2 mt-sm-0">
                                        <strong>Payment Method</strong><br>
                                        <span class="fw-medium">{{receiptDetail.source}}</span><br>
                                        On {{receiptDetail.dateCreated}}
                                    </address>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="py-2 mt-3">
                                    <h3 class="font-size-15 fw-bold">{{receiptDetail.receiptNo}}</h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap vertical-align-middle">
                                        <thead class="bg-light">
                                        <tr>
                                            <th style="width: 70px;">No.</th>
                                            <th>Description</th>
                                            <th class="text-end">Amount</th>

                                        </tr>
                                        </thead>
                                        <tfoot class="bg-light">
                                        <tr>
                                            <td colspan="2" class="border-0 text-end text-right">
                                                <strong>Total</strong>
                                            </td>
                                            <td class="border-0 text-end">
                                                <h5 class="m-0 text-uppercase fw-bold">{{formatPrice(receiptDetail.receiptAmount)}}</h5>
                                            </td>

                                        </tr>
                                        </tfoot>
                                        <tbody>
                                        <tr v-for="(item, index) in receiptInfos" :value="item" :key="index" title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                            <td>{{index+1}}</td>
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0">{{item.description}}</p>
                                            </td>
                                            <td class="text-end">{{formatPrice(item.receiptAmount)}}</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">

                            <a @click="printReceipt()" type="button" target="_blank" class="btn btn-primary waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print receipt
                            </a>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- end of receipting modal -->

            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                            ©County
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
        </body>

    </div>
</template>

<script>
    import NavigationBar from "@/components/Navigation";
    import router from "@/router";
    import {biller, execute} from "@/api";
    export default {
        name: "BillsReceipted",
        components: {NavigationBar},

        data() {
            return{
                searchValue:"",
                customers:[ {
                    account_from: "",
                    count: "",
                    names: ""
                }],
                transactions:[{
                    id: "",
                    payment_type: "",
                    account_to: "",
                    account_from: "",
                    transaction_code: "",
                    amount: "",
                    account_ref: "",
                    transaction_desc: "-",
                    date: "",
                    names: ""
                }],
                //###########

                monthNames: ['','January','February','March','April','May','June','July','August','September','October','November','December'],
                monthName:'',
                month:'',
                receiptNo:'',
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
            this.getCustomers()
            this.$watch('searchValue', function(newValue) {
                this.getCustomers(newValue)
            })
            //####
            const d = new Date();
            this.month =d.getMonth();
            this.monthName = this.getCurrentMonth()+" "+ this.getCurrentYear()
            this.getReceipts()
        },
        methods: {
            getCustomers(){
                const data = new FormData();
                data.append("function", "getCustomers");
                data.append("searchValue", this.searchValue);

                execute(data,biller)
                    .then((res) =>{
                        this.entries =[]
                        if (res.data.success) {
                            this.customers =res.data.data.customers
                        }else{
                            alert(res.data.message)
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            getCustomersHistory(account_from){
                const data = new FormData();
                data.append("function", "getCustomersHistory");
                data.append("account_from", account_from);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.transactions =res.data.data.transactions
                        }else{
                            alert(res.data.message)
                        }
                    })
                    .catch((e) => {
                        //alert(e.message);
                        this.message =e.message
                    });
            },
            //#########
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
                this.monthName = this.monthNames[this.month]
                this.receiptDetails = []
                const data = new FormData();
                data.append("function", "getReceipts");
                data.append("month", this.month);
                execute(data,biller)
                    .then((res) =>{
                        if (res.data.success) {
                            this.receiptDetails = res.data.data.receiptDetails
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