<template>
    <div>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta content="Rental management system by Nouveta LTD" name="description" />
            <meta content="Kelvin Njuguna" name="author" />
            <!-- App favicon -->
            <link rel="shortcut icon" href="assets/images/favicon.png">

            <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />

            <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
            <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
            <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
            <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">



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

        <!-- Search for bill -->
        <div class="modal fade " id="searchBillModal" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content ">
                    <div class="modal-header border-bottom-0 ">
                        <button type="button " class="btn-close d-none" data-dismiss="modal"  aria-label="Close "></button>
                    </div>
                    <div class="modal-body ">
                        <div class="text-center mb-4 ">
                            <div class="avatar-md mx-auto mb-4 ">
                                <div class="avatar-title bg-light rounded-circle text-success h1 ">
                                    <i class="bx bx-receipt "></i>
                                </div>
                            </div>

                            <div class="row justify-content-center ">
                                <div class="col-xl-10 ">
                                    <h4 class="text-primary ">Enter Bill Number To continue

                                    </h4>
                                    <p class="text-muted font-size-14 mb-4 ">
                                        Enter bill No to continue.
                                    </p>

                                    <form>
                                        <div class="row ">
                                            <div class="col-12 ">
                                                <div class="mb-3 ">
                                                    <label for="digit1-input" class="visually-hidden ">Bill No.</label>
                                                    <input  v-model="billNo" type="text" class="form-control form-control-lg text-center two-step " placeholder="Search for Bill">
                                                </div>
                                            </div>
                                        </div>
                                        <button data-dismiss="modal" @click="getBill()" type="button" class="btn btn-success btn-block w-100 ">
                                            <i class="bx bx-search-alt-2 font-size-16 align-middle me-2 "></i>
                                            Search
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search for bill -->

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
                                <h4 class="mb-sm-0 font-size-18 text-capitalize">New Bill</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active">Receipt Bill</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <!-- eTransactions table -->

                    <div class="row">
                        <div class="col-12">
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="p-3 bg-success bg-soft mb-4">
                                                        <h4 class="p-0 m-0">Bill No.{{billDetails.billNo}}</h4>
                                                    </div>
                                                </div>
                                                <div class="col-3 mb-4">
                                                    <div class="d-flex">

                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-0">Billed Amount</p>
                                                            <h5 class="mb-0 font-14px">{{formatPrice(billDetails.detailAmount)}}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3 mb-4">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-0">Paid Amount</p>
                                                            <h5 class="mb-0 font-14px">{{formatPrice(billDetails.receiptAmount)}}</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-3 mb-4">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-0">Balance</p>
                                                            <h5 class="mb-0 font-14px text-uppercase">{{formatPrice(billDetails.billBalance)}}</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-3 mb-4">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-0">Status</p>
                                                            <span v-if="billDetails.status==='PAID'" class="badge badge-soft-success text-uppercase">{{billDetails.status}}</span>
                                                            <span v-if="billDetails.status ==='UNPAID'" class="badge badge-soft-danger text-uppercase">{{billDetails.status}}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-12">
                                                <div class="table-responsive border-1">
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
                                                            <td class="border-0 text-end text-right">
                                                                <h5 class="m-0 text-uppercase fw-bold">{{formatPrice(billDetails.detailAmount)}}</h5>
                                                            </td>

                                                        </tr>
                                                        </tfoot>
                                                        <tbody>
                                                        <tr v-for="(item, index) in billInfo" :value="item" :key="index">
                                                            <td>{{index+1}}</td>
                                                            <td>
                                                                <p class="mb-0 p-0 m-0">{{item.description}}</p>
                                                            </td>
                                                            <td class="text-end text-right">{{formatPrice(item.billTotal)}}</td>

                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-white py-4">
                                            <div class="col-auto">
                                                <button type="submit" data-toggle="modal" data-target="#payment-modal" class="btn btn-primary chat-send w-md waves-effect waves-light"><span class="d-none d-sm-inline-block me-2">Receive Payment</span> <i class="mdi mdi-send"></i></button>
                                                <button data-toggle="modal" data-target="#searchBillModal" style="margin-left: 10px" ref="Close"  type="button" class="btn btn-success btn-block w-md ">
                                                    <i class="bx bx-search-alt-2 font-size-16 align-middle me-2 "></i>
                                                    Search
                                                </button>
                                            </div>
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

            <!-- payment modal -->
            <div class="modal fade" id="payment-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header d-none">
                            <span class="badge badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


                            <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle close-modal" data-dismiss="modal"  aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="badge  badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


                                <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-dismiss="modal" aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
                                </button>
                            </div>

                            <div class="payment-panel-parent">

                                <div v-if="paymentPanel" class="text-center payment-active-panel d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                                    <div class="success-image mb-4 pb-4 pt-4">
                                        <img src="assets/images/bills.svg" height="200" alt="">
                                    </div>
                                    <h4 class="text-black fw-bold">{{message}}</h4>
                                    <p class="text-muted mb-4">Print the bill or receive payment for this bill.</p>
                                    <div class="d-flex w-100 pb-2">
                                        <button @click="showPaymentMethod()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                                            <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                                            Proceed to Receive Payment
                                        </button>
                                        <a @click="printBill()" target="_blank" data-dismiss="" type="button" class="btn btn-outline-secondary waves-effect dismin-modal">Print Bill</a>
                                    </div>
                                </div>

                                <div v-if="paymentMethod" class="send-method payment-panel ">
                                    <label for="" class="mb-0 pb-0">Payment Method</label>
                                    <p><small class="text-muted">How would you like to send this money?</small></p>

                                    <div>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button fw-medium" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div class="flex-shrink-0 me-3">
                                                            <img class="rounded-circle" src="assets/images/users/mpesa.jpg" alt="Mobile Money" height="65">
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <p class="m-0 p-0 text-uppercase fw-semibold">MPESA</p>
                                                            <p class="mb-0 p-0"> <small>A payment request will be sent directly to the customer</small></p>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div>
                                                            <p>
                                                                A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to the MPESA number you enter below.
                                                            </p>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">MPESA Number</label>
                                                            <div class="form-floating mb-3">
                                                                <input v-model="phoneNumber" type="text" class="form-control font-21 text-success form-control-lg" id="phone-input" placeholder="Enter Name">
                                                                <label for="floatingnameInput">Phone No.</label>
                                                            </div>

                                                            <button @click="showTransactionSummary('MPESA')" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                                                                <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                                                                Send Payment Request
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button fw-medium collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <div class="flex-shrink-0 me-3">
                                                            <img class="rounded-circle" src="assets/images/users/money.jpg" alt="Mobile Money" height="65">
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <p class="m-0 p-0 text-uppercase fw-semibold">Cash</p>
                                                            <p class="mb-0 p-0"> <small>By selecting this option you confirm that you have received the payment inform of cash</small></p>

                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">

                                                        <div class="form-check form-check-primary mb-3">
                                                            <input v-model="confirmCash" class="form-check-input" type="checkbox" id="confirm-cash">
                                                            <label class="form-check-label" for="confirm-cash">
                                                                Confirm having received <strong>KES {{billDetails.billBalance}}</strong>
                                                            </label>
                                                        </div>

                                                        {{message}}
                                                        <br/>
                                                        <button v-if="confirmCash" @click="showTransactionSummary('CASH')"  type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                                                            <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                                                            Receive Cash Payment
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="transactionSummary" class="transaction-summary payment-panel">
                                    <label for="">Transaction Breakdown</label>
                                    <div class="border p-4 rounded ">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="text-muted ">
                                                    BillO NO.
                                                </div>
                                            </div>

                                            <div class="col-lg-6 align-self-end">
                                                <div class=" text-right text-black">
                                                    {{billDetails.billNo}}
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="text-muted mt-2">
                                                    Bill For
                                                </div>
                                            </div>

                                            <div class="col-lg-6 align-self-end">
                                                <div class=" text-right text-black">
                                                    {{billDetails.incomeTypeDescription}}
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="text-muted mt-2">
                                                    Payment Method
                                                </div>
                                            </div>

                                            <div class="col-lg-6 align-self-end">
                                                <div class=" text-right text-black">
                                                    {{paymentData.paymentMode}}
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="text-muted mt-2">
                                                    Transaction Amount
                                                </div>
                                            </div>

                                            <div class="col-lg-6 align-self-end">
                                                <div class=" text-right text-black">
                                                    KES {{billDetails.billBalance}}
                                                </div>
                                            </div>


                                            <div class="col-12 text-black"><hr class="mb-0 pb-0"></div>

                                            <div class="col-lg-6 text-uppercase">
                                                <div class="text-muted mt-2 font-21">
                                                    Total
                                                </div>
                                            </div>

                                            <div class="col-lg-6 align-self-end text-uppercase">
                                                <div class=" text-right text-black font-21 fw-bold">
                                                    KES {{billDetails.billBalance}}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mpesa-confirmation ">
                                            <div v-if="paymentData.paymentMode=='MPESA'">
                                                <p class="text-muted mt-2">A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to <strong class="text-black"> phone number ({{ phoneNumber }})</strong> soon after you click the <strong class="text-black text-capitalize">Send Request</strong> button bellow.
                                                    <br>
                                                    <br>
                                                    Remember to <strong class="text-black">Check your phone</strong> to confirm payment by entering your Mpesa pin.</p>
                                            </div>

                                            <div>{{message}}  </div>
                                            <br>
                                            <button @click="makePayment()" class="btn btn-primary btn-flex flex-grow-1 waves-effect btn-send waves-light text-center w-100">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <div class="stk-timer-container d-none justify-content-center align-items-center">
                                                        <span class="mdi mdi-timer-outline font-16px"></span>
                                                        <span class="stk-timer px-2"></span>
                                                    </div>
                                                    <div class="justify-content-center align-items-center d-flex">
                                                        <span class="px-2">Send Request</span>
                                                        <div class="flip-x"><i class="mdi mdi-reply ms-3 font-16px"></i></div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>


                                    </div>
                                </div>

                                <div v-if="transactionCompleted" class="text-center d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                                    <div class="success-image mb-4">
                                        <img src="assets/images/payment-confirmation-images/sent.svg" height="200" alt="">
                                    </div>
                                    <h4 class="text-blink-primary fw-bold">Transaction Complete</h4>
                                    <p class="text-muted mb-4"><strong class="text-black">KES {{receiptDetails.receiptAmount}}</strong> has been received for <strong class="text-black">Bill No. {{receiptDetails.billNo}}</strong></p>
                                    <button @click="printReceipt()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                                        <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                                        Print Receipt
                                    </button>
                                </div>



                            </div>
                        </div>
                        <div class="modal-footer d-flex d-none bill-modal-footer">
                            <button href="javascript: void(0);" disabled class="btn btn-outline-light waves-effect waves-light payment-prev"> <i class="mdi mdi-arrow-left ms-1"></i>Previouse</button>
                            <button href="javascript: void(0);" class="btn btn-primary waves-effect waves-light payment-next">Next <i class="mdi mdi-arrow-right ms-1"></i></button>
                            <button href="javascript: void(0);" class="btn btn-primary btn-flex flex-grow-1 waves-effect waves-light text-center d-none">
                                <div class="d-flex justify-content-center align-items-center"> <span>Send Money</span> <div class="flip-x"><i class="mdi mdi-reply flip-x ms-3 font-16px"></i></div></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of payment modal-->
            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                           © County
                        </div>
                        <div class="col-sm-6 ">
                            <div class="text-sm-end d-sm-block">
                                A product of County
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
    import {biller, execute, parking, rent, trade} from "@/api";
    export default {
        name: "ReceiptsNew",
        components: {NavigationBar},
        data(){
            return{
                confirmCash: false,
                phoneNumber:'',
                transactionCompleted: false,
                transactionSummary: false,
                paymentPanel: true,
                paymentMethod: false,
                paymentData: {
                    accNo: null,
                    payBillNo: null,
                    amount: null,
                    phoneNumber: null,
                    success: false,
                    paymentMode:null
                },
                billNo:'',
                billDetails:{
                    id: "",
                    billNo: "",
                    incomeTypeID: "",
                    incomeTypeDescription: "",
                    costCenterNo: "",
                    accountNo: ",",
                    description: "",
                    feeID: "",
                    detailAmount: "",
                    receiptAmount: "",
                    billBalance: "",
                    wardID: "",
                    subCountyID: "",
                    status: "",
                    dateCreated: ""
                },
                billInfo:[],
                message:null
            }
        },
        mounted() {
        },
        methods:{
            formatPrice(value) {
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'KES',
                    minimumFractionDigits: 2
                });
                return formatter.format(value);
            },
            getBill(){
                if(this.billNo === ''){
                    alert('Please Enter Bill No')
                }else {
                    const data = new FormData();
                    data.append("function", "getBill");
                    data.append("billNo", this.billNo);
                    execute(data,biller)
                        .then((res) =>{
                            if (res.data.success) {
                                this.billDetails = res.data.data.billDetails
                                this.billInfo = res.data.data.billInfo
                                this.paymentData.amount = res.data.data.billDetails.billBalance
                                this.paymentData.accNo = res.data.data.billDetails.billNo
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
            showPaymentMethod(){
                this.paymentMethod = true;
                this.paymentPanel = false;
                this.transactionSummary = false;
                this.transactionCompleted = false
            },
            printBill(){
                localStorage['params'] = JSON.stringify({
                    billNo: this.billDetails.billNo
                })
                const routeData = this.$router.resolve({name: 'bill'});
                window.open(routeData.href, '_blank');
            },
            printReceipt() {
                if (this.receiptDetails.receiptNo == null) {
                    alert("Try again later");
                } else {
                    //  this.$refs.closeReceived.click();
                    localStorage['params'] = JSON.stringify({
                        receiptNo: this.receiptDetails.receiptNo
                    })
                    const routeData = this.$router.resolve({name: 'receipt'});
                    window.open(routeData.href, '_blank');
                }
            },
            showTransactionSummary(paymentMode){

                this.paymentData.paymentMode = paymentMode

                if(paymentMode === "MPESA") {
                    if (this.phoneNumber == null) {
                        alert("Enter phone number");
                        return;
                    }
                }

                this.paymentMethod = false;
                this.paymentPanel = false;
                this.transactionSummary = true;
                this.transactionCompleted = false
            },
            makePayment() {
                if(this.paymentData.paymentMode === "MPESA") {
                    if (this.phoneNumber == null) {
                        alert("Enter phone number");
                        return;
                    }
                }
                this.message = "Payment Request sent";
                this.paymentData.phoneNumber = this.phoneNumber

                const data = new FormData();
                data.append("function", "makePayment");
                data.append("paymentData", JSON.stringify(this.paymentData));

                let stream = null;
                if (this.paymentData.accNo.startsWith("SBP")) {
                    stream = trade;
                }
                if (this.paymentData.accNo.startsWith("PKN")) {
                    stream = parking;
                }

                if (this.paymentData.accNo.startsWith("RNT")) {
                    stream = rent;
                }

                if (this.paymentData.accNo.startsWith("BLL")) {
                    stream = biller;
                }

                execute(data, stream)
                    .then((res) => {
                        if (res.data.success) {
                            this.paymentMethod = false;
                            this.paymentPanel = false;
                            //start checking payment
                            this.timer = setInterval(() => {

                                this.checkPayment();
                            }, 3000);
                        } else {
                            this.rate = null;
                            alert(res.data.message);
                        }
                    })
                    .catch((e) => {
                        alert(e.message);
                    });
            },
            checkPayment() {
                this.randomNumber = Math.floor(Math.random() * 3) + 1
                if(this.randomNumber === 1){
                    this.message = "Waiting for payment.";
                }
                if(this.randomNumber === 2){
                    this.message = "Waiting for payment..";
                }
                if(this.randomNumber ===3){
                    this.message = "Waiting for payment...";
                }
                const data = new FormData();
                data.append("function", "checkPayment");
                data.append("accountRef", this.paymentData.accNo);

                let stream = null;
                if (this.paymentData.accNo.startsWith("SBP")) {
                    stream = trade;
                }
                if (this.paymentData.accNo.startsWith("PKN")) {
                    stream = parking;
                }
                if (this.paymentData.accNo.startsWith("RNT")) {
                    stream = rent;
                }
                if (this.paymentData.accNo.startsWith("BLL")) {
                    stream = biller;
                }
                execute(data, stream)
                    .then((res) => {
                        if (res.data.success) {
                            clearInterval(this.timer);
                            this.receipt = true;
                            this.paymentData.success = false;
                            this.transaction = res.data.data.transaction;
                            this.receiptDetails = res.data.data.receipt.receiptDetails
                            //Close the modal
                            this.transactionSummary = false
                            this.transactionCompleted = true
                        }
                    })
                    .catch((e) => {
                        alert(e.message);
                    });
            },

        }
    }
</script>

<style scoped>

</style>