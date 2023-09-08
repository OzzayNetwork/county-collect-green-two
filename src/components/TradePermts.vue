<template>
    <div>
        <head>

            <meta charset="utf-8" />
            <title>Desk Birdy | Business Permits</title>
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
                                <h4 class="mb-sm-0 font-size-18">Business Permits</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a href="#">Certificates & Licenses</a></li>
                                        <li class="breadcrumb-item active">Business Permits</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <h4 class="card-title text-capitalize mb-0 ">
                                            All Permits Raised this month
                                        </h4>

                                        <div class="d-flex">
                                            <a  @click="gotTo('new-bill')" type="button" class="btn btn-primary dropdown-toggle option-selector me-3 text-capitalize">
                                                <i class="mdi mdi-plus-circle-outline  font-size-16"></i> <span class="pl-1 d-md-inline">Create A Bill</span>
                                            </a>
                                        </div>

                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>
                                <div class="card-header bg-white w-100 border-bottom d-flex">
                                    <div class="mr-15px">
                                        <select class="form-select form-control bg-white mr-15px" title="Select System User Type" data-live-search="true" tittle="Select a tenant" data-style="">
                                            <option selected value="All users (100)">All Businesses</option>
                                            <option value="Auditors [0]">Active Certificates</option>
                                            <option value="Accountants [2]">Expired Certificates</option>
                                           
                                      </select>
                                    </div>

                                  <div class="flex-grow-1">
                                    <div class="search-box mb-0 me-2 flex-grow-1">
                                        <div class="position-relative">
                                            <input type="text" class="form-control bg-light border-light rounded" placeholder="Search ...">
                                            <i class="bx bx-search-alt search-icon"></i>
                                        </div>
                                    </div>
                                   </div>

                                   
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive ">

                                        <table class="table align-middle table-hover  contacts-table table-striped " id="datatable-buttons">
                                            <thead class="table-light">
                                            <tr class="table-dark">
                                                <th scope="col">NO.</th>
                                                <th scope="col">Business ID</th>
                                                <th scope="col">Business Name</th>
                                                <th scope="col" class="">Duration</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">Expiry Date</th>

                                                <th>Status</th>
                                                <th scope="col" class="text-right">Amount Paid</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr  v-for="(item, index) in permits" :value="item" :key="index">
                                                <td class="text-capitalize text-nowrap">{{index+0}}</td>
                                                <td class="text-capitalize text-nowrap">{{item.businessID}}</td>
                                                <td class="text-capitalize text-nowrap">
                                                    <a href="">{{item.businessName}}</a>
                                                </td>
                                                <td class="text-capitalize text-nowrap">{{item.duration}}</td>
                                                <td class="text-capitalize text-nowrap">{{getHumanDate(item.startDate)}} <!--<span class="text-muted">{{getHumanTime(item.startDate)}}</span>--></td>
                                                <td class="text-capitalize text-nowrap">{{getHumanDate(item.endDate)}} <span class="text-muted">{{getHumanTime(item.endDate)}}</span></td>
                                                <td>
                                                    <span v-if="getPermitStatus(item.endDate)==='Expired'" class="badge badge-soft-danger text-uppercase">{{getPermitStatus(item.endDate)}}</span>
                                                    <span v-if="getPermitStatus(item.endDate)==='Active'"  class="badge badge-soft-success text-uppercase">{{getPermitStatus(item.endDate)}}</span>
                                                </td>
                                                <td class="text-nowrap text-right ">
                                                    <span class="fw-semibold ">{{formatPrice(item.receiptAmount)}}</span>
                                                </td>

                                                <td>
                                                    <div class="d-flex justify-content-end">
                                                        <button @click="viewdetails(item)"  type="button" class="btn btn-primary btn-sm waves-effect waves-light text-nowrap me-3" data-toggle="modal" data-target="#details-modal"><i class="bx bx-show font-size-16 align-middle me-2"></i> Details</button>
                                                        <a @click="printTradePermit(item.businessID)" target="_blank" class="btn btn-success btn-sm waves-effect waves-light">
                                                            <i class="bx bx-printer font-size-16 align-middle me-2"></i> Print
                                                        </a>
                                                       <!-- <div class="dropdown">
                                                            <a class="text-muted font-size-16" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                            </a>

                                                            <div class="dropdown-menu dropdown-menu-end ">
                                                                <a class="dropdown-item " data-bs-toggle="modal" data-bs-target=".receipting-modal" href="#"><i class="font-size-15 mdi mdi-eye me-3 "></i>View</a>
                                                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-printer me-3 "></i>Print</a>
                                                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-email me-3 "></i>Send Email Reminder</a>
                                                                <a class="dropdown-item " href="# "><i class="font-size-15 mdi mdi-chat me-3 "></i>Send SMS Reminder</a>

                                                            </div>
                                                        </div>-->
                                                    </div>
                                                </td>
                                            </tr>

                                            </tbody>
                                            <tfoot class="table-dark">
                                            <tr>

                                                <th>
                                                    {{permits.length}} Certs
                                                </th>


                                                <th class="text-nowrap" colspan="4"></th>
                                                <td colspan="">

                                                </td>

                                                <td class="text-nowrap text-right " colspan="2">
                                                    <span class="fw-semibold ">{{totalReceipt}}</span>
                                                </td>
                                                <td></td>

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
            <div id="details-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Certificate Details</h5>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <address>
                                        <strong class="text-capitalize">Certificate Prepared for:</strong><br>
                                        Business Name {{business.businessName}} AT {{business.physicalAddress}} <br>
                                        {{business.email}}, {{business.telephone1}}<br>
                                        Business ID {{business.businessID}} PIN {{business.pinNumber}} <br/>
                                        <br>
                                        Valid From {{business.startDate}}
                                        <br>
                                        <span class="pr-2">Valid Till {{business.endDate}} </span>
                                        <span v-if="getPermitStatus(business.endDate)==='Active'" class="badge badge-soft-success text-uppercase me-3">{{getPermitStatus(business.endDate)}}</span>
                                        <span v-if="getPermitStatus(business.endDate)==='Expired'" class="badge badge-soft-danger text-uppercase me-3">{{getPermitStatus(business.endDate)}}</span>

                                    </address>
                                </div>

                                <div class="col-6 text-right">
                                    <address>
                                        <strong class="text-capitalize">Location Details</strong><br>
                                        Street/Road: {{business.physicalAddress}}<br>
                                        Plot No.:{{business.plotNo}}<br>
                                        Building: {{business.building}}. Floor: {{business.floor}}. Door/Stall No.: {{business.door}}<br/>
                                        Subcounty: CBD. Ward: Mututu


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
                                    <h3 class="font-size-15 fw-bold">{{business.billNo}}</h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap vertical-align-middle">
                                        <thead class="bg-light">
                                        <tr>
                                            <th>More Details</th>
                                            <th class="text-end"></th>

                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Serial Number</p>
                                            </td>
                                            <td class="">{{business.id}}</td>

                                        </tr>

                                        <tr title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Business Owner(s)</p>
                                            </td>
                                            <td class="">{{business.telephone1}},{{business.telephone2}}</td>

                                        </tr>

                                        <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Profession/Occupation</p>

                                            </td>
                                            <td class="">{{business.businessActivityDescription}}</td>

                                        </tr>
                                        <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Application Date</p>

                                            </td>
                                            <td class="">{{getHumanDate(business.dateCreated)}}</td>

                                        </tr>

                                        <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Date Approved</p>

                                            </td>
                                            <td class="">{{getHumanDate(business.dateOfIssue)}}</td>

                                        </tr>

                                        <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Days To Expiry</p>

                                            </td>
                                            <td class="">{{getDays(business.endDate)}} Days</td>

                                        </tr>

                                        <tr title="Drving a vehicle without a valid inspection certificate inspected">
                                            <td>
                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Amount Paid</p>

                                            </td>
                                            <td class="text-uppercase">{{formatPrice(business.receiptAmount)}}</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">

                            <a  target="_blank" type="button" class="btn btn-success waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i>Approve
                            </a>

                            <a  target="_blank" type="button" class="btn btn-danger waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i>Revoke
                            </a>

                            <a @click="printTradePermit(business.businessID)" target="_blank" type="button" class="btn btn-primary waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Bill
                            </a>
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
                            © County
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


        </body>


    </div>
</template>

<script>
    import NavigationBar from "@/components/Navigation";
    import {trade, execute} from "@/api";
    import router from "@/router";
    export default {
        name: "TradePermts",
        components: {NavigationBar},
        data(){
            return{
                totalReceipt: 0,
                permits: [],
                business:{
                    endDate:'',
                }
            }
        },
        mounted() {
            this.getPermits()

        },
        methods:{
            totalReceiptAmount() {
                return this.formatPrice(this.permits.reduce((sum, permit) => sum + parseInt(permit.receiptAmount), 0));
            }
            ,
            printTradePermit(businessID) {

                const data = new FormData();
                data.append("function", "printTradePermit");
                data.append("businessID", businessID);
                execute(data, trade)
                    .then((res) => {
                        if (res.data.success) {

                            localStorage['params'] = JSON.stringify({
                                businessID: businessID
                            })
                            const routeData = this.$router.resolve({name: 'trade'});
                            window.open(routeData.href, '_blank');

                        } else {
                            this.businessNotFound = true
                        }
                    })
                    .catch((e) => {
                        alert(e.message);
                    });
            },
            getDays(dateData){
                const dateObject = new Date(Date.parse(dateData));
                const today = new Date();
                const diffTime = Math.abs(dateObject.getTime() - today.getTime());
                return  Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            },
            viewdetails(item){
                this.business = item
            },
            formatPrice(value) {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'KES',
                    minimumFractionDigits: 2
                });
                return formatter.format(value);
            },
            getPermitStatus(dateData){
                const dateObject = new Date(Date.parse(dateData));
                const today = new Date();
                if (dateObject.getTime() < today.getTime()) {

                    return "Expired";
                   // console.log(&quot;The date is less than today&apos;s date.&quot;);
                } else {
                    return "Active";
                   // console.log(&quot;The date is greater than or equal to today&apos;s date.&quot;);
                }

            },
            getHumanDate(dateData){
              //  const res = dateData.split(" ");
                const dateObject = new Date(Date.parse(dateData));
                return dateObject.toDateString();

            },
            getHumanTime(date){
                const res = date.split(" ");
                return res[1]
            },
            gotTo(route){
                router.push(route)
            },
            getPermits(){
                const data = new FormData();
                data.append("function", "getPermits");
                execute(data,trade)
                    .then((res) =>{
                        if (res.data.success) {
                            this.permits = res.data.data.permits
                            this.totalReceipt = this.totalReceiptAmount()
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